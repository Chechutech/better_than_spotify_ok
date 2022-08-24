import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow} from '@ionic/react';
import './Login.css';


const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=1cdba6ab0cb3446aadf38d76f8a152fb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
 <IonRow className="btn-login" class="ion-justify-content-center">
    <IonButton  color="success" expand="block" href = {AUTH_URL} >Login with Spotify</IonButton>
    
      </IonRow>
      </IonGrid>
     </IonContent>
    </IonPage>
  );
};

export default Login;
