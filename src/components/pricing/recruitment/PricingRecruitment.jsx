import React from "react";
import "./PricingRecruitment.css";
import { useNavigate } from "react-router-dom";

const PricingRecruitment = () => {
  const navigate = useNavigate();

  const handleUploadCVClick = () => {
    navigate("/applyTalent");
  };

  const navigateToDetails = (id) => {
    navigate(`/resources_Re/${id}`);
  };

  const handleMoreResourcesClick = () => {
    navigate("/resources");
  };

  return (
    <section>
      {/* Recruitment  Pricing Section */}

      <div className="pricing-recruitment-container">
        <div className="pricing-recruitment-content">
          <h3 className="pricing-recruitment">PRICING</h3>
          <h2 className="pricing-recruitment-title">
            Transparent Recruitment Services Pricing
          </h2>
          <p className="pricing-recruitment-description">
            Our pricing structure is designed to provide value, charging between
            15-20% of the annual compensation, which includes bonuses and
            incentives (excluding ESOP). This ensures you only pay for the
            quality talent we deliver.
          </p>
          <div className="button">
            <button className="pricing-recruitment-get-started-button">
              Get Started
            </button>
            <button
              className="pricing-recruitment-upload-cv-button"
              onClick={handleUploadCVClick}
            >
              Upload CV
            </button>
          </div>
        </div>
        <div className="pricing-recruitment-details">
          <h3>Comprehensive Recruitment Services Included in Our Package:</h3>
          <ul>
            <li>Candidate Screening</li>
            <li>CV Refinement</li>
            <li>Background Verification</li>
            <li>Ongoing Recruiter Support</li>
          </ul>
          <p className="pricing-recruitment-annual-compensation-note">
            1) The annual compensation package encompasses the 13-month THR
            (Religious Festive Allowance), ensuring a comprehensive financial
            benefit for employees.
          </p>
          <p className="pricing-recruitment-annual-compensation-note">
            2) Our goal is to simplify your recruitment process, offering
            clarity and confidence in our pricing structure while delivering
            exceptional talent solutions tailored to your needs.
          </p>
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
    </section>
  );
};

export default PricingRecruitment;
