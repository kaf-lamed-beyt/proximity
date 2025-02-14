import useSWR from "swr";
import { reverseGeoCoordinates } from "../utils/geo";

export const useAddress = ({ lat, lng }: { lat: number; lng: number }) => {
  const cacheKey = ["current-addr", `${lat}${lng}`];

  const { data, error, isLoading } = useSWR(
    cacheKey,
    () =>
      reverseGeoCoordinates({
        lat,
        lng,
      }),
    { revalidateIfStale: true, revalidateOnFocus: false },
  );

  return {
    data,
    error,
    loading: isLoading,
  };
};
