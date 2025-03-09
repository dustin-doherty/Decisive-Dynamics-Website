import { Expertise } from "../data/expertiseList";
import '../styles/expertiseComponent.css';

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
            {/* Description Section */}
            <section className='expertise-component__description-section'>
                <h2 className='expertise-component__description-headline'>{expertise.title}</h2>
            </section>
        </>
        
    );
}

export default ExpertiseComponent;