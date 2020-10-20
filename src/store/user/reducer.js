import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  id: null,
  name: null,
  email: null,
  compositions: [
    {
      id: 0,
      compositionName: "new Composition",
      kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      closedhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hitom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      lotom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cymbal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("action", action);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,

        token: action.payload.token,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        compositions: [...state.compositions, ...action.payload.compositions],
      };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.name,
        compositions: [...state.compositions, ...action.payload.compositions],
      };

    case "POST_COMPOSITION":
      return {
        ...state,
        compositions: [...state.compositions, action.payload],
      };

    default:
      return state;
  }
};
