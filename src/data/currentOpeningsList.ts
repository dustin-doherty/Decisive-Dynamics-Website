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
            As a Project Engineer at Decisive Dynamics, you’ll support a variety of civil engineering and infrastructure projects 
            while growing your technical and project management skills. This role is perfect for early-career engineers eager to 
            learn, contribute meaningfully, and make a lasting impact in a collaborative, people-first environment.
        `,
    },
    {
        title: "Project Manager",
        experience: "8–12 years",
        type: "Full-Time",
        description: `
            We're seeking an experienced Project Manager to lead complex engineering projects from start to finish. 
            You’ll guide multidisciplinary teams, build strong client relationships, and help shape project outcomes. 
            This role is ideal for leaders who value mentorship, responsiveness, and making a lasting impact.
        `,
    },
];

export default currentOpeningsList;