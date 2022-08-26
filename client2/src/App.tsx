import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  
  
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse } from 'ionicons/icons';

import Dashboard from './components/Dashboard';

import Login from './pages/Login';
import Blob from './components/Blob';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';


setupIonicReact();

interface ContainerProps{}

const code= new URLSearchParams(window.location.search).get('code');

const App: React.FC<ContainerProps>= () => {
  return (

    <IonApp>    
   
     
     <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
         
          <Route exact path="/">
          { code ? <Dashboard code={code} /> : <Login /> } 
          <Blob/>
          </Route>
        
        </IonRouterOutlet>
        <IonTabBar slot="bottom">         
          <IonTabButton tab="tab2" href="/">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          
          </IonTabButton>
         
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  
);
}
export default App;
