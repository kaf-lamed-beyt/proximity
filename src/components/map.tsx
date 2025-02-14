import { LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { DraggablePin, UserMapPin } from "./pin";
import { User, USERS } from "../data";
import { findNearbyPeople } from "../utils/geo";
import { useAddress } from "../hooks/useAddress";

export const CustomMap = () => {
  const [mapCenter, setMapCenter] = React.useState<[number, number]>([
    51.505, -0.09,
  ]);
  const [currentLocation, setCurrentLocation] =
    React.useState<LatLngLiteral | null>(null);

  const [nearbyPeople, setNearbyPeople] = React.useState<User[]>([]);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setCurrentLocation({ lat: latitude, lng: longitude });
          setMapCenter([latitude, longitude]);
        },
        (error) => {
          console.log("Error obtaining user's location", error);
        },
      );
    }
  }, []);

  const handlePinMovement = (position: LatLngLiteral) => {
    setCurrentLocation({ lat: position.lat, lng: position.lng });
    setMapCenter([position.lat, position.lng]);
  };

  React.useEffect(() => {
    const nearbyFolks = findNearbyPeople({
      people: USERS,
      radius: 1500,
      currentLocation: currentLocation as LatLngLiteral,
    });

    setNearbyPeople(nearbyFolks);
  }, [currentLocation]);

  const { data: address, loading } = useAddress({
    lat: Number(currentLocation?.lat),
    lng: Number(currentLocation?.lng),
  });

  return (
    <MapContainer
      center={mapCenter}
      zoom={14}
      scrollWheelZoom={false}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocation && (
        <DraggablePin
          onPositionChange={handlePinMovement}
          position={currentLocation}
          address={loading ? "loading addresss..." : address}
        />
      )}

      {nearbyPeople &&
        nearbyPeople.map((people: User) => {
          return (
            <UserMapPin
              key={people.id}
              email={people.email}
              name={people.name}
              position={{
                lat: people.location.coordinates[0],
                lng: people.location.coordinates[1],
              }}
              // distance={people.distance}
            />
          );
        })}
    </MapContainer>
  );
};
