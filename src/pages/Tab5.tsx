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
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
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

const Tab5: React.FC = () => {
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
        <IonContent className="ion-main">
          <IonCard>
            <IonCardHeader>
              <IonCard>
                <img alt="Logo" id="logo2" src="/assets/images/logo.png" />
              </IonCard>
              <br />
              <IonCardTitle>
                <b>THE PROJECT</b>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList id="developers">
                <IonItem>
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonLabel>
                    <b>Leader:</b> Mikhail Pitstock Mendoza
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonLabel>Jamaica Bermudez</IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonLabel>Mc Earl C. Estolatan</IonLabel>
                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonLabel>Anton Patrick E. Fontillas</IonLabel>
                </IonItem>

                <IonItem lines="none">
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonLabel>Luigi S. Urbano</IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab5;
