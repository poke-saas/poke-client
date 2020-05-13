import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonTabs } from '@ionic/react';
import { checkmarkCircleOutline, trophy, personCircle } from 'ionicons/icons'
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/*<IonRouterOutlet>*/}
      {/*  <Route path="/home" component={Home} exact={true} />*/}
      {/*  <Route exact path="/" render={() => <Redirect to="/home" />} />*/}
      {/*</IonRouterOutlet>*/}
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/" to="/home" />
                <Route path='/home' component={Home} exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={checkmarkCircleOutline} />
                    <IonLabel>Pokes</IonLabel>
                </IonTabButton>
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={trophy} />
                    <IonLabel>Rewards</IonLabel>
                </IonTabButton>
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={personCircle} />
                    <IonLabel>User</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
