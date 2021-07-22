import L from "leaflet";
import NewIcon from "../assets/new-icon.svg"

export const VenueLocationIcon = L.icon({
  iconUrl: NewIcon,
  iconRetinaUrl: NewIcon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "new-icon",
});
