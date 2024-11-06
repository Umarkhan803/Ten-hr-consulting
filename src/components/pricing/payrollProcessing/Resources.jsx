import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ServicesPEO1 from "../../../assets/images/ServicesPEO1.jpg";
import ServicesPEO2 from "../../../assets/images/ServicesPEO2.jpg";
import ServicesPEO3 from "../../../assets/images/ServicesPEO3.jpg";
import "./Resources.css";

export default function ResourcesAndArticles() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const resourcesPage = () => {
    navigate("/resources");
  };

  const navigateToDetails = (id) => {
    navigate(`/resourcesdetails/${id}`);
  };

  const peoResources = [
    {
      id: 0,
      img: ServicesPEO1,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "The Complete Handbook of Executive Search in India: Examining the Economic and Cultural Effects of Poor Hiring"
      ),
      text: t(
        "Overview Finding and keeping top executive talent is essential for the competitive corporate environment of today."
      ),
    },
    {
      id: 1,
      img: ServicesPEO2,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Using PEO/ s to Manage Remote Teams in India: Crucial Tools and Strategies"
      ),
      text: t(
        "Overview In the era of digital change and globalization, the capacity to efficiently lead remote teams."
      ),
    },
    {
      id: 2,
      img: ServicesPEO3,
      article: t("Articles"),
      resources: t("Resources"),
      title: t(
        "Strategic Executive Search Services for Leading Companies in India"
      ),
      text: t(
        "Finding the proper people to run your company in the highly competitive business world of today is more."
      ),
    },
  ];

  return (
    <>
      {/* Resources and Articles Section */}
      <div className="pay-resources">
        <h2>{t("Resources")}</h2>
        <h1>{t("Resources and Articles")}</h1>
        <div className="pay-resource-cards">
          {peoResources.map((ele) => (
            <div
              key={ele.id}
              className="pay-resource-card"
              onClick={() => navigateToDetails(ele.id)}
              style={{ cursor: "pointer" }}>
              <img src={ele.img} alt={ele.title} />

              <div className="pay-resource-card-text">
                <h4>{ele.title}</h4>
                <p>{ele.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="payResource-btn" onClick={resourcesPage}>
          {t("Our Resources")}
        </button>
      </div>
    </>
  );
}
