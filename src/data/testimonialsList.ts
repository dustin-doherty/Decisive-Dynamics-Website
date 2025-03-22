export interface Testimonial {
    name: string;
    education: string;
    position: string;
    company: string;
    description: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Commander Alan Krinsky",
        education: "MBA",
        position: "Construction Manager",
        company: "United States Navy (retired)",
        description: "Dustin delt with everyone using his outstanding management and creative design skills saving the client time and money, especially when he thinks out of the box"
    },
    {
        name: "Mark Setterlin",
        education: "",
        position: "President",
        company: "Setterlin Building Company",
        description: "I think one of Dustin’s strongest skills is collaboration. Dustin excelled in leading and bringing everyone together for the project."
    },
    {
        name: "Brian Ball",
        education: "PE",
        position: "City Engineer",
        company: "City of Mount Vernon",
        description: "Dustin Doherty has played a pivotal role in various civil works projects where he successfully completed several miles of water and wastewater system designs, historic brick street replacement designs, and intersection improvements. This effort not only delivered results ahead of schedule but also exceeded client expectations in terms of quality and efficiency."
    },
];

export default testimonials;