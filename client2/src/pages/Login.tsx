import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow} from '@ionic/react';
import './Login.css';
import logo from "../imagenes/logo.png";
import background6 from "../imagenes/background6.jpg";

const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=1cdba6ab0cb3446aadf38d76f8a152fb&response_type=code&redirect_uri=http://localhost:8100&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login: React.FC = () => {
  return (
    <IonPage>
      
      <IonHeader>
     
        <IonToolbar>
        <div className = "logo">
          <img src={logo} className = "logo-img" 
         style={{
          width: "150px",
          minWidth: "100px",
      
        
          
          
        }}
        alt="logo" />
         
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className = "background6">
          <img src={background6} className = "background6" 
         style={{
         
          marginTop: "0%",
          zIndex: "0%",
        
         
         
          
          
        }}
        alt=" background"/>
      <IonGrid>
 <IonRow className="btn-login" class="ion-justify-content-center" >
    <IonButton  color="success" fill="solid" expand="block"   href = {AUTH_URL} >Login with Spotify
    </IonButton>
    
      </IonRow>
      </IonGrid>
      </div>
     </IonContent>
    
    </IonPage>
  );
};

export default Login;
