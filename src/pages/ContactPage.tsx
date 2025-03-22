import React, { useState } from "react";
import contactImg from "../assets/images/contact.webp";
import "../styles/contactpage.css";

const ContactPage: React.FC = () => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setToastMessage(`Copied: ${text}`);
            setTimeout(() => setToastMessage(null), 2000);
        } catch (err) {
            console.error("Error copying text: ", err);
            setToastMessage("Failed to copy text");
            setTimeout(() => setToastMessage(null), 2000);
        }
    };

    // Wrapper function to handle the async operation
    const handleCopy = (text: string) => {
        void copyToClipboard(text);
    };

    return (
        <>
            {toastMessage && 
                <div className="copy-message">{toastMessage}</div>
            }
            <section className="contact-page__header">
                <h1 className="contact-page__headline">Contact Us</h1>
                <p className="contact-page__subtext">
                    Connect with our experts to create lasting solutions.
                </p>
            </section>
            <section className="contact-page__main-section">
                <div className="contact-page__main-image-container">
                    <img
                        src={contactImg}
                        alt="Contact Image"
                        className="contact-page__main-image"
                    />
                </div>
                <div className="contact-page__info-container">
                    <div className="contact-page__info-item">
                        <i 
                            className="bi bi-pin-map"
                            onClick={() => handleCopy("255 Silver Branch Drive, Delaware, Ohio 43015")}
                            style={{ cursor: "pointer" }}
                        />
                        <div className="contact-page__info-text">
                            <p>255 Silver Branch Drive</p>
                            <p>Delaware, Ohio 43015</p>
                        </div>
                    </div>
                    <div className="contact-page__info-item">
                        <i 
                            className="bi bi-telephone"
                            onClick={() => handleCopy("(614) 359-6321")}
                            style={{ cursor: "pointer" }}
                        />
                        <p>(614) 359-6321</p>
                    </div>
                    <div className="contact-page__info-item">
                        <i 
                            className="bi bi-envelope"
                            onClick={() => handleCopy("dustin.doherty@decisivedynamics.com")}
                            style={{ cursor: "pointer" }}
                        />
                        <p>dustin.doherty@decisivedynamics.com</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;