import { CoreValue } from "../data/coreValuesList";
import "../styles/coreValueCard.css";

interface CareValueProps {
    value: CoreValue;
}

const CoreValueCard: React.FC<CareValueProps> = ({ value }) => {
    const icons = {
        Communication: "💬",
        "People First": "👥",
        Collaboration: "🤝",
        Safety: "🛡️"
    };

    return (
        <section 
            className='core-value__card-container'
        >
            <div className='core-value__icon'>{icons[value.title as keyof typeof icons]}</div>
            <h3 className='core-value__headline'>{value.title}</h3>
            <p className='core-value__text'>{value.description}</p>
        </section>
    )
}

export default CoreValueCard;