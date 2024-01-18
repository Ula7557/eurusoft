import { useSelector } from "react-redux";
import Services from "../../services";
import "./main.scss";

const AboutPage2 = ({ extra_desc, image}) => {
  const aboutData = useSelector((state) => state.data.video);

  return (
    <div className="about-page2 container">
      <Services
        classess={"row"}
        images={aboutData && aboutData.image}
        inf={aboutData && aboutData.extra_desc}
      />
    </div>
  );
};

export default AboutPage2;
