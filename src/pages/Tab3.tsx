import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonCard,
  IonListHeader,
  IonButtons,
  IonButton,
  IonMenu,
  IonMenuButton,
} from '@ionic/react';
import { call, cart, search, bag, person } from 'ionicons/icons';
import './Tab1.css';
import './Tab2.css';
import './Tab3.css';
import './Tab4.css';

const Tab3: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader className="header">
          <IonToolbar>
            <IonCard>
              <img alt="Logo" id="logo" src="/assets/images/logo.png" />
            </IonCard>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader lines="full" className="list-header">
              <IonLabel>THE PROJECT</IonLabel>
            </IonListHeader>
            <br />
            <br />
            <IonItem>
              <IonIcon icon={cart} />
              <IonButton fill="clear" href="/Tab1">
                Cart
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={bag} />
              <IonButton fill="clear" href="/Tab2">
                Products
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={search} />
              <IonButton fill="clear" href="/Tab3">
                About Us
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={person} />
              <IonButton fill="clear" href="/Tab4">
                Developers
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={call} />
              <IonButton fill="clear" href="/Tab5">
                Contact Us
              </IonButton>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader className="header">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>THE PROJECT</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-main">lagyan nyo nalang din</IonContent>
      </IonPage>
    </>
  );
};

export default Tab3;
