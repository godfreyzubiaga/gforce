import React from 'react';
import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import uuidv1 from 'uuid/v1';
import RootStore from '../../stores/RootStore';
import { observer, inject } from 'mobx-react';
import client from '../../client';

const store = new RootStore(client);

const UserMarker = inject('store')(observer(({ lat, lng, name, props, store }) => (
  <Marker
    position={{ lat: lat, lng: lng }}
    onClick={props.onToggleOpen}
  >
    <InfoWindow onCloseClick={props.onToggleOpen}>
      <div onClick={async () => await store.taskStore.bid('1234567', 5, 500)}>
        {name}
      </div>
    </InfoWindow>
  </Marker>
)))

const markers = [
  { lat: 10.7139343, lng: 122.5516674, name: 'Brent Anthony Tudas' },
  { lat: 10.7139453, lng: 122.5516734, name: 'Glyda Mae Torres' },
  { lat: 10.7139593, lng: 122.5516834, name: 'Li Arolf Rey' },
];

const MapContainer = inject('store')(observer((store, props) => (
    <GoogleMap
    defaultCenter={{ lat: 10.7202, lng: 122.5621 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    {markers.map(marker => <UserMarker props={props} lat={marker.lat} lng={marker.lng} name={marker.name} key={uuidv1()} />)}
  </GoogleMap>
  )));

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: '850px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 20),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
  )(observer(props =>
  <GoogleMap
    defaultCenter={{ lat: 10.7202, lng: 122.5621 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    {store.taskStore.tasks.map(marker => <UserMarker props={props} lat={marker.lat} lng={marker.lng} name={marker.name} key={uuidv1()} />)}
  </GoogleMap>
  ));

  

export default MapWithControlledZoom;
