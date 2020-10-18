import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Backdrop, CircularProgress, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import SERVER_URL from './util/serverURL';
import voices from './util/voiceList';
import CommentCard from './component/CommentCard';

interface Comments {
  id: number;
  comment: string;
}

function App() {
  let [commentList, setCommentList] = useState<Array<Comments>>([]);
  let [voiceList, setVoiceList] = useState<Array<any>>(voices);
  let [selectedVoice, setSelectedVoice] = useState(0);
  let [shouldReloadComments, setShouldReloadComments] = useState(false);
  let [globalDisable, setGlobalDisable] = useState(false);
  let [typedText, setTypedText] = useState<string>('');
  let [noTextDialog, setNoTextDialog] = useState(false);
  let element = document.getElementById('commentList');
  const classes = useStyles();

  const fetchCommentData = async () => {
    const result = await axios(SERVER_URL + `/getAllComments`,
    );
    setCommentList(result.data.comments);
  };

  useEffect(() => {
    fetchCommentData();
    if (element) {
      element.scroll({ top: 0, behavior: 'smooth' });
    }
  }, [shouldReloadComments])

  return (

    <div style={{ backgroundColor: '#000', height: '100vh', width: '100vw', display: 'flex', justifyContent: "space-around" }}>
      <div style={{ backgroundColor: '#cad2c5', border: "solid 2px", boxShadow: '3px 3px 20px 3px rgba(199, 210, 197, 1)', borderRadius: 15, height: '85vh', width: '85vw', marginTop: 50, display: "flex" }}>
        <div style={{ flexDirection: "column", justifyContent: 'space-around', width: "45%" }}>
          <h2 style={{ fontFamily: "Roboto", margin: '50px 0px -20px 50px' }}>Comentário</h2>
          <div className={classes.borderWrapBox}>
            <TextField value={typedText} className={classes.textField} multiline rows={7} placeholder={"Diga algo legal!"} InputProps={{ disableUnderline: true }}
              onChange={(evt) => {
                setTypedText(evt.target.value);
              }}>
            </TextField></div>
          <div><Button disabled={globalDisable} variant={"contained"} className={classes.sendButton} onClick={async () => {
            if (typedText.length > 0) {
              setGlobalDisable(true);
              const result = await axios.post(SERVER_URL + `/addComment`, { comment: typedText });
              if (result) {
                setGlobalDisable(false);
                setTypedText("");
                setShouldReloadComments(!shouldReloadComments);
              }
            } else {
              setNoTextDialog(true);
            }
          }}>
            Enviar
          </Button>
          </div>
          <div style={{ flexDirection: 'row', width: "100%", margin: 50, marginTop: 100 }}>
            <h2>Escolha uma voz!</h2>
            <FormControl style={{ width: "80%" }}>
              <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
              <NativeSelect
                onChange={(evt) => {
                  setSelectedVoice(parseInt(evt.target.value));
                }}
                defaultValue={selectedVoice}
                inputProps={{
                  name: 'name',
                  id: 'uncontrolled-native',
                }}
              >
                {voiceList.map((voice, index) => {
                  return (
                    <option value={index}>{voice.description}</option>
                  )
                })}
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className={classes.verticalLine}></div>
        <div style={{ flexDirection: "column", justifyContent: 'space-around', width: "55%" }}>
          <h2 style={{ fontFamily: "Roboto", margin: '50px 0px -20px 50px' }}>Comentários</h2>
          <div id='commentList' style={{ overflow: 'auto', height: '80%', width: "100%", marginTop: 40 }}>
            {commentList.map((comment: Comments) => {
              return (
                <CommentCard id={comment.id}
                  comment={comment.comment}
                  globalDisable={globalDisable}
                  setGlobalDisable={setGlobalDisable}
                  shouldReloadComments={shouldReloadComments}
                  setShouldReloadComments={setShouldReloadComments}
                  voice={voiceList[selectedVoice].name} />
              )
            })}
          </div>
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={globalDisable}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        open={noTextDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Digite um comentário primeiro!"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => { setNoTextDialog(false); }} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

const useStyles = makeStyles({
  sendButton: {
    background: '#2f3e46',
    border: '2px solid black',
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    float: "right",
    marginRight: 50,
  },
  textField: {
    background: "#84a98c",
    borderRadius: 15,
    border: '2px solid linear-gradient(to right, red, orange)',
    width: '100%',
    height:"100%"
  },
  borderWrapBox: {
    pading: '10rem',
    margin: 50,
    marginBottom: 20,
    background: '#84a98c',
    width: 'auto',
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    padding: 10,
    border: 'dashed 2px'
  },
  verticalLine: {
    borderLeft: '2px solid black',
    height: '80%',
    marginTop: 80,
  }, backdrop: {
    zIndex: 1,
    color: '#fff',
  },
});

export default App;
