import ShadovText from "../../components/shadov-text";
import "./vacancy_page1.scss";
import ReactHtmlParser from "react-html-parser";
const vacancy_page1 = ({
  title,
  description,
  miniTitle,
  miniDescription,
  img,
  text,
  shadov,
  extraTitle,
  classes,
  blueText,
  whiteText,
  blueText1,
  whiteText1,
  whiteText2,
  clasis
}) => {
  return (
    <div className={`vacancy_page1_block ${classes} container`}>
      <div className="vacancy_page1_block_left">
        <div data-aos="fade-up">
          <h2 className="vacancy_page1_block_left_title">{ReactHtmlParser(title)}</h2>
        </div>
        <div data-aos="fade-up">
          <div className="vacancy_page1_block_left_description">{ReactHtmlParser(description)}</div>
        </div>
        <div data-aos="fade-up">
          <h4 className="vacancy_page1_block_left_miniTitle">{ReactHtmlParser(miniTitle)}</h4>
        </div>
        <div data-aos="fade-up">
          <h4 className="vacancy_page1_block_left_extraTitle">{ReactHtmlParser(extraTitle)}</h4>
        </div>
        <div data-aos="fade-up">
          <div className="vacancy_page1_block_left_miniDescription">{ReactHtmlParser(miniDescription)}</div>
        </div>
        <div data-aos="fade-up">
          <p className="vacancy_p_text">{ReactHtmlParser(whiteText)}</p>
        </div>
        <div data-aos="fade-up">
          <p className="vacancy_p_text1">
            {whiteText1}
            <span className="vacancy_span_text1"> {blueText1}</span>
            {whiteText2}
          </p>
        </div>
      </div>
      <div className="vacancy_page1_block_right">
        <div data-aos="fade-up">
          <img src={img} alt="" className="vacancy_page1_block_right_img" />
        </div>
        <div data-aos="fade-up">
          <div className={`shadov_text_none ${clasis}`}>
            <ShadovText
              text={'work with us?'}
              shadov={'Why'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default vacancy_page1;
