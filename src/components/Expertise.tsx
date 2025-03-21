import { Link } from "react-router-dom";
import { Expertise } from "../data/expertiseList";
import "../styles/expertiseComponent.css";

interface ExpertiseComponentProps {
    expertise: Expertise;
}

const ExpertiseComponent: React.FC<ExpertiseComponentProps> = ({ expertise }) => {
    return (
        <>
            {/* Hero Image */}
            <section className='expertise-component__hero-section'>
                <img 
                    src={expertise.image}
                    alt={expertise.title}
                    className='expertise-component__hero-image'
                />
            </section>
            {/* Link Section */}
            <section className='expertise-component__link-section'>
                <Link to='/'><i className="bi bi-house-door"></i></Link>
                <span>/</span>
                <Link to='/expertise'>Expertise</Link>
                <span>/</span>
                <span>{expertise.title}</span>
            </section>
            {/* Description Section */}
            <section className='expertise-component__description-section'>
                <h2 className='expertise-component__description-headline'>{expertise.title}</h2>
                {expertise.paragraphs.map((paragraph, index) => (
                    <p 
                        key={index} 
                        className='expertise-component__description-paragraph'
                    >
                        {paragraph}
                    </p>
                ))}
            </section>
            {/* Contact Section */}
            <section className='expertise-component__contact-section'>
                <h2 className='expertise-component__contact-headline'>
                    Ready to Build Together?
                </h2>
                <p className='expertise-component__contact-subheadline'>
                    Contact us now and discover how our expertise can drive your project forward.
                </p>
                <button className='expertise-component__contact-button'>
                    <Link to='/contact'>Contact</Link>
                </button>
            </section>
        </>
        
    );
}

export default ExpertiseComponent;