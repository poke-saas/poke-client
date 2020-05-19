import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonThumbnail, IonLabel, IonBadge, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import './User.css';
import {logoFacebook, logoInstagram, logoTwitter, closeCircle} from "ionicons/icons";

const User: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">User</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem>
              <IonThumbnail slot="start">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
              </IonThumbnail>
              <IonLabel>
                  <h1>User Name</h1>
                  <IonBadge color="medium">Member of Founders</IonBadge>
              </IonLabel>
          </IonItem>
          <IonButton expand="block" ><IonIcon icon={logoTwitter} slot={"start"} /> Connect to Twitter</IonButton>
          <IonButton expand="block" ><IonIcon icon={logoInstagram} slot={"start"} /> Connect to Instagram</IonButton>
          <IonButton expand="block" ><IonIcon icon={logoFacebook} slot={"start"} /> Connect to Facebook</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default User;
