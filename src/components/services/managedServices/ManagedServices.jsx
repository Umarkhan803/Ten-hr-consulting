import React from "react";
import "./ManagedServices.css";
import { useNavigate } from "react-router-dom";
import mainImage from "../../../assets/images/managed-services-image.webp";

function ManagedServices() {
  const navigate = useNavigate(); // Hook to access the navigate function

  const contactUsPage = () => {
    navigate("/contactUs");
  };

  const handleMoreResourcesClick = () => {
    navigate("/resources"); // Navigate to the resources page
  };
    const navigateToDetails = (id) => {
    navigate(`/resources_manS/${id}`);
  };

  return (
    <div className="App">
      {/* Section 1 */}
      <section className="section-hero">
        <div className="text-container">
          <h4>MANAGED SERVICES</h4>
          <h1>End to End Recruiting</h1>
          <p>
            Through our managed services solution, we will recruit, hire, and
            manage all HR-related admin for your employees in india. All you
            need to do is manage the teams.
          </p>
          <button className="btn-primary" onClick={contactUsPage}>
            Schedule Now
          </button>
        </div>
        <div className="image-container">
          <img src={mainImage} alt="Service illustration" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-phases">
        <h2>We build teams to achieve your target outcomes</h2>
        <div className="phases-container">
          <div className="phase">
            <h3>Planning Phase</h3>
            <h4>Scoping</h4>
            <p>
              We spend time with you to understand your specific goals, how long
              you need to keep the team for, and your budget.
            </p>
          </div>
          <div className="phase">
            <h3>Execution Phase</h3>
            <h4>Team Formation</h4>
            <p>
              We recruit the team you need to fulfill your goals and manage all
              the admin.
            </p>
          </div>
          <div className="phase">
            <h3>Maintenance Phase</h3>
            <h4>Team Monitoring</h4>
            <p>
              We will monitor the team and help manage all HR-related matters.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="quote-section">
        <div className="quote-content">
          <h3>Pricing</h3>
          <h2>Reach out for a quote for Managed Services</h2>
          <button className="quote-btn" onClick={contactUsPage}>
            Schedule Now →
          </button>
        </div>
        <div className="quote-description">
          <p>
            We need to deeply understand what you are trying to accomplish
            before sharing pricing. Please reach out to us to schedule time to
            connect, so we can better understand your needs. Once we have been
            able to scope your project, we will issue pricing within 48 hours.
          </p>
        </div>
      </section>

      {/* Resources and Articles Section */}
      <div className="resources-articles-section">
        <h3 className="resources-heading">Resources</h3>
        <h2 className="resources-title">Explore Our Insights & Guides</h2>
        <div className="articles-container">
          <div className="article" onClick={() => navigateToDetails(0)}>
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/financial-benefits-1024x688.jpeg"
              alt="Talent Acquisition Guide"
              className="article-image"
            />
            <h3 className="article-title">
              Maximizing Talent Acquisition in india: A Comprehensive Guide
            </h3>
            <p className="article-description">
              Learn key strategies for acquiring top talent in india, from
              recruitment tips to navigating local hiring practices.
            </p>
          </div>
          <div className="article" onClick={() => navigateToDetails(1)}>
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/Peo-tech-company-1024x683.jpeg"
              alt="HR Compliance"
              className="article-image"
            />
            <h3 className="article-title">
              Ensuring HR Compliance in india: What You Need to Know
            </h3>
            <p className="article-description">
              Discover the essential steps businesses must take to remain
              compliant with india's labor laws and regulations.
            </p>
          </div>
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

export default ManagedServices;
