import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import { usePosition } from "use-position";
import Markers from "./VenueMarkers";
import "leaflet/dist/leaflet.css";

const styles = {
  wrapper: {
    height: "400px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    position: "absolute",
  },
  map: {
    flex: 1,
  },
};

const MapView = () => {
  const [state, setState] = useState({
    currentLocation: { lat: -0.18271729056166636, lng: -78.48395615544348 },
    zoom: 13,
    data,
  });
  const [venues, setVenues] = useState({});

  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, { enableHighAccuracy: true });

  useEffect(() => {
    if (latitude && longitude) {
      const currentLocation = {
        lat: latitude,
        lng: longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      console.log("Ubicaciones", state);
    }
  }, [latitude, longitude]);

  return (
    <div style={styles.wrapper}>
      <Map style={styles.map} center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers venues={state.data.venues} />
      </Map>
    </div>
  );
};

export default MapView;
