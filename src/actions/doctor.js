import axios from "axios";
import { BACKEND_URL, API_KEY, radius, count } from "../const";
import { GET_DOCTORS_SUCCESS, ASYNC_START, ASYNC_ERROR } from "./type";

export function getDoctors(coord, page) {
  return async dispatch => {
    try {
      dispatch({ type: ASYNC_START });
      const skip = (page - 1) * count;
      const url = `${BACKEND_URL}${coord},${radius}&skip=${skip}&limit=${count}&user_key=${API_KEY}`;
      const data = await axios.get(url);
      dispatch({ type: GET_DOCTORS_SUCCESS, data: data.data });
    } catch (e) {
      dispatch({ type: ASYNC_ERROR, data: e });
      alert(e);
    }
  };
}
