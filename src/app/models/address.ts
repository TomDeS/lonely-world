export interface Address {
  results?: (ResultsEntity)[] | null;
  status: string;
}
export interface ResultsEntity {
  address_components?: (AddressComponentsEntity)[] | null;
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types?: (string)[] | null;
}
export interface AddressComponentsEntity {
  long_name: string;
  short_name: string;
  types?: (string)[] | null;
}
export interface Geometry {
  location: NortheastOrSouthwestOrLocation;
  location_type: string;
  viewport: Viewport;
}
export interface NortheastOrSouthwestOrLocation {
  lat: number;
  lng: number;
}
export interface Viewport {
  northeast: NortheastOrSouthwestOrLocation;
  southwest: NortheastOrSouthwestOrLocation;
}
