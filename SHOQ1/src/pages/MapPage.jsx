import { Icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Header from '../components/Header.jsx'
import { activities } from '../data/mockData.js'

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function MapPage() {
  return (
    <>
      <Header eyebrow="OpenStreetMap" title="Kosovo activity map">
        Interactive Leaflet map with mock places, events, and plans.
      </Header>
      <section className="h-[560px] overflow-hidden rounded-md border border-ink/10 bg-white">
        <MapContainer center={[42.6629, 21.1655]} zoom={8}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {activities.map((activity) => (
            <Marker key={activity.id} position={activity.coordinates} icon={markerIcon}>
              <Popup>
                <strong>{activity.title}</strong>
                <br />
                {activity.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </>
  )
}
