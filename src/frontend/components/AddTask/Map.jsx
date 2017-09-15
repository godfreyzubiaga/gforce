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
    onClick={() => store.taskStore.onModalClick(task)}
  >
  </Marker >
)));

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: '400px' }} />,
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
  <Marker
    position={{ lat: 10.7202, lng: 122.5621 }}
    onClick={() => store.taskStore.onModalClick(task)}
   />
  </GoogleMap>
));



export default MapWithControlledZoom;
