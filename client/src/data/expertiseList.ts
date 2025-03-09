import utilityDesignImg from '../assets/images/expertise/utilitiesDesign.jpg';
import stormwaterManagementImg from '../assets/images/expertise/stormwaterManagement.jpg';
import waterAndWastewaterImg from '../assets/images/expertise/waterAndWastewater.jpg';
import parksAndRecreationImg from '../assets/images/expertise/parksAndRecreation.jpg';
import civilEngineeringImg from '../assets/images/expertise/civilEngineering.jpg';
import dueDiligenceImg from '../assets/images/expertise/dueDiligence.jpg';
import planningImg from '../assets/images/expertise/planning.jpg';
import transportationEngineeringImg from '../assets/images/expertise/transportationEngineering.jpg';
import constructionServicesImg from '../assets/images/expertise/constructionServices.jpg';

export interface Expertise {
    id: string;
    title: string;
    description: string;
    image: string;
}

const expertiseList: Expertise[] = [
    {
        id: 'utility-design',
        title: 'Utility Design',
        description:
            'Expert planning and coordination of utility infrastructure to ensure cost-effective and reliable service for new developments and upgrades.',
        image: utilityDesignImg,
    },
    {
        id: 'stormwater-management',
        title: 'Stormwater Management',
        description:
            'Innovative solutions to manage runoff, control flooding, and protect water quality while complying with regulatory requirements.',
        image: stormwaterManagementImg,
    },
    {
        id: 'water-and-wastewater',
        title: 'Water and Wastewater',
        description:
            'Comprehensive design and oversight of water distribution and wastewater treatment systems to ensure safety and environmental compliance.',
        image: waterAndWastewaterImg,
    },
    {
        id: 'parks-and-recreation',
        title: 'Parks and Recreation',
        description:
            'Designing and planning accessible recreational spaces that enhance community engagement and promote active lifestyles.',
        image: parksAndRecreationImg,
    },
    {
        id: 'civil-engineering',
        title: 'Civil Engineering',
        description:
            'Robust civil engineering services combining technical expertise with practical solutions for lasting, high-quality infrastructure.',
        image: civilEngineeringImg,
    },
    {
        id: 'due-diligence',
        title: 'Due Diligence',
        description:
            'In-depth assessments to identify risks and opportunities, ensuring informed decisions in real estate and development projects.',
        image: dueDiligenceImg,
    },
    {
        id: 'planning',
        title: 'Planning',
        description:
            'Strategic planning that integrates multidisciplinary expertise to deliver sustainable and successful project outcomes.',
        image: planningImg,
    },
    {
        id: 'transportation-engineering',
        title: 'Transportation Engineering',
        description:
            'Innovative traffic studies, roadway design, and transportation solutions to enhance safety, efficiency, and mobility.',
        image: transportationEngineeringImg,
    },
    {
        id: 'construction-services',
        title: 'Construction Services',
        description:
            'Comprehensive construction management and oversight that ensures projects are delivered on time, within budget, and with exceptional quality.',
        image: constructionServicesImg,
    },
  ];

export default expertiseList;