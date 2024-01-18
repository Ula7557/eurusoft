
import Services from "../../services";
import "./main.scss";

const aboutPage2team = ({ extra_desc, image, text}) => {

  return (
    <div className="about-page2 container">
      <Services
        classess={"row"}
        images={image}
        info1={extra_desc}
        info2={text}
      />
    </div>
  );
};

export default aboutPage2team;
