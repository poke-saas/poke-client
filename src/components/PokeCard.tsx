import { IonCard, IonCardContent, IonButton, IonItem, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import {logoFacebook, logoTwitter, logoInstagram, informationCircle, checkmark} from "ionicons/icons";

type PokeCardProps = {
    title: string,
    desc: string,
    payload: string,
    type: string,
}

const PokeCard: React.FC<PokeCardProps> = ({title,desc,payload,type}) => {

    let icon = informationCircle

    switch (type) {
        case "twitter":
            icon = logoTwitter
            break;
        case "instagram":
            icon = logoInstagram
            break;
        case "facebook":
            icon = logoFacebook
            break;
    }

    return (
        <IonCard>
            <IonItem>
                <IonIcon icon={icon} slot="start" />
                <IonLabel>{title}</IonLabel>
                <IonButton fill="outline" href={payload} slot="end"><IonIcon icon={checkmark} slot="start" />Claim</IonButton>
            </IonItem>

            <IonCardContent>
                {desc}
            </IonCardContent>
        </IonCard>
    );
};

export default PokeCard;
