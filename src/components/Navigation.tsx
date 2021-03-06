import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import {checkmarkCircle, personCircle, trophy} from "ionicons/icons";
import React from "react";

import Pokes from "../pages/Pokes";
import Rewards from "../pages/Rewards";
import User from "../pages/User";
import Onboarding from "../pages/Onboarding"

const Navigation: React.FC = () => (

<IonTabs>
    <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path='/pokes' component={Pokes} exact />
        <Route path='/rewards' component={Rewards} exact />
        <Route path='/user' component={User} exact />
        <Route path='/splash' component={Onboarding} exact />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
        <IonTabButton tab="pokes" href="/pokes">
            <IonIcon icon={checkmarkCircle} />
            <IonLabel>Pokes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="rewards" href="/rewards">
            <IonIcon icon={trophy} />
            <IonLabel>Rewards</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/user">
            <IonIcon icon={personCircle} />
            <IonLabel>User</IonLabel>
        </IonTabButton>
        <IonTabButton tab="splash" href="/splash">
            <IonIcon icon={personCircle} />
            <IonLabel>splash</IonLabel>
        </IonTabButton>
    </IonTabBar>
</IonTabs>

)

export default Navigation;