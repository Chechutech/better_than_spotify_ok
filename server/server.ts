
import express from 'express';
import cors from 'cors';

import SpotifyWebApi from 'spotify-web-api-node';
//import lyricsFinder from 'lyrics-finder';
const lyricsFinder = require("lyrics-finder")

import { Request, Response } from 'express';
//import dotenv from 'dotenv'

//dotenv.config()

const app = express();

app.use(cors());
app.use (express.json());

app.post('/refresh', (req: Request, res:Response) =>{
    const refreshToken = req.body.refreshToken;
     const spotifyApi = new SpotifyWebApi({
        
        redirectUri:'http://localhost:8100',
         clientId:'1cdba6ab0cb3446aadf38d76f8a152fb',
         clientSecret:'14bbc997c3dc42a49362df0786915d7c',
          
         refreshToken,

    })
    spotifyApi.refreshAccessToken()
    .then((data:any) => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch((err:any) => {
        res.sendStatus(400)
    })
})

app.post('/login', (req: Request, res:Response) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:8100',
        clientId:'1cdba6ab0cb3446aadf38d76f8a152fb',
        clientSecret:'14bbc997c3dc42a49362df0786915d7c',
          
    })
    spotifyApi.authorizationCodeGrant(code)
        .then((data:any) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch((err:any) => {
            res.sendStatus(400)
    })
})

app.get('/lyrics', async (req: Request, res:Response) => {
       const lyrics= await lyricsFinder(req.query.artist, req.query.track) || "No Lyrics Found"
       res.json({ lyrics })
       })

app.listen(3001)
