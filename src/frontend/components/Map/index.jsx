import React from 'react';
import { compose, withProps, withState, withHandlers } from "recompose";
// import {observer, inject} from 'mobx-react';
// import FaAnchor from "react-icons/lib/fa/ancho";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const UserMarker = ({lat, lng, name, props}) => (
    <Marker
      position={{ lat: lat, lng: lng }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div onClick={() => console.log(`${name} Profile`)}>
          {/* <FaAnchor /> */}
          { name }
          {/* Controlled zoom: {props.zoom} */}
        </div>
      </InfoWindow>
    </Marker>
);

const markers = [
    { lat: 10.7139343, lng: 122.5516674, name : 'Brent Anthony Tudas'},
    { lat: 10.7139453, lng: 122.5516734, name : 'Glyda Mae Torres'},
    { lat: 10.7139593, lng: 122.5516834, name : 'Li Arolf Rey'},
];



const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
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
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 10.7139343, lng: 122.5516674 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >  
    {markers.map((marker, index) => <UserMarker props={props} lat={marker.lat} lng={marker.lng} name={marker.name} />)}
  </GoogleMap>
);

export default MapWithControlledZoom;