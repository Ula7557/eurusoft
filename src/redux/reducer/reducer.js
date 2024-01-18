const initialState = {
  lang:
    window.localStorage.getItem("lang") !== null
      ? window.localStorage.getItem("lang")
      : "en",
  notification: {
    message: '',
    show: false,
    error: true,
  },
  headerModal:false
};

export const reducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: payLoad,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        video: payLoad,
      };
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: payLoad,
      };
    case "CONSTTANTS.SET_MOBILE_MODAL":
      return {
        ...state,
        headerModal: payLoad
      };
    default:
      return state;
  }
};