import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Pokes.css';

import PokeCard from '../components/PokeCard'

const Pokes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pokes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Pokes;
