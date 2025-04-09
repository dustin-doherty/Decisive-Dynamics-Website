import utilityDesignImg from "../assets/images/expertise/utilitiesDesign.webp";
import stormwaterManagementImg from "../assets/images/expertise/stormwaterManagement.webp";
import waterAndWastewaterImg from "../assets/images/expertise/waterAndWastewater.webp";
import parksAndRecreationImg from "../assets/images/expertise/parksAndRecreation.webp";
import civilEngineeringImg from "../assets/images/expertise/civilEngineering.webp";
import dueDiligenceImg from "../assets/images/expertise/dueDiligence.webp";
import planningImg from "../assets/images/expertise/planning.webp";
import transportationEngineeringImg from "../assets/images/expertise/transportationEngineering.webp";
import constructionServicesImg from "../assets/images/expertise/constructionServices.webp";

export interface Expertise {
    id: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
    image: string;
}

const expertiseList: Expertise[] = [
    {
        id: "utility-design",
        title: "Utility Design",
        paragraphs: [
            `Decisive Dynamics staff members design sanitary sewer collection and conveyance systems, sewage pumping and on-site treatment facilities, and water distribution systems for domestic and fire protection needs. We also prepare state and federal permits for water and wastewater system construction. Our team has demonstrated the ability to effectively coordinate and negotiate with electric, natural gas, telephone, and cable television utility companies to provide services for new site developments.`
        ],
        bullets: [
            `Preparation of detailed state and federal permits for water and wastewater system construction.`,
            `Expertise in coordinating and negotiating with electric, natural gas, telephone, and cable television providers.`,
            `Development of efficient solutions for water distribution systems designed specifically for domestic use and fire protection.`,
            `Experience in designing sewage pumping and on-site wastewater treatment systems tailored to specific project requirements.`,
            `Effective management of utility relocation and integration during site development projects.`,
        ],
        image: utilityDesignImg,
    },
    {
        id: "stormwater-management",
        title: "Stormwater Management",
        paragraphs: [
            `Our team has extensive hydrologic and hydraulic design experience and a proven track record of obtaining local, state, and federal erosion and sedimentation control permits, as well as NPDES permits for stormwater discharges from construction and industrial activities. Our objective is to integrate erosion and sedimentation control with post-development stormwater management to reduce overall site construction costs.`,
            `We offer a comprehensive scope of consulting services, including flood routing, hydrologic and hydraulic analysis, stormwater detention, water quality treatment through Best Management Practices, and FEMA flood insurance rate map revisions. Our use of state-of-the-art software enables us to analyze alternative detention measures tailored to site-specific requirements.`
        ],
        bullets: [
            `Flood routing and FEMA flood insurance rate map revisions.`,
            `Successful integration of erosion and sedimentation control into stormwater management to optimize construction budgets.`,
            `Application of surface and underground detention strategies to resolve complex stormwater challenges.`,
            `Conducting detailed hydrologic and hydraulic analyses to ensure regulatory compliance and environmental sustainability.`,
            `Extensive experience obtaining National Pollutant Discharge Elimination System (NPDES) permits for stormwater discharges.`,
        ],
        image: stormwaterManagementImg,
    },
    {
        id: "water-and-wastewater",
        title: "Water and Wastewater",
        paragraphs: [
            `Our team designs and oversees watermain extensions, sanitary sewer systems, and wastewater treatment facilities to expand service areas or replace aging infrastructure. We address inflow and infiltration challenges and ensure that all systems comply with strict environmental standards.`,
            `By focusing on efficient design and rigorous construction oversight, we help communities maintain reliable water and wastewater services that support public health and environmental sustainability.`
        ],
        bullets: [
            `Detailed analysis and design of wastewater treatment facilities and sanitary sewer systems tailored to client-specific requirements.`,
            `Addressing inflow and infiltration problems in existing sanitary systems.`,
            `Rehabilitation and extension of watermains to support growing service areas.`,
            `Integration of odor control systems and overflow management measures into wastewater infrastructure.`,
            `Utilization of advanced hydraulic modeling and detailed site assessments to ensure long-term infrastructure reliability.`,
        ],
        image: waterAndWastewaterImg,
    },
    {
        id: "parks-and-recreation",
        title: "Parks and Recreation",
        paragraphs: [
            `We deliver creative, sustainable design and planning services for parks, recreational trails, and athletic facilities. Our team crafts accessible and engaging spaces that foster community connection and promote active living.`,
            `With a focus on sustainability and accessibility, we carefully plan and oversee the construction of multi-use paths and trails that integrate seamlessly into existing transportation networks while enhancing community mobility.`
        ],
        bullets: [
            `Specialized expertise in designing athletic facilities and multi-use trails emphasizing accessibility and community engagement.`,
            `Integration of sustainable design practices into recreational space planning.`,
            `Proven track record of projects like multi-use trails, parking facilities, and bridge modifications for community parks.`,
            `Experience with securing grant funding and assisting in community engagement during recreational project development.`,
            `Design of ADA-compliant recreational trails to enhance community connectivity and mobility.`,
        ],
        image: parksAndRecreationImg,
    },
    {
        id: "civil-engineering",
        title: "Civil Engineering",
        paragraphs: [
            `We offer comprehensive civil engineering services that cover every facet of infrastructure design and construction. Leveraging deep technical expertise and extensive on-site experience, we develop innovative, cost-effective solutions tailored to each project’s unique challenges.`,
            `Our approach ensures durable, high-quality infrastructure that meets both current needs and future demands.`
        ],
        bullets: [
            `Expertise in site grading analyses and achieving balanced earthwork conditions for projects ranging from small to massive-scale developments.`,
            `Design and implementation of erosion and sedimentation controls integrated with comprehensive stormwater management.`,
            `Extensive experience in civil design for commercial, residential, industrial, and institutional developments, providing cost-effective, sustainable solutions.`,
            `Preparation of detailed site investigations and predevelopment analyses to optimize project feasibility.`,
            `Coordination and regulatory compliance management for civil infrastructure across diverse project types.`,
        ],
        image: civilEngineeringImg,
    },
    {
        id: "due-diligence",
        title: "Due Diligence",
        paragraphs: [
            `Our due diligence services include comprehensive environmental assessments, property condition evaluations, floodplain and zoning analyses, and utility service assessments. We identify potential risks and opportunities early in the process, enabling clients to make informed decisions in real estate transactions and development projects.`,
            `By providing a thorough review of key factors, we help manage liabilities and safeguard investments while setting the stage for successful project execution.`
        ],
        bullets: [
            `Performance of environmental assessments (Phase I and II), facility condition evaluations, and floodplain analyses to support informed real estate decisions.`,
            `Expertise in preliminary conceptual planning, including zoning compliance, grading strategies, and utility service assessments.`,
            `Identification of site liabilities early to minimize future risks and protect client investments.`,
            `Provision of property condition evaluations to assist with transaction decisions and property valuation.`,
            `Comprehensive floodplain and floodway identification to mitigate potential development risks.`,
        ],
        image: dueDiligenceImg,
    },
    {
        id: "planning",
        title: "Planning",
        paragraphs: [
            `We offer strategic planning services that merge global economic master planning with detailed site development engineering. Our team develops market-responsive master plans and conducts in-depth site selection studies to minimize environmental impacts, reduce costs, and create spaces that resonate with communities.`,
            `Our comprehensive approach to planning ensures sustainable and successful project outcomes from conception through implementation.`
        ],
        bullets: [
            `Conducting comprehensive site selection studies to objectively assess complex location decisions, factoring financial incentives, labor availability, regulatory issues, and infrastructure considerations.`,
            `Development of economically viable and market-responsive master plans tailored to specific business needs.`,
            `Creation of facility master plans that emphasize sustainability, reduced environmental impacts, and enhanced workplace harmony.`,
            `Integration of economic analysis into site planning decisions to ensure market-responsive and financially viable developments.`,
            `Expert navigation of complex zoning and regulatory environments to streamline project implementation.`,
        ],
        image: planningImg,
    },
    {
        id: "transportation-engineering",
        title: "Transportation Engineering",
        paragraphs: [
            `Our transportation engineering services encompass traffic studies, roadway improvement designs, and signal planning. We perform detailed feasibility studies, alternatives analyses, and evaluations of intersections, driveways, and circulation patterns to develop practical solutions.`,
            `By focusing on safety, efficiency, and mobility, we deliver designs that improve transportation systems and enhance overall community connectivity.`
        ],
        bullets: [
            `Provision of detailed traffic studies and evaluations, including intersection analyses, queuing studies, and site circulation assessments.`,
            `Design and implementation of roadway improvements, traffic signal optimizations, and auxiliary turn lane evaluations to enhance safety and traffic flow.`,
            `Thorough understanding of local and state regulatory requirements to facilitate smooth project approvals.`,
            `Comprehensive safety evaluations and congestion management strategies for transportation projects.`,
            `Expertise in feasibility studies and alternatives analysis to inform strategic transportation infrastructure decisions.`,
        ],
        image: transportationEngineeringImg,
    },
    {
        id: "construction-services",
        title: "Construction Services",
        paragraphs: [
            `Our construction services offer full-spectrum project management from pre-construction through project closeout. With expertise in scheduling, cost estimating, quality assurance, and contract administration, we deliver projects on time, within budget, and with exceptional quality.`,
            `We provide a turnkey solution that ensures optimal performance across a wide range of construction projects, meeting the diverse needs of our clients while mitigating risk.`
        ],
        bullets: [
            `Comprehensive construction administration and inspection services, ensuring alignment with project specifications and high-quality standards.`,
            `Proven capabilities in managing construction budgets, schedules, and contracts, providing meticulous quality assurance and risk mitigation.`,
            `Expertise in a variety of construction projects including earthwork, utility installation, erosion control, paving, and site rehabilitation, employing both traditional and Design/Build methodologies.`,
            `Turnkey construction management services providing single-point responsibility for design, construction oversight, and quality assurance.`,
            `Implementation of advanced scheduling and cost-estimating practices to maintain on-budget and on-time project delivery.`,
        ],
        image: constructionServicesImg,
    },
];

export default expertiseList;
