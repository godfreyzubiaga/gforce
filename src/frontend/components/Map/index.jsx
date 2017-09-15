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

const UserMarker = inject('store')(observer(({ lat, lng, name, props, store, task }) => (
  <Marker
    position={{ lat: lat, lng: lng }}
<<<<<<< HEAD
    onClick={() => store.onMarkerClick(task)}
=======
    onClick={() => store.taskStore.onModalClick(task)}
>>>>>>> test
  >
    <InfoWindow onCloseClick={props.onToggleOpen}>
      {/* <div onClick={async () => await store.taskStore.bid('1234567', 5, 500)}> */}
      <div onClick={() => {
        console.log(store.locationStore.coordinates, ' da coordinatesssss')
      }}>
        {name}
      </div>
    </InfoWindow>
  </Marker >
)))

const MapContainer = inject('store')(observer((store, props) => (
  <GoogleMap
    defaultCenter={{ lat: 10.7202, lng: 122.5621 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
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
<<<<<<< HEAD
    {store.taskStore.tasks.map(task => <UserMarker task={task} props={props} lat={marker.lat} lng={marker.lng} name={marker.name} key={uuidv1()} />)}
=======
    {store.taskStore.tasks.map(marker => <UserMarker props={props} task={marker} lat={marker.lat} lng={marker.lng} name={marker.name} key={uuidv1()} />)}
>>>>>>> test
  </GoogleMap>
));



export default MapWithControlledZoom;
