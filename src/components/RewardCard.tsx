import { IonCard, IonCardContent, IonButton, IonItem, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import {trophy} from "ionicons/icons";
import {checkmark} from "ionicons/icons";

type RewardCardProps = {
    title: string,
    desc: string,
    points: number,
}

const RewardCard: React.FC<RewardCardProps> = ({title,desc,points}) => {


    return (
        <IonCard>
            <img src="https://www.whitehouse.gov/wp-content/uploads/2017/12/iStock-178371179-2-820x547.jpg" />
            <IonItem>
                <IonLabel>{title}</IonLabel>
            </IonItem>

            <IonCardContent>
                {desc}
            </IonCardContent>

            <IonItem>
                <IonLabel>{points} <IonIcon icon={trophy} /></IonLabel>
                <IonButton fill="outline" slot="end"><IonIcon icon={checkmark} slot="start" />Claim</IonButton>
            </IonItem>
        </IonCard>
    );
};

export default RewardCard;
