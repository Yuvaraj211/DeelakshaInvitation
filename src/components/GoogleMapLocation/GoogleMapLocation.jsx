import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import styles from './styles.module.css'

const GoogleMapLocation = () => {
  return (
    <>
      <MapContainer
        className={styles.mapLocation}
        center={[12.801410030773248, 75.90275146596458]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.801410030773248, 75.90275146596458]}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Kirikodli Mata
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  )
}

export default GoogleMapLocation
