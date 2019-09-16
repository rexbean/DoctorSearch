import { GOOGLE_API_KEY } from "../const";
import Geocode from "react-geocode";

export async function addressToCoord(address) {
  // set google api key
  Geocode.setApiKey(GOOGLE_API_KEY);
  // get the coordinates
  //try {
  const response = await Geocode.fromAddress(address);
  console.log(response);
  const { lat, lng } = response.results[0].geometry.location;
  console.log(lat, lng);
  return `${lat},${lng}`;
  // } catch (e) {
  //   throw new Error("error transfer", e);
  // }
}
