export interface Scope {
    heading: string;
    context: string;
}

export interface Overview {
    intro: string;
    scope: Scope[];
}

export interface Project {
    category: string;
    name: string;
    owner: string;
    location: string;
    type: string;
    services: string[];
    specifications: string[];
    staff: string[];
    objective: string;
    overview: Overview;
}

const projectList: Project[] = [
    // Page 13: Sandel Legacy Trail
    {
        category: 'parks-and-recreation',
        name: 'Sandel Legacy Trail',
        owner: 'Preservation Parks of Delaware County',
        location: 'Sunbury, Ohio',
        type: 'Multiuse path',
        services: [
            'Site analysis and surveying',
            'Trail design and engineering',
            'Parking lot regrading',
            'Bridge modifications',
            'Environmental',
            'Stormwater management',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The primary objective of this project was to create a safe,
            accessible, and sustainable multi-use trail to enhance
            connectivity and recreational opportunities for the Village of
            Sunbury and surrounding areas. By repurposing an
            abandoned railroad bed, the project aimed to preserve the
            region's historical and environmental assets while providing
            residents and visitors with a functional pathway for walking,
            running, cycling, and other activities. Additional goals
            included improving local infrastructure with regraded
            parking areas, seamless integration with surrounding
            neighborhoods through spurs, and ensuring safe navigation
            at roadway crossings.
        `,
        overview: {
            intro: `
                The Sunbury Multi-Use Trail project encompassed the
                design and construction of approximately 5,000 linear feet
                of a 10-ft wide asphalt trail, utilizing an abandoned railroad
                bed to maintain a unique and historic aesthetic. The trail
                was developed as part of a collaborative effort between the
                Village of Sunbury and Preservation Parks of Delaware
                County, emphasizing the importance of community
                partnerships in public infrastructure improvements.
            `,
            scope: [
                {
                    heading: 'Trail Construction:',
                    context: `
                        Designing and paving a 10-ft wide
                        asphalt trail that adhered to ADA accessibility standards,
                        ensuring usability for all community members.
                    `,
                },
                {
                    heading: 'Parking Lot Regrading:',
                    context: `
                        Upgrading the existing gravel parking
                        lot for improved functionality and drainage, enhancing the
                        overall user experience.
                    `,
                },
                {
                    heading: 'Bridge Modifications:',
                    context: `
                        Adapting and modifying existing
                        bridges along the trail for safety and compatibility with
                        modern trail usage.
                    `,
                },
                {
                    heading: 'Spurs for Connectivity:',
                    context: `
                        Constructing spurs to link the trail
                        with nearby neighborhoods, promoting accessibility and
                        encouraging community integration.
                    `,
                },
                {
                    heading: 'Roadway Crossings:',
                    context: `
                        Designing and implementing safety
                        measures for trail crossings at several roadways, including
                        signage, crosswalks, and possible signalization.
                    `,
                },
            ],
        },
    },
    // Page 14: Greenlawn Avenue Sanitary Pump Station
    {
        category: 'water-and-wastewater',
        name: 'Greenlawn Avenue Sanitary Pump Station',
        owner: 'City of Columbus',
        location: 'Columbus, Ohio',
        type: 'Sanitary Pump Station',
        services: [
            'Sanitary pump station design',
            'Overflow system development',
            'Manhole rehabilitation',
            'Odor control system design',
            'System integration',
            'Construction administration and quality control',
            'Stakeholder communication and coordination',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to ensure the reliable and
            efficient operation of the Greenlawn Avenue sewer system
            while addressing the challenges posed by a submerged
            gravity outlet. By implementing a sanitary pump station with
            a wet well/dry well configuration, the project aimed to
            enhance wastewater management, reduce system
            downtime, and mitigate environmental concerns. Additional
            objectives included rehabilitating an OSIS (Ohio Sewer
            Interceptor System) manhole to extend its service life and
            incorporating odor control measures to improve air quality
            for the surrounding area.
        `,
        overview: {
            intro: `
                This project involved the design and implementation of critical infrastructure improvements to the Greenlawn Avenue sewer system. 
            `,
            scope: [
                {
                    heading: 'Sanitary Pump Station Construction:',
                    context: `
                        Construction of a wet well/dry well configuration for effective wastewater pumping and management.
                    `,
                },
                {
                    heading: 'Overflow Management:',
                    context: `
                        Development of an overflow weir and automated sluice gate
                        system to maintain operational integrity of the Greenlawn
                        Avenue sewer under submerged conditions.
                    `,
                },
                {
                    heading: 'OSIS Manhole Rehabilitation:',
                    context: `
                        Structural rehabilitation of an OSIS manhole to restore functionality and extend service life.
                    `,
                },
                {
                    heading: 'Odor Control:',
                    context: `
                        Installation of a passive charcoal odor control scrubber to mitigate odors and improve environmental conditions.
                    `,
                },
            ],
        },
    },
    // Page 15: Newark Road Watermain Replacement
    {
        category: 'water-and-wastewater',
        name: 'Newark Road Watermain Replacement',
        owner: 'City of Mount Vernon',
        location: 'Mount Vernon, Ohio',
        type: 'Watermain Replacement',
        services: [
            'Site analysis',
            'Topographic survey',
            'Hydraulic design',
            'Structural design',
            'Utility coordination',
            'Environmental and Regulatory compliance',
            'Construction planning',
            'Stakeholder communication',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project is to design a reliable and
            durable 12-inch ductile iron watermain system to improve
            water distribution and supply capacity in the designated
            area. The goal is to ensure the system meets current and
            future water demand, while minimizing maintenance needs
            and ensuring long-term performance. The design aims to
            align with industry standards, environmental
            considerations, and community needs, while ensuring a
            seamless integration into the existing water infrastructure.
        `,
        overview: {
            intro: `
                The project involves the design of approximately 5,000
                linear feet of 12-inch ductile iron watermain, aimed at
                enhancing the water distribution system's capacity and
                reliability.
            `,
            scope: [
                {
                    heading: 'Watermain Design:',
                    context: `
                        Design of the 12-inch ductile iron watermain to meet
                        hydraulic, structural, and operational requirements for the
                        service area.
                    `,
                },
                {
                    heading: 'System Integration:',
                    context: `
                        Integration of the new watermain with the existing water
                        distribution system, ensuring minimal disruption and
                        optimized flow.
                    `,
                },
                {
                    heading: 'Environmental Considerations:',
                    context: `
                        Address environmental factors, including site conditions,
                        water quality, and soil characteristics, to ensure long-term
                        sustainability and operational efficiency.
                    `,
                },
                {
                    heading: 'Compliance with Standards:',
                    context: `
                        Adherence to local regulations, industry standards (AWWA,
                        NSF), and best practices for water infrastructure design.
                    `,
                },
            ],
        },
    },
    // Page 16: Orders Road Improvement Project
    {
        category: 'transportation-engineering',
        name: 'Orders Road Improvement Project',
        owner: 'City of Grove City',
        location: 'Grove City, Ohio',
        type: 'Roundabout and Roadway Widening',
        services: [
            'Roadway Widening and Resurfacing Design',
            'Roundabout and Traffic Signal Design',
            'Street Lighting Design',
            'Storm Sewer and Drainage Design',
            'Traffic Analysis and Flow Studies',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to improve transportation
            efficiency, safety, and drainage infrastructure in the area,
            particularly by enhancing traffic flow, reducing congestion,
            and addressing existing drainage and sanitary sewer issues.
            The project aimed to widen and resurface 4,000 linear feet
            of roadway, construct a roundabout at the intersection with
            Haughn Road, and install a new traffic signal at Southern
            Grove Drive. Additionally, it focused on improving
            stormwater management, replacing aging culverts,
            extending the sanitary sewer system, and decommissioning
            the existing pump station. These improvements were
            designed to meet current and future infrastructure needs,
            enhance pedestrian and vehicular safety, and ensure long-
            term sustainability.
        `,
        overview: {
            intro: `
                This project involved significant improvements to the
                roadway and utility infrastructure along a 4,000 linear-foot
                corridor.
            `,
            scope: [
                {
                    heading: 'Roadway Widening and Resurfacing:',
                    context: `
                        Widening and resurfacing of the existing roadway to
                        accommodate increased traffic flow and enhance safety.
                    `,
                },
                {
                    heading: 'Roundabout Construction:',
                    context: `
                        Design and construction of a roundabout at the intersection
                        with Haughn Road to improve traffic flow, reduce
                        congestion, and increase safety for all users.
                    `,
                },
                {
                    heading: 'Traffic Signal Installation:',
                    context: `
                        Installation of a new traffic signal at the intersection of
                        Southern Grove Drive to manage traffic flow and improve
                        safety.
                    `,
                },
                {
                    heading: 'Street Lighting:',
                    context: `
                        Installation of street lighting along the entire roadway
                        corridor to enhance visibility and safety for both drivers and
                        pedestrians.
                    `,
                },
                {
                    heading: 'Storm Sewer and Drainage Improvements:',
                    context: `
                        Design and installation of new storm sewers and ditches to
                        improve drainage capacity and reduce flooding risks.
                    `,
                },
            ],
        },
    },
    // Page 17: East Main Street Gateway Improvements
    {
        category: 'transportation',
        name: 'East Main Street Gateway Improvements',
        owner: 'City of Whitehall',
        location: 'Whitehall, Ohio',
        type: 'Roadway Widening and Streetscape',
        services: [
            'Roadway Widening and Resurfacing Design',
            'Utility Coordination and Relocation',
            'Electrical Support and Coordination',
            'Traffic Management and Construction Phasing',
            'Stakeholder Communication',
            'Quality Control and Inspection',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to enhance the roadway
            infrastructure by widening and resurfacing the existing
            roadway, improving safety, accessibility, and aesthetic
            appeal. Key goals included the installation of new curbs,
            sidewalks, and drive approaches, along with the creation of
            a raised planter with an entry feature to enhance the area's
            visual appeal. Additionally, the project focused on
            integrating essential utilities, such as irrigation and
            electrical systems, and coordinating utility relocations to
            accommodate the roadway improvements. The goal was to
            provide a well-rounded solution that meets current needs
            while ensuring long-term functionality and community
            benefit.
        `,
        overview: {
            intro: `
                This project involved significant infrastructure upgrades to
                improve the roadways, pedestrian pathways, and utility systems in the area.
            `,
            scope: [
                {
                    heading: 'Roadway Widening and Resurfacing:',
                    context: `
                        Widening and resurfacing of the existing roadway to improve
                        traffic flow and safety. Installation of new curb, sidewalk,
                        and drive approaches to enhance accessibility and
                        accommodate pedestrian traffic.
                    `,
                },
                {
                    heading: 'Raised Planter with Entry Feature:',
                    context: `
                        Creation of a raised planter area with an entry feature,
                        incorporating 3M translucent sails and signs to provide a
                        distinctive visual identity for the area.
                    `,
                },
                {
                    heading: 'Hot Box and Backflow Preventer:',
                    context: `
                        Installation of a hot box for material storage and a backflow
                        preventer to maintain water system integrity and prevent
                        contamination.
                    `,
                },
                {
                    heading: 'Utility Coordination and Relocation:',
                    context: `
                        Coordination with AT&T for pole relocation to accommodate
                        the roadway widening. Coordination with AEP for the
                        extension of new electrical service, ensuring proper
                        backlighting of the entry feature.
                    `,
                },
            ],
        },
    },
    // Page 18: Windsor Park/Town Center Trail Connectivity
    {
        category: 'recreation',
        name: 'Windsor Park/Town Center Trail Connectivity',
        owner: 'City of Grove City',
        location: 'Grove City, Ohio',
        type: 'Multiuse Path',
        services: [
            'Preliminary Planning',
            'Community Engagement',
            'Grant Funding Assistance',
            'Site Survey and Analysis',
            'Detailed Trail Design',
            'Utility and Environmental Coordination',
            'Construction Phase Services',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to improve accessibility
            and connectivity between Grove City's town center and
            Windsor Park, one of the city's most heavily used
            recreational facilities. By providing an ADA-compliant
            recreational trail, the project aimed to enhance mobility for
            all residents, particularly those with disabilities, and
            encourage increased use of the park and surrounding areas.
            The project sought to meet both the community’s
            immediate needs and long-term goals for active
            transportation and recreational access while securing
            necessary funding and ensuring the trail aligns with the
            city’s broader urban development and park accessibility
            goals.
        `,
        overview: {
            intro: `
                This project involved the design and construction of an ADA-
                compliant recreational trail that connects the older, densely
                populated neighborhoods of Grove City's town center to
                Windsor Park, a central hub for recreation. Spanning
                approximately 8,000 linear feet, the trail was intended to
                provide safe, accessible, and convenient pedestrian
                access, promoting physical activity and enhancing local
                connectivity. Key aspects of the project included
                preliminary planning, grant funding assistance, survey work,
                detailed design, and construction phase services. The
                project also involved securing funding through the Ohio
                Department of Natural Resources (ODNR) Recreational
                Trails Program and the Clean Ohio Trails Fund, which helped
                finance the construction of the trail.
            `,
            scope: [
                {
                    heading: 'ADA-Compliant Recreational Trail Design:',
                    context: `
                        Design of a trail that meets accessibility standards for all
                        users, including individuals with disabilities. The trail was
                        designed with proper slopes, widths, and surface materials
                        to ensure safe and easy access for pedestrians and cyclists.
                    `,
                },
                {
                    heading: 'Connectivity to Windsor Park:',
                    context: `
                        A central goal of the project was to connect the town
                        center’s neighborhoods directly to Windsor Park, promoting
                        recreation and improving mobility for residents.
                    `,
                },
            ],
        },
    },
    // Page 19: Hook Drive Pump Station
    {
        category: 'water-and-wastewater',
        name: 'Hook Drive Pump Station',
        owner: 'City of Middletown',
        location: 'Middletown, Ohio',
        type: 'Stormwater Pump Station',
        services: [
            'Hydraulic Modeling and Analysis',
            'Storage and Pump Capacity Evaluation',
            'SCADA System Design',
            'Permitting and Regulatory Support',
            'Construction Oversight and Quality Assurance',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to provide an effective
            solution to an existing storm sewer system issue where
            discharge occurred through a submerged pipe into a
            retention pond with no outlet. The goal was to alleviate the
            flooding risks and capacity limitations of the existing system
            while ensuring proper stormwater management. The project
            aimed to design and implement a new stormwater lift
            station, including hydraulic modeling, stormwater storage
            and pump capacity options, and integration of the city’s
            preferred equipment. Collaboration with the city
            maintenance staff ensured the final design met the city's
            operational preferences and standards for long-term
            functionality and ease of maintenance.
        `,
        overview: {
            intro: `
                The project involved the development of a stormwater lift
                station to relieve an existing storm sewer system that was
                discharging through a submerged pipe into a retention
                pond, which lacked an outlet. This issue caused potential
                flooding and system inefficiency. To address these
                challenges, a comprehensive solution was developed,
                including hydraulic modeling, storage and pump capacity
                analysis, and detailed design. The design was aimed at
                improving the capacity and efficiency of the stormwater
                system.
            `,
            scope: [
                {
                    heading: 'Hydraulic Modeling and Stormwater Design:',
                    context: `
                        Conducting hydraulic modeling of various design storms to
                        understand the system’s behavior and identify appropriate
                        solutions for stormwater management. Evaluation of
                        different storage and pump capacity options for the
                        proposed stormwater lift station.
                    `,
                },
                {
                    heading: 'Lift Station Design:',
                    context: `
                        Detailed design of the stormwater lift station, which would
                        pump water from the retention pond to an appropriate
                        outlet to prevent flooding and improve drainage.
                    `,
                },
                {
                    heading: 'Integration with Existing Infrastructure:',
                    context: `
                        Coordination with the city’s maintenance sta; to
                        incorporate their input on equipment selection.
                    `,
                },
            ],
        },
    },
    // Page 20: Terra Alta Pump Station
    {
        category: 'water-and-wastewater',
        name: 'Terra Alta Pump Station',
        owner: 'Romanelli-Hughes Homes',
        location: 'Delaware, Ohio',
        type: 'Sanitary Pump Station',
        services: [
            'Design of Wet Well/Valve Vault',
            'Bioxide System Integration',
            'Stakeholder Coordination',
            'Hydraulic Analysis and Site Assessment',
            'Detailed Design and Optimization',
            'Regulatory Compliance',
            'Construction Oversight and Quality Assurance',
        ],
        specifications: [
            'ODOT',
            'City of Columbus CMS',
        ],
        staff: [
            'Dustin Doherty, PE, CPSEC',
        ],
        objective: `
            The objective of this project was to design and implement a
            sanitary pump station with a wet well/valve vault
            configuration equipped with a Bioxide system to efficiently
            manage and treat wastewater. The goal was to provide an
            effective, reliable, and sustainable solution for wastewater
            pumping while adhering to local and regional design
            standards. The project required seamless coordination with
            multiple stakeholders, including the developer, city, county,
            and township, to ensure alignment with their specific needs,
            standards, and operational requirements. The final design
            aimed to enhance system efficiency, meet regulatory
            requirements, and support long-term sustainability.
        `,
        overview: {
            intro: `
                This project involved the design and construction of a
                sanitary pump station featuring a wet well/valve vault
                configuration, complemented by a Bioxide system for
                wastewater treatment. The pump station was designed to
                provide reliable wastewater pumping capacity for the area,
                with an emphasis on efficiency and operational
                sustainability. The integration of the Bioxide system was
                critical in ensuring that the wastewater met environmental
                standards before discharge. Coordination with multiple
                stakeholders—including the developer, city, county, and
                township—was essential to ensure compliance with various
                local and regional design standards and operational needs.
                The final design had to address these requirements while
                providing a robust, scalable solution for the growing
                community’s wastewater management needs.
            `,
            scope: [
                {
                    heading: 'Sanitary Pump Station Design (Wet Well/Valve Vault Configuration):',
                    context: `
                        Designed a wet well and valve vault configuration to house
                        the pump system, ensuring that it could handle the required
                        wastewater volumes with minimal energy consumption and
                        operational issues.
                    `,
                },
                {
                    heading: 'Bioxide System Integration:',
                    context: `
                        Included a Bioxide system in the design to treat the
                        wastewater before discharge, improving the quality of
                        effluent and reducing environmental impact.
                    `,
                },
            ],
        },
    },
];

export default projectList;