import useAuth from '../helpers/useAuth'
import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
 import axios from 'axios'
 import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
 


const spotifyApi = new SpotifyWebApi({
    clientId: '1cdba6ab0cb3446aadf38d76f8a152fb',
})

interface Track{
  title:string;
  artist:string;
}
 const Dashboard: React.FC = ({code}:any) => {

   const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
   const [searchResults, setSearchResults] :any = useState([])
   const [playingTrack, setPlayingTrack] = useState<Track>()
   const [lyrics, setLyrics] = useState('')
  
   function chooseTrack(track:any) {
       setPlayingTrack(track)
       setSearch('')
       setLyrics('')
   }
      useEffect ( () => { 
      if (!playingTrack) return
      
       axios.get ('http://localhost:3001/lyrics', {
         params: {
            track: playingTrack.title,
            artist: playingTrack.artist
          }
       }).then( res=> {
          setLyrics(res.data.lyrics)
        })
      }, [playingTrack])


   useEffect(() => {
       if(!accessToken) return
       spotifyApi.setAccessToken(accessToken)
   }, [accessToken])

   useEffect(() :any => {
       if(!search) return setSearchResults([])
       if(!accessToken) return
       let cancel = false
       spotifyApi.searchTracks(search) 
       .then(res  =>{
           if(cancel) return
           setSearchResults(
             res.body.tracks?.items.map((track):any => {
               const smallestAlbumImage = track.album.images.reduce((smallest:any, image:any) => {
                 //const img:any = image.height,

                   if(image.height < smallest.height) return image
                   return smallest
               }, track.album.images[0])
               return{
                   artist: track.artists[0].name,
                   title: track.name,
                   uri: track.uri,
                   albumUrl: smallestAlbumImage.url
               }
           }))
       })
       return () => cancel = true
   }, [search, accessToken])
   return(
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spotify</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Searchbar with a placeholder</p>
        <IonSearchbar value={search} onIonChange={e => setSearch(e.detail.value!)} placeholder="Search Songs/Artists">
        <section className='flex-grow-1 my-2' style={{ overflow: 'auto' }}>
           {searchResults.map((track:any) => (
              <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
           ) )} 
            {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
         </section>
        </IonSearchbar>

      </IonContent>
      <IonFooter>
     </IonFooter>
    </IonPage>
   )
 }

 export default Dashboard;