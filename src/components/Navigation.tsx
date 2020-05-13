import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import Home from "../pages/Home";
import {checkmarkCircleOutline, personCircle, trophy} from "ionicons/icons";
import React from "react";

const Navigation: React.FC = () => (

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

)

export default Navigation;