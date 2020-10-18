import connection from "../database/connection";
import { Request, RequestHandler, Response } from 'express';
import watson from "../utils/watsonUtil";

interface CommentController {
    createComment: RequestHandler,
    getAllComments: RequestHandler,
    deleteComment: RequestHandler,
    getAudio: RequestHandler,
    listVoices: RequestHandler
}

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: watson.apiKey }),
    serviceUrl: watson.url
});

const commentController: CommentController = {

    createComment: async (req: Request, res: Response) => {
        try {
            let { comment } = req.body;
            await connection('comments').insert({ comment: comment });
            res.status(200).json({
                success: true,
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    },
    getAllComments: async (req: Request, res: Response) => {
        try {
            let comments = await connection('comments').select('*').orderBy('id', 'desc');
            res.status(200).json({
                success: true,
                comments: comments
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    },
    deleteComment: async (req: Request, res: Response) => {
        try {
            let { id } = req.params;
            let commentID: Array<any> = await connection('comments').select('id').where('id', id);
            if (commentID.length > 0) {
                await connection('comments').del('comments').where('id', id);
                res.status(200).json({
                    success: true
                });
            } else {
                throw "Não existe.";
            }
        } catch (err) {
            res.status(500).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    },
    getAudio: async (req: Request, res: Response) => {
        try {
            let { id, voice} = req.params;
            let comment = await connection('comments').select('*').where('id', id);

            const params = {
                text: comment[0].comment,
                voice: voice,
                accept: 'audio/wav'
            };
            textToSpeech
                .synthesize(params)
                .then((response: any) => {
                    const audio = response.result;
                    return textToSpeech.repairWavHeaderStream(audio);
                })
                .then((repairedFile: ArrayBuffer) => {
                    res.status(200).jsonp({
                        success: true,
                        audio: repairedFile
                    });
                })
                .catch((err: any) => {
                    console.log(err);
                });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }
    },
    listVoices: async (req: Request, res: Response) => {
        try {
            let voices = await textToSpeech.listVoices();
            if (voices) {
                res.status(200).json(voices.result);
            }
        } catch (err) {
            res.status(500).json({
                success: false,
                error: "Ocorreu um erro. " + err,
            });
        }

    }
}

export default commentController;