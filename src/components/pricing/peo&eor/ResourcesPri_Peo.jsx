import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesPEO1 from "../../../assets/images/PricingPEO1.png";
import ServicesPEO2 from "../../../assets/images/PricingPEO2.webp";
import ServicesPEO3 from "../../../assets/images/PricingPEO3.jpg";
import "./ResourcesPri_Peo.css";

export default function Resources_Re() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    const peoResources = [
        {
            id: 0,
            img: ServicesPEO1,
            title: t(
                "Using PEO Services to Manage Remote Teams in India: Crucial Tools and Strategies"
            ),
            text: t(
                "Overview The capacity to efficiently lead distant teams in the era of globalization and digital transformation."
            ),
        },
        {
            id: 1,
            img: ServicesPEO2,
            title: t(
                "A Comprehensive Examination of Important Provisions: An In-Depth Look at Indian Labor Laws"
            ),
            text: t(
                "The difficulties of finding work in India, which is becoming a thriving economic hub in Southeast Asia."
            ),
        },
        {
            id: 2,
            img: ServicesPEO3,

            title: t(
                "The Effect of Executive Placements on Indian Business Growth"
            ),
            text: t(
                "A thriving economy with enormous potential, India has emerged as a major location for corporate growth. As many."
            ),
        },
    ];

    const resource = peoResources.find((item) => item.id === parseInt(id));

    if (!resource) {
        return <p>{t("Resource not found")}</p>;
    }

    return (
        <div className="resource-details">
            <div className="resource-details-card">
                <img src={resource.img} alt={resource.title} className="resource-img" />
                <h2>{resource.title}</h2>
                <p>{resource.text}</p>
                <div className="resource-extra-info">
                </div>
                <button onClick={() => navigate(-1)} className="back-button">
                    {t("Back to Resources")}
                </button>
            </div>
        </div>
    );
}
