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
    paragraphs: string[];
    image: string;
}

const expertiseList: Expertise[] = [
    {
        id: 'utility-design',
        title: 'Utility Design',
        paragraphs: [
            `Decisive Dynamics staff members design sanitary sewer collection and conveyance systems, sewage pumping and on-site treatment facilities, and water distribution systems for domestic and fire protection needs. We also prepare state and federal permits for water and wastewater system construction. Our team has demonstrated the ability to effectively coordinate and negotiate with electric, natural gas, telephone, and cable television utility companies to provide services for new site developments.`
        ],
        image: utilityDesignImg,
    },
    {
        id: 'stormwater-management',
        title: 'Stormwater Management',
        paragraphs: [
            `Our team has extensive hydrologic and hydraulic design experience and a proven track record of obtaining local, state, and federal erosion and sedimentation control permits, as well as NPDES permits for stormwater discharges from construction and industrial activities. Our objective is to integrate erosion and sedimentation control with post-development stormwater management to reduce overall site construction costs.`,
            `We offer a comprehensive scope of consulting services, including flood routing, hydrologic and hydraulic analysis, stormwater detention, water quality treatment through Best Management Practices, and FEMA flood insurance rate map revisions. Our use of state-of-the-art software enables us to analyze alternative detention measures tailored to site-specific requirements.`
        ],
        image: stormwaterManagementImg,
    },
    {
        id: 'water-and-wastewater',
        title: 'Water and Wastewater',
        paragraphs: [
            `Our team designs and oversees watermain extensions, sanitary sewer systems, and wastewater treatment facilities to expand service areas or replace aging infrastructure. We address inflow and infiltration challenges and ensure that all systems comply with strict environmental standards.`,
            `By focusing on efficient design and rigorous construction oversight, we help communities maintain reliable water and wastewater services that support public health and environmental sustainability.`
        ],
        image: waterAndWastewaterImg,
    },
    {
        id: 'parks-and-recreation',
        title: 'Parks and Recreation',
        paragraphs: [
            `We deliver creative, sustainable design and planning services for parks, recreational trails, and athletic facilities. Our team crafts accessible and engaging spaces that foster community connection and promote active living.`,
            `With a focus on sustainability and accessibility, we carefully plan and oversee the construction of multi-use paths and trails that integrate seamlessly into existing transportation networks while enhancing community mobility.`
        ],
        image: parksAndRecreationImg,
    },
    {
        id: 'civil-engineering',
        title: 'Civil Engineering',
        paragraphs: [
            `We offer comprehensive civil engineering services that cover every facet of infrastructure design and construction. Leveraging deep technical expertise and extensive on-site experience, we develop innovative, cost-effective solutions tailored to each project’s unique challenges.`,
            `Our approach ensures durable, high-quality infrastructure that meets both current needs and future demands.`
        ],
        image: civilEngineeringImg,
    },
    {
        id: 'due-diligence',
        title: 'Due Diligence',
        paragraphs: [
            `Our due diligence services include comprehensive environmental assessments, property condition evaluations, floodplain and zoning analyses, and utility service assessments. We identify potential risks and opportunities early in the process, enabling clients to make informed decisions in real estate transactions and development projects.`,
            `By providing a thorough review of key factors, we help manage liabilities and safeguard investments while setting the stage for successful project execution.`
        ],
        image: dueDiligenceImg,
    },
    {
        id: 'planning',
        title: 'Planning',
        paragraphs: [
            `We offer strategic planning services that merge global economic master planning with detailed site development engineering. Our team develops market-responsive master plans and conducts in-depth site selection studies to minimize environmental impacts, reduce costs, and create spaces that resonate with communities.`,
            `Our comprehensive approach to planning ensures sustainable and successful project outcomes from conception through implementation.`
        ],
        image: planningImg,
    },
    {
        id: 'transportation-engineering',
        title: 'Transportation Engineering',
        paragraphs: [
            `Our transportation engineering services encompass traffic studies, roadway improvement designs, and signal planning. We perform detailed feasibility studies, alternatives analyses, and evaluations of intersections, driveways, and circulation patterns to develop practical solutions.`,
            `By focusing on safety, efficiency, and mobility, we deliver designs that improve transportation systems and enhance overall community connectivity.`
        ],
        image: transportationEngineeringImg,
    },
    {
        id: 'construction-services',
        title: 'Construction Services',
        paragraphs: [
            `Our construction services offer full-spectrum project management from pre-construction through project closeout. With expertise in scheduling, cost estimating, quality assurance, and contract administration, we deliver projects on time, within budget, and with exceptional quality.`,
            `We provide a turnkey solution that ensures optimal performance across a wide range of construction projects, meeting the diverse needs of our clients while mitigating risk.`
        ],
        image: constructionServicesImg,
    },
];

export default expertiseList;
