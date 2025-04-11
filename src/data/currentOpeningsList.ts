export interface Opening {
    title: string;
    experience: string;
    type: string;
    description: string;
}

const currentOpeningsList: Opening[] = [
    {
        title: "Project Engineer",
        experience: "1-5 years",
        type: "Full-Time",
        description: `
            As a Project Engineer at Decisive Dynamics, you’ll contribute to a variety of civil engineering and infrastructure projects 
            while building your technical and project management skills. You’ll work alongside experienced professionals in a collaborative, 
            people-first environment where growth, innovation, and mentorship are at the core of our culture. This is an ideal opportunity 
            for early-career engineers who are eager to develop their expertise and make a real impact on the communities we serve.
        `,
    },
    {
        title: "Project Manager",
        experience: "8–12 years",
        type: "Full-Time",
        description: `
            We are seeking a seasoned Project Manager to lead complex engineering projects from concept through completion. 
            This role is ideal for professionals who bring deep industry knowledge, proven leadership, and a proactive approach 
            to client service. At Decisive Dynamics, Project Managers are trusted to shape outcomes, lead multidisciplinary teams, 
            and build lasting relationships. If you thrive in a responsive, collaborative setting where you can mentor others and 
            drive innovation, we’d love to hear from you.
        `,
    },
];

export default currentOpeningsList;