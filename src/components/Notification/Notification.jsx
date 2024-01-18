import React from "react";
import { useDispatch } from "react-redux";
import { set_notification } from "../../redux/action/action";
import checked from "./check.png";
import close from "./close.png";
import { useRef, useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
const Notification = ({ error, show }) => {
  const lang = useSelector((state) => state.data.lang);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(set_notification({ error: true, show: false }));
  };
  const ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove("active");
        closeHandler()
    }, 3000);

  }, [show]);
  return (
    <>
      {error ? (
        <>
          <div className={`${show ? "active" : ""} modal`} ref={ref}>
            <div className="modal-left false">
              <img src={close} alt="" className="modal-icon" />
            </div>
            <div className="modal-right">
              <h6 className="modal-text">Error!</h6>
              <p className="modal-mini-text">
                {lang === "en"
                  ? "Your message has not been sent"
                  : lang === "ru"
                  ? " Запрос отклонено"
                  : lang === "uz"
                  ? "So'rovingiz rad etildi"
                  : ""}
              </p>
              <button onClick={closeHandler} className="modal-close false">
                X
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`${show ? "active" : ""} modal`} ref={ref}>
            <div className="modal-left">
              <img src={checked} alt="" className="modal-icon" />
            </div>
            <div className="modal-right">
              <h6 className="modal-text">Succes! {show}</h6>
              <p className="modal-mini-text">
                {lang === "en"
                    ? "Your message has been sent successfully"
                  : lang === "ru"
                  ? "Запрос выполнено"
                  : lang === "uz"
                  ? "So'rovingiz qabul qilindi"
                  : ""}
              </p>
              <button onClick={closeHandler} className="modal-close">
                x
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Notification;
