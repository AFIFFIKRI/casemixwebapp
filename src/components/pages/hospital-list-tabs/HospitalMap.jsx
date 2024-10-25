import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import "../hospital-list-tabs/HospitalMap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import locationIcon from "../../../assets/icon/hospital-2.png";

const HospitalMap = () => {
  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: locationIcon,
    iconSize: [38, 38], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  // markers
  // const markers_kl = [
  //   {
  //     geocode: [3.171771761433759, 101.70255280507773],
  //     popUp: "Hospital Kuala Lumpur",
  //   },
  //   {
  //     geocode: [3.098219433675454, 101.72412230992747],
  //     popUp: "Hospital Universiti Kebangsaan Malaysia (HUKM)",
  //   },
  //   {
  //     geocode: [3.1137742777039326, 101.65290953018962],
  //     popUp: "Pusat Perubatan Universiti Malaya",
  //   },
  // ];

  const markersGrouped = {
    kl: [
      {
        geocode: [3.171771761433759, 101.70255280507773],
        popUp: "Hospital Kuala Lumpur",
      },
      {
        geocode: [3.098219433675454, 101.72412230992747],
        popUp: "Hospital Universiti Kebangsaan Malaysia (HUKM)",
      },
      {
        geocode: [3.1137742777039326, 101.65290953018962],
        popUp: "Pusat Perubatan Universiti Malaya",
      },
    ],

    selangor: [
      {
        geocode: [2.9765197138276824, 101.71997682278189],
        popUp: "Hospital Sultan Idris Shah, Serdang",
      },
      {
        geocode: [3.071612992225812, 101.4907453386863],
        popUp: "Hospital Shah Alam",
      },
      {
        geocode: [3.0204752592054214, 101.44144160985026],
        popUp: "Hospital Tengku Ampuan Rahimah, Klang",
      },
    ],

    putrajaya: [
      {
        state: "Putrajaya",
        geocode: [2.9292779082400466, 101.67421705410665],
        popUp: "Hospital Putrajaya",
      },
    ],

    n9: [
      {
        state: "Negeri Sembilan",
        geocode: [2.7099666270161045, 101.94481944740008],
        popUp: "Hospital Tuanku Ja'afar, Seremban",
      },
      {
        state: "Negeri Sembilan",
        geocode: [2.600601870914254, 102.07281522527127],
        popUp: "Hospital Rembau",
      },
      {
        state: "Negeri Sembilan",
        geocode: [2.484990366007772, 102.23366523390487],
        popUp: "Hospital Tampin",
      },
      {
        state: "Negeri Sembilan",
        geocode: [2.47822199444776, 101.85617826419409],
        popUp: "Hospital Port Dickson",
      },
    ],

    johor: [
      {
        state: "Johor",
        geocode: [2.0609806679452034, 102.57777435962],
        popUp: "Hospital Pakar Sultanah Fatimah, Muar",
      },
      {
        state: "Johor",
        geocode: [1.8378903074371764, 102.94098278292122],
        popUp: "Hospital Sultanah Nora Ismail, Batu Pahat",
      },
      {
        state: "Johor",
        geocode: [1.4586309097713452, 103.74601031950897],
        popUp: "Hospital Sultanah Aminah, Johor Bahru",
      },
    ],
  };

  return (
    <Card>
      <Card.Body>
        <MapContainer
          center={[3.448966746641595, 102.41631290851221]}
          zoom={8}
          scrollWheelZoom={true}
          style={{ height: "750px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the KL markers */}
            {markersGrouped.kl.map((marker, index) => (
              <Marker
                key={`kl-${index}`}
                position={marker.geocode}
                icon={customIcon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}

            {/* Mapping through the Selangor markers */}
            {markersGrouped.selangor.map((marker, index) => (
              <Marker
                key={`selangor-${index}`}
                position={marker.geocode}
                icon={customIcon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
        

            {/* Mapping through the Putrajaya markers */}
            {markersGrouped.putrajaya.map((marker, index) => (
              <Marker
                key={`putrajaya-${index}`}
                position={marker.geocode}
                icon={customIcon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
        
            {/* Mapping through the Negeri Sembilan markers */}
            {markersGrouped.n9.map((marker, index) => (
              <Marker
                key={`negeri sembilan-${index}`}
                position={marker.geocode}
                icon={customIcon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}

            {/* Mapping through the Johor markers */}
            {markersGrouped.johor.map((marker, index) => (
              <Marker
                key={`johor-${index}`}
                position={marker.geocode}
                icon={customIcon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>

          {/* <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
           
            {markers_kl.map((markers_kl, index) => (
              <Marker
                key={index}
                position={markers_kl.geocode}
                icon={customIcon}
              >
                <Popup>{markers_kl.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup> */}

          {/* <Marker position={[3.171771761433759, 101.70255280507773]} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </Card.Body>
    </Card>
  );
};

export default HospitalMap;
