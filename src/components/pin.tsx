import * as L from "leaflet";
import { LatLngLiteral } from "leaflet";
import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useAddress } from "../hooks/useAddress";

interface DraggablePinProps {
  position: LatLngLiteral;
  address?: string;
  onPositionChange: (newPosition: LatLngLiteral) => void;
}

export const DraggablePin = ({
  address,
  position,
  onPositionChange,
}: DraggablePinProps) => {
  const [markerPosition, setMarkerPosition] =
    React.useState<LatLngLiteral>(position);

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const map = useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng);
      onPositionChange(e.latlng);
    },
  });

  React.useEffect(() => {
    setMarkerPosition(position);
    map.flyTo(position, map.getZoom());
  }, [map, position]);

  return (
    <Marker
      icon={redIcon}
      position={markerPosition}
      draggable={true}
      eventHandlers={{
        dragend(e) {
          const newPosition = e.target.getLatLng();
          setMarkerPosition(newPosition);
          onPositionChange(newPosition);
        },
      }}
    >
      <Popup>
        <strong>You are here!</strong>
        <p>{address}</p>
      </Popup>
    </Marker>
  );
};

interface UserMapPinProps extends Pick<DraggablePinProps, "position"> {
  name: string;
  email: string;
  distance?: number;
}

export const UserMapPin = ({
  position,
  // distance,
  name,
  email,
}: UserMapPinProps) => {
  const { data: address, loading } = useAddress({
    lat: Number(position.lat),
    lng: Number(position.lng),
  });

  return (
    <Marker position={position}>
      <Popup>
        <p>{email}</p>
        <p>{name}</p>
        <p>{loading ? "loading user address..." : address}</p>
        {/* <strong>{distance}kM</strong> */}
      </Popup>
    </Marker>
  );
};
