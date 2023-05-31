import { useMemo, useRef, useState } from 'react';
import { Marker } from 'react-leaflet';
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
