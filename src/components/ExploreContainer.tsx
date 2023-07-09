import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { useEffect, useState } from 'react';
import { Geolocation } from "@awesome-cordova-plugins/geolocation";

interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const geoloactionWrapper  = async () => {
    const geoloaction =  await Geolocation.getCurrentPosition();
    console.log(geoloaction.coords);
  }

  return (
    <div id="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonButton onClick={geoloactionWrapper}>gila</IonButton>
    </div>
  );
};

export default ExploreContainer;
