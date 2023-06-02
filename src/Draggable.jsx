import { useMemo, useRef, useState } from 'react';
import { Marker } from 'react-leaflet';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
const DraggableMarker = ({ setLat, setLng, draggable }) => {
  const [center] = useState({ lat: 41.309805, lng: 69.248903 });
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setLat(marker.getLatLng().lat.toFixed(9));
          setLng(marker.getLatLng().lng.toFixed(9));
        }
      },
    }),
    []
  );
  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={center}
      ref={markerRef}
    />
  );
};
export default DraggableMarker;
