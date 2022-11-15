import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import Header from './header';
import _ from 'lodash';
import L from "leaflet";

const Maps = (props) => {
  let houseInfo = props.displayedData;
  let data = houseInfo;
  let DistrictGroups = Object.keys(_.groupBy(data, 'district'));
  let DistrictGroupsDis = DistrictGroups.map((item) => {
    return <option key={item} value={item}>{item}</option>
  })

  const [district, setdistrict] = useState('');
  const [views, setViews] = useState([47.62, -122.29]);
  const [zoom, setZoom] = useState(12);
  const [map, setMap] = useState(null);

  const handleDis = (event) => {
    let value = event.target.value;
    setdistrict(value);
  }
  const onClick = (event) => {
    if (district == "") {
      setViews([47.62, -122.29])
      setZoom(12)
    } else {
      let LatLongSel = data.filter((item) => {
        if (item.district == district) {
          return item
        }
      })
      setViews(LatLongSel[0].DisLatLong[district])
      setZoom(14)
    }

  }

  let LatLongSel = data.filter((item) => {
    if (item.district == district) {
      return item
    }
  })

  const Locat = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(views, zoom)
      },
    })

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }


  let markers = houseInfo.map((item) => {
    var text = <div key={item.id}>
      <img className="mapPic" src={item.img} alt="housing image" />
      <Link to='/secondPage' state={item}>{item.address}<br /> {item.price}</Link>
    </div>
    return <div key={item.id}><Marker position={[item.lat, item.long]}>
      <Popup>
        {text}
      </Popup>
    </Marker>
    </div>
  })

  return <div>
    <Header />
    <main>
      <div className="Mapfilter">
        <select name="ares" id="areas" value={district} onChange={handleDis}>
          <option value="">All District</option>
          {DistrictGroupsDis}
        </select>
        <button type="submit" className="btn" onClick={onClick}>Set</button>
        <h2 className="maph2" >Click on Map, After click the Button to set View</h2>
      </div>
      <section className="MapClass">
        <div id="map">
          <MapContainer center={views} zoom={zoom} scrollWheelZoom={false} whenCreated={setMap}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">MapTiler © OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CPfYEXO5BfII8Cy19h4T"
            />
            {markers}
            <Locat />
          </MapContainer>
        </div>
      </section>
    </main>
  </div>
};

export default Maps;