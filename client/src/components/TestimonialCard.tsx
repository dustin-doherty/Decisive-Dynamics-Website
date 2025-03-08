import { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className='testimonial-card'>
            <div className='testimonial-card__witness'>
                <p className='testimonial-card__name'>{testimonial.name} <span className='testimonial-card__education'>{testimonial.education}</span></p>
                <p className='testimonial-card__position'>{testimonial.position}</p>
                <p className='testimonial-card__company'>{testimonial.company}</p>
            </div>
            <p className='testimonial-card__description'><q>{testimonial.description}</q></p>
        </div>
    )
}

export default TestimonialCard;