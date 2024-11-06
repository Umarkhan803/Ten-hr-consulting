import React from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { ConsultingPrice } from "../../../assets/data/ConsultingPrice";
import "./HrConsulting.css";
import { useNavigate } from 'react-router-dom';


function PricingHrConsulting() {
  const { t } = useTranslation(); // Define the t function for translation

  const navigate = useNavigate(); // Hook to access the navigate function

  const handleMoreResourcesClick = () => {
    navigate("/resources"); // Navigate to the resources page
  };

  const navigateToDetails = (id) => {
    navigate(`/resources_Re/${id}`);
  };

  return (
    <div>
      {/* HR Consulting Price Sheet */}
      <div className="fourthPart">
        <div className="upperText">
          <h3>{t("PRICING")}</h3>
          <h1>{t("HR Consulting Price Sheet")}</h1>
        </div>

        <div className="priceSheet">
          {ConsultingPrice.map((data, index) => (
            <div key={index} className="priceCard">
              <h1>{t(data.heading)}</h1>
              <div className="innerDiv">
                <h1>{data.Amount}</h1>
                <h3>{t(data.Count)}</h3>
              </div>
              <hr />
              <h2>{t(data.Subheading)}</h2>
              <ul>
                {Array.isArray(data.List) ? (
                  data.List.map((item, idx) => <li key={idx}>{t(item)}</li>)
                ) : (
                  <li>{t("No items available")}</li>
                )}
              </ul>

              <button>{t("Get Started")}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="resources-articles-section">
        <h3 className="resources-heading">Resources</h3>
        <h2 className="resources-title">Explore Our Insights & Guides</h2>
        <div className="articles-container">
          {/* Article 1 */}
          <div className="article" onClick={() => navigateToDetails(0)}>
            <img
            src="https://recruitindo.com/wp-content/uploads/2024/01/financial-benefits-1024x688.jpeg"
            alt="Talent Acquisition Guide"
              className="article-image"
            />
            <h3 className="article-title">
              Maximizing Talent Acquisition in India: A Comprehensive Guide
            </h3>
            <p className="article-description">
              Learn key strategies for acquiring top talent in India, from
              recruitment tips to navigating local hiring practices.
            </p>
          </div>
          {/* Article 2 */}
          <div className="article" onClick={() => navigateToDetails(1)}>
            <img
            src="https://recruitindo.com/wp-content/uploads/2024/01/Peo-tech-company-1024x683.jpeg"
            alt="HR Compliance"
              className="article-image"
            />
            <h3 className="article-title">
              Ensuring HR Compliance in India: What You Need to Know
            </h3>
            <p className="article-description">
              Discover the essential steps businesses must take to remain
              compliant with India's labor laws and regulations.
            </p>
          </div>
          {/* Article 3 */}
          <div className="article" onClick={() => navigateToDetails(2)}>
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/peo-provider-1024x683.jpeg"
              alt="Hiring in Southeast Asia"
              className="article-image"
            />
            <h3 className="article-title">
              The Future of Hiring in Southeast Asia: Trends and Predictions
            </h3>
            <p className="article-description">
              Stay ahead of the curve with insights into the future trends
              shaping the hiring landscape across Southeast Asia.
            </p>
          </div>
        </div>

        <div className="more-resources-button-container">
          <button
            className="more-resources-button"
            onClick={handleMoreResourcesClick}
          >
            More Resources
          </button>
        </div>
      </div>
    </div>


  );
}

export default PricingHrConsulting;
