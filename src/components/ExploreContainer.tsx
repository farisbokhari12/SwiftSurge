import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { useEffect, useState } from 'react';
import { Coordinates, Geolocation } from "@awesome-cordova-plugins/geolocation";

interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
const [coords, setCoords] = useState<Coordinates>();
  const geoloactionWrapper  = async () => {
    const geoloaction =  await Geolocation.getCurrentPosition();
    setCoords(geoloaction.coords);
  }

  return (
    <div id="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonButton onClick={geoloactionWrapper}>gila</IonButton>
      <IonButton onClick={geoloactionWrapper}>{ coords?.latitude }</IonButton>
    </div>
  );
};

export default ExploreContainer;
