import { CoreValue } from "../../data/coreValuesList";
import "../../styles/coreValueCard.css";

interface CareValueProps {
    value: CoreValue;
}

const CoreValueCard: React.FC<CareValueProps> = ({ value }) => {
    return (
        <div className='core-value__card-container'>
            <div className='core-value__content'>
                <p className='core-value__icon'>{value.icon}</p>
                <h3 className='core-value__headline'>{value.title}</h3>
                <p className='core-value__text'>{value.description}</p>
            </div>
        </div>
    )
}

export default CoreValueCard;