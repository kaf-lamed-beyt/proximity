import { getDistance } from "geolib";
import { LatLngLiteral } from "leaflet";
import { User } from "../data";

export type DistanceGetterParams = {
  point1: LatLngLiteral;
  point2: LatLngLiteral;
};

export const calculateDistance = (params: DistanceGetterParams): number => {
  const { point1, point2 } = params;
  if (!point1 || !point2) return 0;

  return getDistance(
    {
      lat: point1.lat,
      lng: point2.lng,
    },
    { lat: point2.lat, lng: point2.lng },
  );
};

export type NearbyPeopleGetterParams = {
  people: User[];
  radius: number;
  currentLocation: LatLngLiteral;
};

export const findNearbyPeople = (params: NearbyPeopleGetterParams): User[] => {
  const { people, radius, currentLocation } = params;

  return people
    .map((person) => {
      const distance = calculateDistance({
        point1: {
          lat: person.location.coordinates[0],
          lng: person.location.coordinates[1],
        },
        point2: currentLocation,
      });

      const data = person;
      return {
        ...data,
        distance,
      };
    })
    .filter((person) => {
      return person.distance <= radius;
    });
};

export type CoordinatesParams = {
  lat: number;
  lng: number;
};

export const reverseGeoCoordinates = async (params: CoordinatesParams) => {
  const { lat, lng } = params;
  if (!lat || !lng)
    return "Sorry! Latitude and Longitude parameters are required";

  const url = new URL("https://nominatim.openstreetmap.org/reverse");

  url.searchParams.append("format", String("json"));
  url.searchParams.append("lat", String(lat));
  url.searchParams.append("lon", String(lng));

  try {
    const request = await fetch(url.toString());
    const response = await request.json();

    return response?.display_name;
  } catch (error) {
    console.error(error);
  }
};
