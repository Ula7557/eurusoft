export const set_Language =(lang) => {
    return {
        type:'SET_LANGUAGE',
        payLoad:lang
    }
}
export const set_videos = (videos) => {
  return {
    type: "SET_VIDEOS",
    payLoad: videos,
  };
};
export const set_notification = (data) => {
  return {
    type: "SET_NOTIFICATION",
    payLoad: data,
  };
};


export const Header_mobile_modal = (headerModal) => {
  return {
    type: 'CONSTTANTS.SET_MOBILE_MODAL',
    payLoad: headerModal
  }
}