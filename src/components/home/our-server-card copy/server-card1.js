import "./main.scss";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';


const ServerCard1 = ({ icon, name, info, classes, extraTitle, liText, listItem, clasCard, cardLink }) => {
  return (
    <div data-aos="zoom-in">
      <Link to={`/services`}  className={`server-card ${clasCard}`}>
        <div className="card-img-block">
          <span className="img-shadov">
            <svg
              className="img-shadov-icon"
              width="174"
              height="188"
              viewBox="0 0 174 188"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path d="M79 14.6188C83.9504 11.7607 90.0496 11.7607 95 14.6188L141.354 41.3812C146.304 44.2393 149.354 49.5214 149.354 55.2376V108.762C149.354 114.479 146.304 119.761 141.354 122.619L95 149.381C90.0496 152.239 83.9504 152.239 79 149.381L32.6462 122.619C27.6958 119.761 24.6462 114.479 24.6462 108.762V55.2376C24.6462 49.5214 27.6958 44.2393 32.6462 41.3812L79 14.6188Z" />
                <path
                  d="M79.5 15.4848C84.141 12.8053 89.859 12.8053 94.5 15.4848L140.854 42.2472C145.495 44.9267 148.354 49.8786 148.354 55.2376V108.762C148.354 114.121 145.495 119.073 140.854 121.753L94.5 148.515C89.859 151.195 84.141 151.195 79.5 148.515L33.1462 121.753C28.5052 119.073 25.6462 114.121 25.6462 108.762V55.2376C25.6462 49.8786 28.5052 44.9267 33.1462 42.2472L79.5 15.4848Z"
                  stroke="white"
                  strokeOpacity="0.0782099"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.646484"
                  y="0.475098"
                  width="172.707"
                  height="187.05"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="12" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.0037911 0 0 0 0 0.170599 0 0 0 0.157184 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(15 82) rotate(90) scale(72)"
                >
                  <stop stopColor="#3D3FA3" />
                  <stop offset="1" stopColor="#2B2D66" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <span className="img-border">
            <svg
              className="img-border-icon"
              width="101"
              height="113"
              viewBox="0 0 101 113"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="bor-icon"
                d="M45 3.33013C48.4034 1.36517 52.5966 1.36517 56 3.33013L93.7965 25.1519C97.1999 27.1169 99.2965 30.7483 99.2965 34.6782V78.3218C99.2965 82.2517 97.1999 85.8831 93.7965 87.8481L56 109.67C52.5966 111.635 48.4034 111.635 45 109.67L7.20354 87.8481C3.80013 85.8831 1.70354 82.2517 1.70354 78.3218V34.6782C1.70354 30.7483 3.80013 27.1169 7.20354 25.1519L45 3.33013Z"
                stroke="#00A5EF"
                strokeWidth="2"
              />
            </svg>
          </span>
          <img src={icon} alt="images" className={`img-icon ${classes}`}/>
        </div>
        <h6 className="card-name">{name}</h6>
        <div className="card-info">{ReactHtmlParser(info)}</div>
        <p className="card_extra_title">{extraTitle}</p>
      </Link>
    </div>
  );
};

export default ServerCard1;
