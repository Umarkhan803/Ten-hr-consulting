import React from "react";
import "./PeoEor.css";
import { peoPricing } from "../../../assets/data/peoPricing";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PricingPEO1 from "../../../assets/images/PricingPEO1.png";
import PricingPEO2 from "../../../assets/images/PricingPEO2.webp";
import PricingPEO3 from "../../../assets/images/PricingPEO3.jpg";

function PricingPeoEor() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const contactUsPage = () => {
    navigate("/contactUs");
  };

  const resourcesPage = () => {
    navigate("/resources");
  };

  const navigateToDetails = (id) => {
    navigate(`/resources_Re/${id}`);
  };

  const peoResources = [
    {
      id: 0,
      img: PricingPEO1,
      title:
        "Using PEO/EOR Services to Manage Remote Teams in India: Crucial Tools and Strategies",
      text: "Overview The capacity to efficiently lead distant teams in the era of globalization and digital transformation.",
    },
    {
      id: 1,
      img: PricingPEO2,
      title:
        "A Comprehensive Examination of Important Provisions: An In-Depth Look at Indian Labor Laws",
      text: "The difficulties of finding work in India, which is becoming a thriving economic hub in Southeast Asia.",
    },
    {
      id: 2,
      img: PricingPEO3,
      title: "The Effect of Executive Placements on Indian Business Growth",
      text: "A thriving economy with enormous potential, India has emerged as a major location for corporate growth. As many.",
    },
  ];

  return (
    <div className="peo-container">
      {/* Main Pricing Section */}
      <div className="peo-pricing">
        <h2>{t("PRICING")}</h2>
        <h1>{t("PEO / EOR Price Sheet")}</h1>
        <div className="peo-pricing-cards">
          {peoPricing.map((data) => (
            <div key={data.id} className="peo-pricing-card">
              <h3>{t(data.name)}</h3>
              <div className="peo-pricing-card-price">
                <h5>{t("Starting from")}</h5>
                <h3>{data.price}</h3>
                <h5>{t("per employee per month")}</h5>
              </div>
              <hr />
              <h4>{t("Includes")}</h4>
              <ul>
                {data.include.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
              <button className="peo-pricing-btn" onClick={contactUsPage}>
                {t("Let’s Talk")}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="peo-resources">
        <h2>{t("Resources")}</h2>
        <h1>{t("Resources and Articles")}</h1>
        <div className="peo-resource-cards">
          {peoResources.map((resource) => (
            <div
              key={resource.id}
              className="peo-resource-card"
              onClick={() => navigateToDetails(resource.id)}
            >
              <img src={resource.img} alt={resource.title} />
              <div className="peo-resource-card-text">
                <h4>{t(resource.title)}</h4>
                <p>{t(resource.text)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="peoResource-btn" onClick={resourcesPage}>
          {t("Our Resources")}
        </button>
      </div>
    </div>
  );
}

export default PricingPeoEor;
