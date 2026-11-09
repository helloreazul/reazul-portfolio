/* Project content source.
   Add future case studies as new objects using the same section structure. */
window.portfolioProjects = {
    timetics: {
        number: "002",
        category: "Portfolio",
        title: "Scheduling solutions",
        heroImage: "../images/project-previews/studio-display.png",
        sidebar: [
            { label: "Category", value: "SaaS Web Application" },
            { label: "Product", value: "Timetics AI" },
            { label: "Live View", value: "Visit Now", href: "https://timetics.ai/" }
        ],
        services: [
            "SaaS Web Application",
            "Calendar Management",
            "Workflow Automation"
        ],
        overview: "Timetics AI is an AI-powered scheduling and appointment management SaaS platform designed for freelancers, consultants, coaches, agencies, and service-based businesses. It brings appointment scheduling, customizable booking pages, calendar integrations, team management, and payment processing together in one platform.",
        goal: "Improve the Timetics AI user experience by simplifying appointment scheduling, making business management workflows easier to understand, and creating a seamless experience for managing bookings, availability, teams, and multiple businesses from one platform.",
        overviewGallery: [
            { label: "Product interface preview", ratio: "landscape", src: "../images/project-previews/ipad.png" },
            { label: "Scheduling workflow preview", ratio: "landscape", src: "../images/project-previews/macbook.png" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "Freelancers, consultants, and service-based businesses often use multiple tools to manage appointments, coordinate availability, communicate with clients, and collect payments. Managing these activities separately can create unnecessary complexity, scheduling conflicts, and additional administrative work.",
            context: "Timetics AI aims to simplify this experience by bringing essential scheduling and business management tools together in one centralized platform.",
            challengeTitle: "Key UX Challenges:",
            challenges: [
                "Simplifying account setup and initial workspace configuration.",
                "Making appointment creation and availability management easier.",
                "Helping users build and customize professional booking pages.",
                "Improving the clarity of customer-facing booking workflows.",
                "Making calendar, meeting, and payment integrations easier to configure.",
                "Supporting team scheduling and multiple business management.",
                "Making AI-powered capabilities understandable and accessible.",
                "Organizing dashboard information to improve everyday productivity."
            ],
            discoveryTitle: "Research and Discovery:",
            discovery: "I reviewed the existing product experience, evaluated key scheduling and business management workflows, and identified opportunities to improve usability, feature discoverability, and overall interface clarity.",
            discoveryDetail: "The discovery process focused on understanding how service-based businesses manage appointments, coordinate schedules, and handle repetitive administrative tasks.",
            evidence: "[Add actual user feedback, support-ticket patterns, analytics, usability findings, or competitor insights.]"
        },
        researchGallery: [
            { label: "Research visual 1", ratio: "small" },
            { label: "Research visual 2", ratio: "small" },
            { label: "Research visual 3", ratio: "small" },
            { label: "Research board", ratio: "wide" }
        ],
        process: {
            heading: "Design process",
            body: "The design work focused on making core scheduling tasks easier to understand and manage. The interface structure brings related actions together and aims to make key workflows easier to discover."
        },
        processGallery: [
            { label: "Design process visual 1", ratio: "landscape" },
            { label: "Design process visual 2", ratio: "landscape" },
            { label: "Design process overview", ratio: "wide" },
            { label: "Interface exploration 1", ratio: "landscape" },
            { label: "Interface exploration 2", ratio: "landscape" }
        ],
        solution: {
            heading: "Final solution",
            body: "The proposed experience brings appointment scheduling, availability, booking pages, team workflows, and business management into a more connected product experience."
        },
        solutionGallery: [
            { label: "Final product screen", ratio: "wide" },
            { label: "Final interface detail 1", ratio: "landscape" },
            { label: "Final interface detail 2", ratio: "landscape" }
        ],
        results: {
            heading: "Results and learning",
            body: "This case study documents the product experience, the UX challenges considered, and the design direction for simplifying scheduling and business management workflows."
        },
        tags: ["SaaS", "Product Design", "UX Design", "UI Design", "Scheduling"]
    },

    eventin: {
        number: "002", category: "Portfolio", title: "Event management", sidebarEyebrow: "SaaS Platform",
        sidebar: [
            { label: "Category", value: "Event Management" },
            { label: "Product", value: "Eventin" },
            { label: "Live View", value: "Visit Now" }
        ],
        services: ["Attendee Management", "Payment Management", "Event Organizer"],
        overview: "Eventin is a WordPress event management plugin that helps businesses create events, manage registrations, sell tickets, and organize in-person, virtual, and hybrid events from one platform.",
        goal: "Improve the Eventin user experience by simplifying event management workflows, making features easier to understand, and creating a more consistent experience across the product.",
        overviewGallery: [
            { label: "Eventin product interface preview", ratio: "landscape" },
            { label: "Eventin event management workflow", ratio: "landscape" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "Event organizers need a reliable way to create events, manage registrations, sell tickets, and coordinate event details. When these workflows are difficult to understand, users may need extra time to complete tasks or rely on external tools.",
            context: "", challengeTitle: "Key UX Challenges:",
            challenges: [
                "Making event creation and setup easier to navigate.",
                "Helping users understand available features and settings.",
                "Improving the clarity of ticketing and registration workflows.",
                "Creating a consistent experience across different product features.",
                "Communicating product value more clearly to potential customers."
            ],
            discoveryTitle: "Research and Discovery:",
            discovery: "I reviewed the existing product experience, evaluated key user journeys, and identified opportunities to improve interface clarity and usability.",
            discoveryDetail: "", evidence: "[Add actual user feedback, support-ticket patterns, analytics, usability findings, or competitor insights.]"
        },
        researchGallery: [
            { label: "Eventin research visual 1", ratio: "small" },
            { label: "Eventin research visual 2", ratio: "small" },
            { label: "Eventin research visual 3", ratio: "small" },
            { label: "Eventin research board", ratio: "wide" }
        ],
        process: { heading: "Design process", items: [
            { title: "Mapping User Flows", body: "I mapped key user journeys to understand how users move through event creation, configuration, registration, and ticket management." },
            { title: "Exploring Interface Solutions:", body: "I explored interface layouts and interaction patterns to make complex settings easier to understand and important actions easier to find." },
            { title: "Building Consistent UI Patterns:", body: "I worked on reusable interface components and consistent design patterns to improve visual consistency and support future product development." },
            { title: "Refining Through Feedback:", body: "I reviewed design concepts, incorporated stakeholder and team feedback, and refined the interfaces based on product requirements and usability considerations." }
        ] },
        processGallery: [
            { label: "User flow and interface exploration 1", ratio: "landscape" },
            { label: "User flow and interface exploration 2", ratio: "landscape" },
            { label: "Design process overview", ratio: "wide" },
            { label: "Interface refinement 1", ratio: "landscape" },
            { label: "Interface refinement 2", ratio: "landscape" }
        ],
        solution: { heading: "Final solution", body: "The design direction focused on making Eventin easier to navigate and helping users complete essential event management tasks with greater clarity.", intro: "Key Design Improvements:", improvements: [
            { title: "Simplified Event Management", body: "Organized event information and configuration options to make key workflows easier to follow." },
            { title: "Clearer Interface Hierarchy", body: "Improved the presentation of information, actions, and settings to help users understand what to do next." },
            { title: "Consistent Design Patterns", body: "Applied consistent interface patterns to create a more cohesive experience across product features." },
            { title: "More Effective Product Communication", body: "Refined UX copy and marketing content to explain product capabilities and benefits more clearly." },
            { title: "Responsive and Practical Interfaces", body: "Considered different screen sizes and real-world usage needs when designing relevant interfaces." }
        ] },
        solutionGallery: [
            { label: "Eventin final product interface", ratio: "wide" },
            { label: "Eventin final interface detail 1", ratio: "landscape" },
            { label: "Eventin final interface detail 2", ratio: "landscape" }
        ],
        results: { heading: "Results and learning", introTitle: "Results:", body: "The design work aimed to improve product usability, clarify important workflows, and make Eventin’s features easier to understand.", outcomesTitle: "Verified outcomes to add:", outcomes: [
            "Usability improvements: [Add testing results, if available.]",
            "Workflow efficiency: [Add measured changes, if available.]",
            "User feedback: [Add verified feedback.]",
            "Business impact: [Add conversion, adoption, or engagement metrics, if available.]"
        ], learningTitle: "Key Learnings:", learning: "The project reinforced the importance of understanding user needs before refining interfaces, balancing feature flexibility with simplicity, and maintaining consistency as a product grows." },
        tags: ["Event Registration", "Ticket Management", "Event Scheduling", "Event Calendar", "Product Design"]
    }

,

    wpcafe: {
        number: "002",
        category: "Portfolio",
        title: "Restaurant Operations",
        sidebarEyebrow: "SaaS Platform",
        sidebar: [
            { label: "Category", value: "Restaurant Operations" },
            { label: "Product", value: "WPCafe" },
            { label: "Live View", value: "Visit Now" }
        ],
        services: [
            "Restaurant Management",
            "QR Code Ordering",
            "Restaurant Automation"
        ],
        overview: "WPCafe is a WordPress restaurant management plugin that helps restaurant owners manage food menus, online orders, table reservations, pickup, and delivery from one platform. It simplifies restaurant operations by bringing essential restaurant services together in a single solution.",
        goal: "Improve the WPCafe user experience by simplifying restaurant management workflows, making essential features easier to discover, and creating a more intuitive experience for managing menus, orders, reservations, and daily restaurant operations.",
        overviewGallery: [
            { label: "WPCafe restaurant management interface preview", ratio: "landscape" },
            { label: "WPCafe ordering and reservation workflow", ratio: "landscape" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "Restaurant owners often manage menus, customer orders, table reservations, and delivery operations across multiple tools. Managing these activities separately can create unnecessary complexity, increase manual work, and make daily operations harder to coordinate. WPCafe aims to bring these essential workflows together within WordPress.",
            context: "",
            challengeTitle: "Key UX Challenges:",
            challenges: [
                "Making restaurant setup and menu management easier to navigate.",
                "Simplifying food ordering and checkout workflows.",
                "Helping restaurant owners manage table reservations efficiently.",
                "Making pickup, delivery, and dine-in options easier to configure.",
                "Improving the visibility of orders and reservation information.",
                "Creating a consistent experience across different restaurant management features."
            ],
            discoveryTitle: "Research and Discovery:",
            discovery: "I reviewed the existing product experience, evaluated key restaurant management workflows, and identified opportunities to improve usability, interface clarity, and feature discoverability.",
            discoveryDetail: "The research focused on understanding how restaurant owners manage their daily operations and how WPCafe could make those processes simpler.",
            evidence: "[Add actual user feedback, support-ticket patterns, analytics, usability findings, or competitor insights.]"
        },
        researchGallery: [
            { label: "WPCafe research visual 1", ratio: "small" },
            { label: "WPCafe research visual 2", ratio: "small" },
            { label: "WPCafe research visual 3", ratio: "small" },
            { label: "WPCafe research board", ratio: "wide" }
        ],
        process: {
            heading: "Design process",
            items: [
                {
                    title: "Mapping User Flows",
                    body: "I mapped key user journeys to understand how restaurant owners configure menus, receive orders, manage reservations, and handle different service options, including pickup and delivery."
                },
                {
                    title: "Exploring Interface Solutions:",
                    body: "I explored interface layouts and interaction patterns to make restaurant management features easier to understand, reduce unnecessary steps, and help users find important actions quickly."
                },
                {
                    title: "Building Consistent UI Patterns:",
                    body: "I worked on reusable interface components and consistent design patterns to create a cohesive experience across menu management, ordering, reservations, and other restaurant features."
                },
                {
                    title: "Refining Through Feedback:",
                    body: "I reviewed design concepts, incorporated stakeholder and team feedback, and refined the interfaces based on product requirements, usability considerations, and real-world restaurant workflows."
                }
            ]
        },
        processGallery: [
            { label: "WPCafe user flow and interface exploration 1", ratio: "landscape" },
            { label: "WPCafe user flow and interface exploration 2", ratio: "landscape" },
            { label: "WPCafe design process overview", ratio: "wide" },
            { label: "WPCafe interface refinement 1", ratio: "landscape" },
            { label: "WPCafe interface refinement 2", ratio: "landscape" }
        ],
        solution: {
            heading: "Final solution",
            body: "The design direction focused on making WPCafe easier to use by simplifying restaurant workflows and helping restaurant owners manage essential operations from one place.",
            intro: "Key Design Improvements:",
            improvements: [
                {
                    title: "Simplified Menu Management",
                    body: "Improved the organization of menu information, food categories, pricing, and item options to make menu creation and management easier."
                },
                {
                    title: "Streamlined Online Ordering",
                    body: "Focused on making food selection, customization, and checkout more intuitive for customers while simplifying order management for restaurant owners."
                },
                {
                    title: "Easier Table Reservations",
                    body: "Improved reservation workflows to help customers select their preferred date, time, and party size while making reservation management clearer for restaurant owners."
                },
                {
                    title: "Flexible Pickup and Delivery",
                    body: "Made service options easier to understand and configure so restaurant owners can support different fulfillment workflows."
                },
                {
                    title: "Consistent Interface Experience",
                    body: "Applied consistent design patterns, visual hierarchy, and interaction behaviors to create a more cohesive experience across WPCafe features."
                }
            ]
        },
        solutionGallery: [
            { label: "WPCafe final product interface", ratio: "wide" },
            { label: "WPCafe final interface detail 1", ratio: "landscape" },
            { label: "WPCafe final interface detail 2", ratio: "landscape" }
        ],
        results: {
            heading: "Results and learning",
            introTitle: "Results:",
            body: "The design work aimed to improve the overall restaurant management experience, simplify essential workflows, and make WPCafe’s features easier to understand and use.",
            outcomesTitle: "Verified outcomes to add:",
            outcomes: [
                "Usability Improvements: [Add testing results, if available.]",
                "Workflow Efficiency: [Add measured improvements in order or reservation management.]",
                "User Feedback: [Add verified feedback from restaurant owners or users.]",
                "Business Impact: [Add conversion, adoption, or engagement metrics, if available.]"
            ],
            learningTitle: "Key Learnings:",
            learning: "This project reinforced the importance of designing around real business workflows rather than individual features. Restaurant management involves multiple connected activities, so creating a simple and consistent experience requires understanding how menus, orders, reservations, and service operations work together."
        },
        tags: [
            "Online Ordering",
            "Table Reservations",
            "Order Management",
            "Food Delivery",
            "UI/UX Design"
        ]
    }

,

    pointics: {
        number: "002",
        category: "Portfolio",
        title: "point & reward system",
        sidebarEyebrow: "SaaS Platform",
        sidebar: [
            { label: "Category", value: "Points & Rewards Plugin" },
            { label: "Product", value: "Pointics" },
            { label: "Live View", value: "Visit Now" }
        ],
        services: [
            "Membership Management",
            "Referral Program",
            "Gamification"
        ],
        overview: "Pointics is a WordPress points and rewards plugin designed to help businesses build customer loyalty, encourage repeat purchases, and increase engagement through flexible reward programs. It helps businesses reward customer actions and create more meaningful relationships with their customers.",
        goal: "Improve the Pointics user experience by simplifying loyalty program setup, making reward rules easier to configure, and helping businesses manage points and rewards through a clear and consistent interface.",
        overviewGallery: [
            { label: "Pointics product interface preview", ratio: "landscape" },
            { label: "Pointics loyalty program interface preview", ratio: "landscape" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "Businesses need effective ways to encourage repeat purchases, retain customers, and build long-term loyalty. However, configuring reward programs, managing points, and communicating reward benefits can become complicated without a clear and structured system",
            context: "Pointics aims to simplify these processes by bringing points, rewards, and customer loyalty management into the WordPress ecosystem.",
            challengeTitle: "Key UX Challenges:",
            challenges: [
                "Making loyalty program setup and configuration easier to understand.",
                "Simplifying point-earning rules and reward conditions.",
                "Helping businesses manage customer points and redemption activities.",
                "Making reward program settings easier to navigate.",
                "Improving visibility into customer loyalty activities.",
                "Creating a consistent experience across different loyalty management features."
            ],
            discoveryTitle: "Research and Discovery:",
            discovery: "I reviewed the product requirements, explored the expected loyalty management workflows, and identified opportunities to improve interface clarity, usability, and feature discoverability.",
            discoveryDetail: "The discovery process focused on understanding how businesses configure reward programs, manage customer points, and encourage repeat engagement.",
            evidence: "[Add actual user feedback, support-ticket patterns, analytics, usability findings, or competitor insights.]"
        },
        researchGallery: [
            { label: "Pointics research visual 1", ratio: "small" },
            { label: "Pointics research visual 2", ratio: "small" },
            { label: "Pointics research visual 3", ratio: "small" },
            { label: "Pointics research board", ratio: "wide" }
        ],
        process: {
            heading: "Design process",
            items: [
                {
                    title: "Mapping User Flows",
                    body: "I mapped key user journeys to understand how businesses configure loyalty programs, define point-earning rules, manage customer rewards, and support point redemption."
                },
                {
                    title: "Exploring Interface Solutions:",
                    body: "I explored interface layouts and interaction patterns to make reward settings easier to understand, simplify configuration steps, and help users access important loyalty management actions."
                },
                {
                    title: "Building Consistent UI Patterns:",
                    body: "I worked on reusable interface components and consistent design patterns to improve visual consistency across loyalty settings, point management, and reward-related workflows."
                },
                {
                    title: "Refining Through Feedback:",
                    body: "I reviewed design concepts, incorporated stakeholder and team feedback, and refined the interfaces based on product requirements, usability considerations, and business needs."
                }
            ]
        },
        processGallery: [
            { label: "Pointics user flow and interface exploration 1", ratio: "landscape" },
            { label: "Pointics user flow and interface exploration 2", ratio: "landscape" },
            { label: "Pointics design process overview", ratio: "wide" },
            { label: "Pointics interface refinement 1", ratio: "landscape" },
            { label: "Pointics interface refinement 2", ratio: "landscape" }
        ],
        solution: {
            heading: "Final solution",
            body: "The design direction focused on making Pointics easier to navigate and helping businesses create, manage, and maintain customer loyalty programs with greater clarity.",
            intro: "Key Design Improvements:",
            improvements: [
                {
                    title: "Simplified Loyalty Program Setup",
                    body: "Organized program settings and configuration options to help businesses establish their loyalty programs more easily."
                },
                {
                    title: "Flexible Points and Rewards Configuration",
                    body: "Focused on making point-earning rules, reward conditions, and redemption options easier to understand and manage"
                },
                {
                    title: "Clearer Customer Points Management",
                    body: "Designed a more structured approach to viewing and managing customer points, helping businesses understand loyalty activities."
                },
                {
                    title: "Intuitive Reward Management",
                    body: "Improved the organization of reward-related settings and actions to make loyalty program management more straightforward."
                },
                {
                    title: "Scalable Product Experience",
                    body: "Considered reusable components and flexible interface patterns to support future loyalty features and integrations across the WordPress ecosystem."
                }
            ]
        },
        solutionGallery: [
            { label: "Pointics final product interface", ratio: "wide" },
            { label: "Pointics final interface detail 1", ratio: "landscape" },
            { label: "Pointics final interface detail 2", ratio: "landscape" }
        ],
        results: {
            heading: "Results and learning",
            introTitle: "Results:",
            body: "The design work aimed to simplify loyalty program management, improve the clarity of reward configuration, and make Pointics easier for businesses to use.",
            outcomesTitle: "Verified outcomes to add:",
            outcomes: [
                "Usability Improvements: [Add testing results, if available.]",
                "Configuration Efficiency: [Add measured changes in loyalty program setup time, if available.]",
                "User Feedback: [Add verified feedback from business owners or users.]",
                "Business Impact: [Add verified customer retention, repeat purchase, adoption, or engagement metrics, if available.]"
            ],
            learningTitle: "Key Learnings:",
            learning: "This project reinforced the importance of making complex business rules understandable through clear interface design. Loyalty products need to balance configuration flexibility with simplicity so businesses can create reward programs without unnecessary complexity."
        },
        tags: [
            "Loyalty Program",
            "Customer Retention",
            "Customer Engagement",
            "Points & Rewards",
            "Product Design"
        ]
    },


    eventinOptimization: {
        number: "002",
        category: "Portfolio",
        title: "UX, SEO & Conversion Optimization",
        sidebarEyebrow: "SaaS Platform",
        sidebar: [
            { label: "Category", value: "Landing Page Optimization" },
            { label: "Product", value: "Eventin" },
            { label: "Live View", value: "Visit Now" }
        ],
        services: ["Landing Page UX", "UX Copy", "SEO, CRO, AEO, GEO"],
        overview: "Improve the Eventin landing page experience by clarifying its value proposition, simplifying product discovery, strengthening trust, and helping potential customers move confidently from product research to free installation or a paid plan.",
        goal: "Develop an evidence-based landing page optimization strategy that connects business objectives with user needs, search visibility, and conversion performance. The goal is to make Eventin’s value proposition clearer, improve product discoverability, strengthen trust, and create a smoother journey from initial discovery to free installation or paid subscription.",
        overviewGallery: [
            { label: "Eventin landing page audit visual 1", ratio: "landscape" },
            { label: "Eventin landing page audit visual 2", ratio: "landscape" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "A feature-rich product landing page needs to communicate more than just product capabilities. Visitors need to understand how the product solves their problems, which features are relevant to their needs, and why they should choose it over alternatives. When information architecture, messaging, pricing, and conversion paths are unclear, potential customers may struggle to make decisions or leave without taking action.",
            challengeTitle: "Key UX and Marketing Challenges:",
            challenges: [
                "Communicating Eventin’s core value proposition and competitive advantages.",
                "Organizing extensive product features into a clear, benefit-driven content hierarchy.",
                "Helping visitors understand the difference between free and paid features.",
                "Making pricing plans and product comparisons easier to evaluate.",
                "Identifying relevant keywords, search intent, and competitor content gaps.",
                "Improving CTA visibility and reducing friction across conversion journeys.",
                "Strengthening organic search visibility and AI-assisted content discoverability.",
                "Using behavioral analytics and performance data to identify optimization opportunities."
            ],
            discoveryTitle: "Research Tools & Data Sources:",
            tools: [
                { title: "Microsoft Clarity", body: "Analyze heatmaps, scroll behavior, session recordings, click patterns, and potential user friction to understand how visitors interact with the landing page." },
                { title: "Google Search Console", body: "Evaluate search queries, impressions, clicks, CTR, indexing status, and keyword opportunities to identify organic search performance gaps." },
                { title: "Google Analytics 4", body: "Understand traffic sources, visitor behavior, CTA interactions, and conversion journeys to identify opportunities for improving engagement and conversion." },
                { title: "Competitor Research", body: "Review competing event management products, landing page structures, feature communication, pricing strategies, and content approaches to identify market opportunities." },
                { title: "SEO & Search Intent Research", body: "Identify relevant keywords, search intent, content gaps, and opportunities to improve topical relevance and organic discoverability." }
            ],
            evidence: "These tools represent the research and measurement framework. Include actual findings only where data access, tracking, and analysis have been completed."
        },
        researchGallery: [
            { label: "Landing page research visual 1", ratio: "small" },
            { label: "Search and analytics research visual", ratio: "small" },
            { label: "Competitor research visual", ratio: "small" },
            { label: "Research and content strategy board", ratio: "wide" }
        ],
        process: {
            heading: "Design process",
            items: [
                { title: "UX Audit & Journey Mapping", body: "I evaluated the existing landing page structure and mapped key visitor journeys, from discovering Eventin to exploring features, comparing plans, and choosing a conversion action. I focused on identifying unnecessary complexity, unclear messaging, navigation issues, and opportunities to improve the overall experience." },
                { title: "Information Architecture & Content Strategy", body: "I explored how product information could be organized into a more meaningful content hierarchy. The focus was on presenting product capabilities through user benefits, improving feature discoverability, and helping visitors understand how Eventin supports their event management needs." },
                { title: "SEO & Search Intent Optimization", body: "I evaluated keyword opportunities, search intent, content relevance, and competitor positioning to develop a more search-friendly content structure. The strategy also considered AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) to make product information more accessible, understandable, and useful across traditional search engines and AI-powered discovery experiences." },
                { title: "Conversion-Focused Design", body: "I explored CTA placement, messaging, pricing presentation, trust signals, and conversion paths to help visitors move more confidently toward free installation, product exploration, or paid plans." },
                { title: "Data-Driven Refinement", body: "I considered behavioral analytics, search performance, technical SEO, and page experience metrics to identify opportunities for continuous optimization. The objective was to prioritize improvements based on user impact, business value, confidence, and implementation effort." }
            ]
        },
        processGallery: [
            { label: "UX audit and journey mapping", ratio: "landscape" },
            { label: "Information architecture and content strategy", ratio: "landscape" },
            { label: "SEO and conversion optimization workflow", ratio: "wide" },
            { label: "Landing page content exploration", ratio: "landscape" },
            { label: "Optimization refinement visual", ratio: "landscape" }
        ],
        solution: {
            heading: "Final solution",
            body: "The optimization direction focused on creating a clearer, more discoverable, and conversion-oriented landing page experience for Eventin. The solution connects user experience, product messaging, search visibility, and business objectives into a unified optimization strategy.",
            intro: "Key Design Improvements:",
            improvements: [
                { title: "Clearer Value Proposition", body: "Refined the messaging and content hierarchy to communicate what Eventin does, who it serves, and how it simplifies event management." },
                { title: "Improved Information Architecture", body: "Organized product features, benefits, integrations, and use cases into a more structured content experience, helping visitors find relevant information more easily." },
                { title: "Feature-Focused Product Communication", body: "Presented product capabilities through clear, benefit-driven messaging to help potential customers understand the value of individual features and the overall product." },
                { title: "Conversion-Focused CTA Strategy", body: "Reviewed CTA placement, labels, visibility, and conversion paths to make important actions easier to discover and reduce unnecessary decision friction." },
                { title: "Pricing & Plan Clarity", body: "Focused on improving the presentation of free and premium plans, feature comparisons, and pricing information to help visitors make informed decisions." },
                { title: "SEO & Content Optimization", body: "Developed a content optimization direction around relevant keywords, search intent, semantic relevance, and structured product information to support organic search visibility." },
                { title: "AEO & GEO Optimization", body: "Focused on clearer answers, relevant questions, structured explanations, and trustworthy product information to improve the potential discoverability of Eventin across answer engines and generative AI platforms." },
                { title: "Trust & Social Proof", body: "Identified opportunities to strengthen credibility through customer testimonials, product ratings, active installations, integrations, use cases, and other verifiable trust signals." },
                { title: "Responsive & Performance Optimization", body: "Considered mobile usability, content readability, accessibility, page speed, and Core Web Vitals as important parts of the overall landing page experience." },
                { title: "AI Search Visibility", body: "Explored opportunities to improve Eventin’s presence in AI-generated answers through useful content, clear product explanations, relevant brand information, and authoritative references." }
            ]
        },
        solutionGallery: [
            { label: "Eventin optimized landing page direction", ratio: "wide" },
            { label: "Content and conversion design detail 1", ratio: "landscape" },
            { label: "Content and conversion design detail 2", ratio: "landscape" }
        ],
        results: {
            heading: "Results and learning",
            introTitle: "Results & Performance Measurement:",
            body: "The optimization work establishes a measurement framework for evaluating the landing page experience across usability, conversion behavior, organic search, AI-assisted discovery, product messaging, and technical performance. No performance uplift or conversion result is claimed without verified analytics data.",
            outcomesTitle: "Key Areas & Metrics to Monitor:",
            outcomes: [
                "Landing Page UX Audit — Evaluate information hierarchy, navigation, content readability, CTA placement, mobile usability, and overall visitor experience.",
                "Conversion Rate Optimization (CRO) — Monitor free downloads, pricing page visits, demo requests, CTA click-through rates, and conversion funnel performance.",
                "Behavioral Analysis — Use Microsoft Clarity and other analytics tools to investigate click behavior, scroll depth, engagement, hesitation, and potential interaction friction.",
                "SEO Performance — Monitor organic clicks, impressions, CTR, keyword rankings, search intent coverage, and indexed pages through Google Search Console and relevant SEO tools.",
                "AEO & GEO Optimization — Evaluate content clarity, question coverage, direct answers, structured information, source credibility, and opportunities for discovery through AI-powered search experiences.",
                "Product Messaging & Content Strategy — Evaluate how effectively landing page content communicates product benefits, differentiators, use cases, and customer value.",
                "AI Search Visibility — Explore brand mentions, product references, and citations in relevant AI-generated answers using available AI visibility monitoring tools.",
                "Technical Performance Audit — Evaluate page speed, Core Web Vitals, responsive behavior, accessibility, and technical SEO issues that may affect the visitor experience.",
                "Optimization Roadmap — Prioritize opportunities based on user impact, business value, confidence, and implementation effort to create a structured continuous improvement process."
            ],
            learningTitle: "Key Learnings:",
            learning: "This project reinforced that a successful product landing page requires more than attractive visuals and compelling copy. UX, SEO, and conversion optimization need to work together. Clear information architecture helps users understand the product, search-focused content improves discoverability, and conversion-focused design helps visitors take meaningful actions. It also highlighted the importance of using behavioral and search data to support design decisions rather than relying entirely on assumptions."
        },
        tags: ["Landing Page UX", "SEO", "CRO", "AEO", "GEO", "Product Design"]
    },

    socialFitness: {
        number: "002",
        category: "Portfolio",
        title: "Everyone's Social Home Training",
        sidebarEyebrow: "SaaS Platform",
        sidebar: [
            { label: "Category", value: "Connected Fitness" },
            { label: "Product", value: "Finutss" },
            { label: "Live View", value: "Visit Now" }
        ],
        services: [
            "Fitness App Design",
            "Mobile App Design",
            "Connected Fitness"
        ],
        overview: "Finutss is a fitness application that brings virtual outdoor experiences to indoor workouts. Using real geographic information, the app allows users to explore virtual exercise routes while tracking their workout activities through connected fitness equipment. Beyond fitness tracking, Finutss creates a social workout environment where users can exercise together, chat in real time, make friends, and participate in shared challenges.",
        goal: "Create an engaging indoor fitness experience by connecting exercise equipment with virtual workout environments. The goal was to make home workouts more interactive, motivating, and enjoyable through virtual routes, real-time social features, and seamless Bluetooth connectivity.",
        overviewGallery: [
            { label: "Finutss project overview visual 1", ratio: "landscape" },
            { label: "Finutss project overview visual 2", ratio: "landscape" }
        ],
        research: {
            introTitle: "Understanding the Problem:",
            intro: "Indoor workouts can often feel repetitive and isolated. Unlike outdoor exercise, users have limited opportunities to explore new environments, interact with others, or experience a sense of shared activity. Traditional indoor fitness equipment also provides limited engagement beyond basic workout tracking. Finutss addresses these challenges by combining connected fitness technology, virtual geographic routes, and social interaction in one mobile application.",
            challengeTitle: "Key UX Challenges:",
            challenges: [
                "Making Bluetooth sensor connectivity simple and reliable.",
                "Creating an engaging virtual workout experience using real geographic information.",
                "Helping users explore different exercise routes and locations.",
                "Supporting real-time communication and social interaction during workouts.",
                "Making workout activities and progress easier to understand.",
                "Managing multiple media elements throughout virtual exercise routes.",
                "Creating a seamless experience across connected indoor bikes and treadmills."
            ],
            discoveryTitle: "Research and Discovery:",
            discovery: "I explored the product requirements, fitness equipment connectivity, and expected user journeys to understand how users interact with the application during setup and workouts.",
            discoveryDetail: "The discovery process focused on identifying opportunities to make equipment connection easier, improve workout navigation, and create a more engaging experience through virtual environments and social features.",
            evidence: "[Add actual user feedback, support-ticket patterns, analytics, usability findings, or competitor insights.]"
        },
        researchGallery: [
            { label: "Finutss research visual 1", ratio: "small" },
            { label: "Finutss research visual 2", ratio: "small" },
            { label: "Finutss research visual 3", ratio: "small" },
            { label: "Finutss research board", ratio: "wide" }
        ],
        process: {
            heading: "Design process",
            items: [
                {
                    title: "Mapping User Flows",
                    body: "I mapped key user journeys to understand how users connect their fitness equipment, configure Bluetooth sensors, explore virtual routes, start workouts, and interact with other users."
                },
                {
                    title: "Exploring Interface Solutions:",
                    body: "I explored mobile interface layouts and interaction patterns to create an intuitive workout experience. Special attention was given to route exploration, workout information, equipment connectivity, and real-time social interactions."
                },
                {
                    title: "Designing Interactive Experiences:",
                    body: "I focused on creating clear visual feedback and intuitive interactions for connected equipment, virtual workout environments, and social activities. The goal was to make the experience engaging without distracting users from their workouts."
                },
                {
                    title: "Refining Through Feedback:",
                    body: "I reviewed design concepts, collaborated with developers, and refined interface decisions based on technical requirements and implementation feedback. Particular attention was given to sensor connectivity, media synchronization, and Flutter integration limitations."
                }
            ]
        },
        processGallery: [
            { label: "Finutss user flow and interface exploration 1", ratio: "landscape" },
            { label: "Finutss user flow and interface exploration 2", ratio: "landscape" },
            { label: "Finutss design process overview", ratio: "wide" },
            { label: "Finutss interface refinement 1", ratio: "landscape" },
            { label: "Finutss interface refinement 2", ratio: "landscape" }
        ],
        solution: {
            heading: "Final solution",
            body: "The final design direction focused on transforming traditional indoor workouts into an interactive fitness experience where users could explore virtual environments, track activities, and connect with others.",
            intro: "Key Design Improvements:",
            improvements: [
                {
                    title: "Connected Fitness Experience",
                    body: "Designed a straightforward equipment connection experience to help users connect Bluetooth sensors to indoor bikes and treadmills and get started with their workouts."
                },
                {
                    title: "Virtual Route Exploration",
                    body: "Focused on presenting real geographic routes in an engaging way, allowing users to discover different locations and experience more variety during indoor workouts."
                },
                {
                    title: "Interactive Workout Experience",
                    body: "Designed workout interfaces that bring exercise activities and virtual route experiences together, helping users stay engaged throughout their sessions."
                },
                {
                    title: "Real-Time Social Interaction",
                    body: "Focused on making social features accessible during workouts so users can chat, connect with friends, and exercise together."
                },
                {
                    title: "Community and Fitness Challenges",
                    body: "Supported social engagement through shared workout experiences, friendly competition, and collaborative challenges that encourage users to stay motivated."
                }
            ]
        },
        solutionGallery: [
            { label: "Finutss final product interface", ratio: "wide" },
            { label: "Finutss final interface detail 1", ratio: "landscape" },
            { label: "Finutss final interface detail 2", ratio: "landscape" }
        ],
        results: {
            heading: "Results and learning",
            introTitle: "Results:",
            body: "Finutss brings connected fitness, virtual route exploration, and social interaction together to create a more engaging home workout experience. The development team also addressed several technical challenges during implementation, including Bluetooth sensor testing, Flutter and JavaScript library integration, multiple API calls, and synchronized media elements along exercise routes. Dedicated testing and close collaboration between designers and developers helped address these implementation challenges and support a more reliable product experience.",
            outcomesTitle: "Verified outcomes to add:",
            outcomes: [
                "Connectivity Reliability: [Add verified Bluetooth sensor testing results.]",
                "Workout Engagement: [Add workout frequency, session duration, or engagement metrics.]",
                "Social Interaction: [Add verified community participation or interaction metrics.]",
                "User Feedback: [Add feedback from actual users.]",
                "Technical Performance: [Add verified performance or stability improvements.]"
            ],
            learningTitle: "Key Learnings:",
            learning: "This project reinforced the importance of designing beyond traditional mobile interfaces. Connected fitness products require a strong understanding of hardware interactions, real-time data, and user behavior during physical activities. It also highlighted the importance of close collaboration between design and development teams when working with Bluetooth sensors, third-party libraries, APIs, and interactive media experiences."
        },
        tags: [
            "Virtual Workout",
            "Social Fitness",
            "Connected Fitness",
            "Product Design",
            "UI/UX Design"
        ]
    }

};
