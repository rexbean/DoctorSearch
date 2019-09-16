import { ASYNC_START, GET_DOCTORS_SUCCESS, ASYNC_ERROR } from "../actions/type";
import { INITIALIZED, SUCCESS, FAILED, LOADING } from "../const";
import { count } from "../const";
let initialState = {
  status: INITIALIZED,
  total: 0,
  totalPage: 0,
  data: []
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START:
      return Object.assign({}, state, { status: LOADING });
    case GET_DOCTORS_SUCCESS:
      console.log("reducer");
      const total = action.data.meta.total;
      const totalPage = Math.ceil(total / count);
      const data = action.data.data;
      return { status: SUCCESS, total, totalPage, data };
    case ASYNC_ERROR:
      return { status: FAILED, error: action.data };
    default:
      return state;
  }
};

export default doctorReducer;
