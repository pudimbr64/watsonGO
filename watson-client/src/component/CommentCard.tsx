import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Dialog, Typography, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { encode } from 'base64-arraybuffer';
import serverURL from '../util/serverURL';

interface CommentCardProps {
    id: number;
    comment: string;
    globalDisable: boolean;
    setGlobalDisable: Function;
    shouldReloadComments: boolean;
    setShouldReloadComments: Function;
    voice: string;
}

const CommentCard = (props: CommentCardProps) => {

    let { id, comment, globalDisable, setGlobalDisable, shouldReloadComments, setShouldReloadComments , voice} = props;
    let [deleteDialog, setDeleteDialog] = useState(false);

    const classes = useStyles();

    return (
        <div style={{
            display: 'flex', width: '95%', height: 'auto', maxHeight: 300, maxWidth: '100%', backgroundColor: '#fff',
            flexDirection: "row", borderRadius: 15, boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)', margin: 10
        }}>
            <div style={{ width: '60%', minHeight: 100, height: "auto", maxHeight: 300, maxWidth: '80%', padding: 10 }}>
                <span style={{ wordWrap: 'break-word', fontSize: 14 }}>{comment.length > 200 ? comment.slice(0, -4) + '...' : comment}</span>
            </div>
            <div style={{ display: 'flex', width: '40%', height: 'auto', maxHeight: 300, maxWidth: '30%', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Button style={{ width: 80, alignSelf: 'flex-end' }} className={classes.listenButton} disabled={globalDisable} startIcon={<PlayCircleOutlineIcon />} size="small" onClick={async () => {
                    setGlobalDisable(true);
                    const audio = await axios.get(`${serverURL}/getCommentAudio/${id}/${voice}`);
                    let base64 = encode(audio.data.audio.data);
                    let sound = new Audio();
                    sound.addEventListener("ended", function () {
                        setGlobalDisable(false);
                    });
                    sound.src = "data:audio/wav;base64," + base64;
                    sound.play();
                }}>Ouvir</Button>
                <IconButton style={{ width: 80, alignSelf: 'flex-end' }} className={classes.deleteButton} disabled={globalDisable} onClick={() => {
                    setDeleteDialog(true);
                }}><DeleteIcon style={{ color: 'red' }} /></IconButton>
            </div>
            <Dialog
                open={deleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Deletar o comentário?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tem certeza que quer deletar o comentário: '{comment}'?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setDeleteDialog(false); }} color="primary">
                        Não
          </Button>
                    <Button color="primary" autoFocus onClick={async () => {
                        setGlobalDisable(true);
                        const result = await axios.delete(`${serverURL}/deleteComment/${id}`);
                        if (result) {
                            setShouldReloadComments(!shouldReloadComments);
                            setGlobalDisable(false);
                            setDeleteDialog(false);
                        }
                    }}>
                        Sim
          </Button>
                </DialogActions>
            </Dialog >
        </div >
    );
}

const useStyles = makeStyles({
    listenButton: {
        background: '#2f3e46',
        border: '2px solid black',
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        float: "right",
    },
    deleteButton: {
        background: '#2f3e46',
        border: '2px solid black',
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        height: 48,
        padding: '0 30px',
        float: "right",

    }
});

export default CommentCard;