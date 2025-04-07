import { Link } from "react-router-dom";
import { Expertise } from "../data/expertiseList";
import projectList from "../data/projectList";
import ProjectCard from "./ProjectCard";
import ContactSection from "./ContactSection";
import "../styles/contactsection.css";
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
            {/* Project Section */}
            <section className='expertise-component__project-section'>
                {projectList.map((project) => 
                    project.category === expertise.id && (
                        <ProjectCard project={project} />
                    )
                )}
            </section>
            {/* Contact Section */}
            <ContactSection />
        </>
        
    );
}

export default ExpertiseComponent;