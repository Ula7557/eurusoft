import "./main.scss";
import LinksCard from "../components/linksCard";
import Imgage from "../assets/images/img/about/messages.png";
import requestIcon from "../assets/request/request.png";
const Links = () => {
  return (
    <div style={{ minHeight: "60vh" }}>
      <div className="links_block container">
      
        <LinksCard
          title={"Ishdan ketish"}
          description={`EUROSOFT" kompaniyasi bilan ishlaganingiz uchun rahmat!`}
          img={requestIcon}
          link={" https://forms.gle/8X4ybFeut95GKB1L9"}
        />
        <LinksCard
          title={"Ehtiyojlarini aniqlash"}
          description={`Eurosoft hodimlari ehtiyojlarini aniqlash so'rovnamasi`}
          img={requestIcon}
          link={"https://forms.gle/bZPS4herExraUhDS6"}
        />
        <LinksCard
          title={"Time off request"}
          description={`Eurosoft - Holiday request form`}
          img={requestIcon}
          link={"https://forms.gle/M7DD74qwkxZvMBPv5"}
        />
      </div>
    </div>
  );
};

export default Links;
