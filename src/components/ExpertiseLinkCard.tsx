import { Expertise } from "../data/expertiseList";
import { Link } from "react-router-dom";
import "../styles/expertiseLinkCard.css";

interface ExpertiseLinkCardProps {
    expertise: Expertise;
}

const ExpertiseLinkCard: React.FC<ExpertiseLinkCardProps> = ({ expertise }) => {
    return (
        <Link className='expertise-link-card' to={`${expertise.id}`}>
            <div className='expertise-link-card__image-container'>
                <img 
                    src={expertise.image}
                    alt={expertise.title}
                    className='expertise-link-card__image'
                />
            </div>
            <div className='expertise-link-card__text-container'>
                <p className='expertise-link-card__text'>{expertise.title}</p>
            </div>
        </Link>
    )
}

export default ExpertiseLinkCard;