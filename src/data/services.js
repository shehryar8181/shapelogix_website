const PAIN_IMAGES = [
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(4).png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%209.png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%2010.png",
];

const OUTCOME_IMAGES = [
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(5).png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(8).png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(9).png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(6).png",
    "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(7).png",
];

const sharedExpertiseCta = {
    heading: "Good ideas deserve deeper exploration.",
    note: "Fresh ideas published regularly",
    buttonLabel: "Discuss your project",
};

const sharedOutcomesMeta = {
    eyebrow: "// Client's Solutions",
    titleBefore: "What outcomes you'll gain from ",
    titleHighlight: "Shapelogix",
    cta: {
        title: "Get in touch",
        buttonLabel: "Book free consultation",
    },
};

function buildPain(description, challenges) {
    return {
        eyebrow: "// Client's pain",
        title: "Are you facing these challenges",
        description,
        challenges: challenges.map((challenge, index) => ({
            number: String(index + 1).padStart(2, "0"),
            ...challenge,
            image: PAIN_IMAGES[index],
        })),
    };
}

function buildStages(title, description, items) {
    return {
        eyebrow: "// Shapelogix's support",
        title,
        description,
        items: items.map((item, index) => ({
            stage: `Stage ${String(index + 1).padStart(2, "0")}`,
            ...item,
        })),
    };
}

function buildOutcomes(items) {
    return {
        ...sharedOutcomesMeta,
        items: items.map((item, index) => ({
            label: `Outcome ${String(index + 1).padStart(2, "0")}`,
            ...item,
            image: OUTCOME_IMAGES[index],
        })),
    };
}

const serviceDetailsBase = [
    {
        slug: "ai-software-development",
        label: "AI Software Development",
        hero: {
            eyebrow: "// Services",
            title: "AI Software Development Built for Impact.",
            highlight: "AI Software",
            description:
                "We design and ship AI-powered systems that fit real workflows, improve decision quality, and deliver measurable outcomes without unnecessary complexity.",
        },
        pain: buildPain(
            "AI initiatives often stall when strategy, data readiness, and delivery systems are misaligned from the start.",
            [
                {
                    title: "Unclear AI priorities",
                    description:
                        "Teams experiment in silos without a shared view of where AI creates real business leverage.",
                },
                {
                    title: "Prototypes that never ship",
                    description:
                        "Promising demos fail in production because feasibility, data quality, and ownership were never validated.",
                },
                {
                    title: "Low adoption after launch",
                    description:
                        "Users distrust or ignore AI features when workflows, oversight, and experience design feel incomplete.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core AI expertise",
            items: [
                {
                    title: "AI opportunity mapping",
                    description:
                        "We identify where intelligence creates leverage across products, operations, and customer journeys before investment decisions are locked in.",
                },
                {
                    title: "Model & data strategy",
                    description:
                        "We align data readiness, model choices, and evaluation criteria so AI delivery stays practical, secure, and measurable.",
                },
                {
                    title: "AI product experiences",
                    description:
                        "We design interfaces and flows where AI assists clearly, keeps humans in control, and builds trust through transparent interactions.",
                },
                {
                    title: "Productionization & governance",
                    description:
                        "We help teams move from prototypes to reliable systems with monitoring, escalation paths, and responsible rollout practices.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core AI expertise",
            "Focusing on practical AI use cases, dependable delivery, and outcomes teams can measure and trust.",
            [
                {
                    title: "Define high-value use cases",
                    points: [
                        "Map business problems and operational bottlenecks where AI can create measurable lift",
                        "Prioritize opportunities by impact, feasibility, data readiness, and risk",
                        "Align stakeholders on success metrics before model or tooling decisions begin",
                    ],
                },
                {
                    title: "Validate with working systems",
                    points: [
                        "Pilot AI workflows against real data and real user constraints",
                        "Test accuracy, latency, and oversight needs under production-like conditions",
                        "Refine prompts, models, and interfaces based on early operational feedback",
                    ],
                },
                {
                    title: "Integrate into daily workflows",
                    points: [
                        "Embed AI into the tools and journeys people already use",
                        "Design escalation paths so humans stay accountable for high-stakes decisions",
                        "Instrument usage and quality signals to guide continuous improvement",
                    ],
                },
                {
                    title: "Scale with governance",
                    points: [
                        "Establish monitoring, evaluation, and rollback patterns for reliable operation",
                        "Document ownership, auditability, and secure data handling across teams",
                        "Expand successful pilots into broader product and process surfaces",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Faster path to applied AI",
                description:
                    "You move from broad AI ambition to a focused roadmap of use cases ready for validation and delivery.",
            },
            {
                title: "Lower experimentation waste",
                description:
                    "Early feasibility checks reduce spend on models and features that cannot survive real operating conditions.",
            },
            {
                title: "Higher decision quality",
                description:
                    "AI is applied where it improves clarity, speed, and judgment—not where automation creates noise.",
            },
            {
                title: "Safer production rollout",
                description:
                    "Governance, oversight, and monitoring are built in so launches stay controllable and auditable.",
            },
            {
                title: "Stronger long-term adoption",
                description:
                    "Experiences are designed for trust and workflow fit, so AI features get used instead of ignored.",
            },
        ]),
    },
    {
        slug: "product-development",
        label: "Product Development",
        hero: {
            eyebrow: "// Services",
            title: "Product Development Built for Scale.",
            highlight: "Product",
            description:
                "We design and build product foundations that turn strategy into shipping momentum across discovery, delivery, and continuous improvement.",
        },
        pain: buildPain(
            "Products lose momentum when discovery, delivery, and measurement run as disconnected efforts.",
            [
                {
                    title: "Roadmaps without focus",
                    description:
                        "Teams keep shipping features while the core problem and success criteria remain unclear.",
                },
                {
                    title: "Slow validated learning",
                    description:
                        "Releases move forward without enough evidence that customers will activate, retain, or expand.",
                },
                {
                    title: "Delivery that drifts",
                    description:
                        "Design, engineering, and product goals diverge, creating rework, delays, and inconsistent quality.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core product expertise",
            items: [
                {
                    title: "Product discovery & roadmap",
                    description:
                        "We clarify problems, prioritize opportunities, and shape a roadmap teams can execute with confidence.",
                },
                {
                    title: "MVP & iterative delivery",
                    description:
                        "We ship focused releases that validate assumptions quickly while protecting long-term architecture and UX quality.",
                },
                {
                    title: "Cross-functional product pods",
                    description:
                        "We embed design, engineering, and product thinking so collaboration stays tight and delivery stays consistent.",
                },
                {
                    title: "Growth & optimization loops",
                    description:
                        "We set up measurement and iteration loops so product decisions stay grounded in usage and outcomes.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core product expertise",
            "Focusing on clear problem framing, disciplined delivery, and iteration loops that compound over time.",
            [
                {
                    title: "Clarify the product bet",
                    points: [
                        "Define the customer problem, target segment, and intended business outcome",
                        "Pressure-test assumptions that shape scope, sequencing, and success metrics",
                        "Translate strategy into a focused near-term roadmap your team can execute",
                    ],
                },
                {
                    title: "Ship a sharp MVP",
                    points: [
                        "Build only what is needed to validate demand, usability, and value",
                        "Keep architecture and UX quality strong enough for future expansion",
                        "Create release plans that balance speed with operational readiness",
                    ],
                },
                {
                    title: "Tighten delivery systems",
                    points: [
                        "Align product, design, and engineering around shared definitions of done",
                        "Reduce handoff friction with clear ownership across discovery and build",
                        "Establish rituals that keep priorities current as evidence arrives",
                    ],
                },
                {
                    title: "Grow through measured iteration",
                    points: [
                        "Instrument activation, retention, and conversion signals from day one",
                        "Use insights to refine journeys, packaging, and product bets",
                        "Scale what works while cutting features that do not move outcomes",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Clearer product direction",
                description:
                    "Teams share one view of the problem, priorities, and success criteria before major spend begins.",
            },
            {
                title: "Faster validated releases",
                description:
                    "MVPs and iterations ship quickly enough to learn without sacrificing product quality.",
            },
            {
                title: "Stronger cross-team alignment",
                description:
                    "Design, product, and engineering stay coordinated around the same customer and delivery goals.",
            },
            {
                title: "Better growth decisions",
                description:
                    "Roadmap choices are guided by usage evidence instead of opinion-driven feature lists.",
            },
            {
                title: "Sustainable delivery pace",
                description:
                    "Systems and rituals keep shipping predictable as the product and team mature.",
            },
        ]),
    },
    {
        slug: "application-development",
        label: "Application Development",
        hero: {
            eyebrow: "// Services",
            title: "Application Development Built for Reliability.",
            highlight: "Application",
            description:
                "We engineer modern applications that perform under pressure, integrate cleanly, and stay maintainable as your product grows.",
        },
        pain: buildPain(
            "Application delivery slows when architecture, integrations, and quality practices cannot keep up with change.",
            [
                {
                    title: "Fragile foundations",
                    description:
                        "Legacy structure and shortcuts make every new feature more expensive and less predictable.",
                },
                {
                    title: "Broken workflows across systems",
                    description:
                        "Poor integrations create manual work, data gaps, and reliability issues users feel immediately.",
                },
                {
                    title: "Hard-to-maintain codebases",
                    description:
                        "Teams struggle to ship safely when documentation, testing, and modularity fall behind growth.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core application expertise",
            items: [
                {
                    title: "Architecture & modernization",
                    description:
                        "We assess current systems and design architectures that support change without constant rewrites.",
                },
                {
                    title: "Web & mobile application build",
                    description:
                        "We deliver robust applications with clear modules, strong performance, and production-ready engineering practices.",
                },
                {
                    title: "Integrations & APIs",
                    description:
                        "We connect platforms and services reliably so workflows stay seamless across your product ecosystem.",
                },
                {
                    title: "Quality & maintainability",
                    description:
                        "We bake in testing, documentation, and delivery standards that keep teams shipping safely over time.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core application expertise",
            "Focusing on resilient architecture, clean delivery, and applications teams can extend without friction.",
            [
                {
                    title: "Assess and redesign foundations",
                    points: [
                        "Review current architecture, debt, and delivery bottlenecks",
                        "Define target modules, boundaries, and performance priorities",
                        "Sequence modernization so teams can keep shipping during transition",
                    ],
                },
                {
                    title: "Build production-ready applications",
                    points: [
                        "Implement web and mobile experiences with clear product and technical ownership",
                        "Establish coding standards, review, and documentation as part of delivery",
                        "Protect critical journeys with performance and reliability goals",
                    ],
                },
                {
                    title: "Connect the product ecosystem",
                    points: [
                        "Design APIs and integrations that stay stable as systems evolve",
                        "Reduce manual process gaps between tools, data, and customer workflows",
                        "Validate end-to-end reliability across the paths users rely on most",
                    ],
                },
                {
                    title: "Harden for long-term change",
                    points: [
                        "Add testing and monitoring that make future releases safer",
                        "Improve maintainability through modular design and clear ownership",
                        "Create handover practices that keep delivery continuity strong",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "More resilient architecture",
                description:
                    "Your application can evolve without every change triggering fragile dependencies and delay.",
            },
            {
                title: "Higher delivery confidence",
                description:
                    "Engineering standards, testing, and modularity make releases more predictable.",
            },
            {
                title: "Cleaner system connectivity",
                description:
                    "Integrations support smooth workflows instead of creating hidden operational overhead.",
            },
            {
                title: "Better performance under load",
                description:
                    "Critical paths are designed and validated for the reliability your users expect.",
            },
            {
                title: "Lower long-term maintenance cost",
                description:
                    "Teams spend less time fighting legacy friction and more time advancing the product.",
            },
        ]),
    },
    {
        slug: "prototype-development",
        label: "Prototype Development",
        hero: {
            eyebrow: "// Services",
            title: "Prototype Development Built for Clarity.",
            highlight: "Prototype",
            description:
                "We turn early ideas into testable prototypes that reduce risk, align stakeholders, and unlock faster go/no-go decisions.",
        },
        pain: buildPain(
            "Ideas lose support when teams debate concepts that nobody can see, test, or challenge in context.",
            [
                {
                    title: "Ambiguous product concepts",
                    description:
                        "Stakeholders interpret the same idea differently, creating conflicting feedback and delayed decisions.",
                },
                {
                    title: "Late discovery of risk",
                    description:
                        "Usability and feasibility issues appear only after expensive design or engineering work begins.",
                },
                {
                    title: "Weak validation loops",
                    description:
                        "Teams move forward without concrete customer reactions to flows, interactions, or value propositions.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core prototyping expertise",
            items: [
                {
                    title: "Concept exploration",
                    description:
                        "We rapidly shape multiple directions so teams can compare options before committing to a build path.",
                },
                {
                    title: "Interactive prototype craft",
                    description:
                        "We create clickable flows and realistic interactions that make customer and stakeholder feedback concrete.",
                },
                {
                    title: "Feasibility checks",
                    description:
                        "We pressure-test usability and technical constraints early to prevent expensive surprises later.",
                },
                {
                    title: "Handoff-ready concepts",
                    description:
                        "We prepare prototypes that transition cleanly into production design and engineering workstreams.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core prototyping expertise",
            "Focusing on fast concept clarity, realistic interaction, and decisions grounded in evidence.",
            [
                {
                    title: "Explore concept directions",
                    points: [
                        "Translate the product idea into clear user scenarios and value hypotheses",
                        "Produce multiple directions that surface trade-offs early",
                        "Align stakeholders around the problems each concept is meant to solve",
                    ],
                },
                {
                    title: "Build interactive prototypes",
                    points: [
                        "Create clickable journeys that feel close enough to real usage",
                        "Capture edge cases, empty states, and critical decision points",
                        "Make feedback sessions specific instead of abstract",
                    ],
                },
                {
                    title: "Validate usability and feasibility",
                    points: [
                        "Test prototypes with users and internal operators",
                        "Identify friction, comprehension gaps, and technical constraints",
                        "Refine the strongest direction before committing to full build",
                    ],
                },
                {
                    title: "Prepare for production handoff",
                    points: [
                        "Document flows, patterns, and interaction logic for design and engineering",
                        "Clarify what was validated versus what still needs discovery",
                        "Convert winning prototypes into a confident next-phase plan",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Faster concept alignment",
                description:
                    "Stakeholders react to something tangible, reducing ambiguity and debate cycles.",
            },
            {
                title: "Lower early-stage risk",
                description:
                    "Usability and feasibility issues are exposed before expensive implementation begins.",
            },
            {
                title: "Stronger go/no-go decisions",
                description:
                    "Teams gain clearer evidence on what deserves investment and what should stop.",
            },
            {
                title: "Better customer feedback quality",
                description:
                    "Interactive prototypes produce more specific reactions than static decks or long briefs.",
            },
            {
                title: "Smoother transition to build",
                description:
                    "Validated concepts move into production work with less reinterpretation and rework.",
            },
        ]),
    },
    {
        slug: "ui-ux",
        label: "UI/UX Designing",
        hero: {
            eyebrow: "// Services",
            title: "UI/UX Design Built for Speed.",
            highlight: "UI/UX",
            description:
                "We build user experiences that increase adoption across B2B and SaaS products, delivering measurable performance gains using strong information architecture, thoughtful interaction design, and modern responsive design.",
        },
        pain: buildPain(
            "Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security.",
            [
                {
                    title: "Low user engagement",
                    description:
                        "Users are not interacting with key features due to long, unclear, or inefficient workflows.",
                },
                {
                    title: "Low conversion",
                    description:
                        "Drop-offs happen during onboarding and key steps, reducing activation and overall product conversion.",
                },
                {
                    title: "Unclear user journeys",
                    description:
                        "Users struggle to navigate tasks because flows are fragmented, inconsistent or overly complex.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core UI/UX expertise",
            items: [
                {
                    title: "UX audit & usability testing",
                    description:
                        "We uncover friction, behaviour gaps and usability issues across your workflows to help you improve adoption and performance.",
                },
                {
                    title: "Design discovery & strategy",
                    description:
                        "We align user needs, product goals and stakeholder expectations to shape a clear, strategic design direction for B2B and SaaS products.",
                },
                {
                    title: "UI/UX design & intelligent experiences",
                    description:
                        "We craft intuitive interfaces, streamline journeys and build intelligent experiences that elevate user engagement across web and mobile.",
                },
                {
                    title: "Design system development",
                    description:
                        "We create scalable, reusable design systems that support consistency, faster delivery and long-term product evolution.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core UI/UX expertise",
            "Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security.",
            [
                {
                    title: "Build Your MVP",
                    points: [
                        "Conduct deep usability audits to identify friction, user drop-offs, and design debt",
                        "Modernize outdated interfaces with streamlined navigation and updated visual assets",
                        "Optimize key conversion funnels to measurably improve user retention and activation",
                    ],
                },
                {
                    title: "Refine Core Journeys",
                    points: [
                        "Map critical user paths and remove steps that add confusion without value",
                        "Improve onboarding, empty states, and feedback patterns for clarity",
                        "Align interaction models across web and mobile experiences",
                    ],
                },
                {
                    title: "Systematize Design",
                    points: [
                        "Establish reusable components, patterns, and content guidelines",
                        "Improve consistency so teams can design and ship faster",
                        "Reduce design debt through clear documentation and shared standards",
                    ],
                },
                {
                    title: "Scale With Confidence",
                    points: [
                        "Validate redesigned journeys through testing and analytics",
                        "Support rollout with measurable adoption and conversion goals",
                        "Create a continuous improvement loop for product experience quality",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Faster time to insight",
                description:
                    "Interactive prototypes and mapped user journeys delivered in weeks—not months—help you validate ideas early and pivot with confidence.",
            },
            {
                title: "Cost-efficient delivery",
                description:
                    "Offshore UX/UI talent can reduce design costs by 50-70% while maintaining high-quality output.",
            },
            {
                title: "Data-driven decisions",
                description:
                    "Every design choice is informed by research, analytics, testing, and real-user behaviour—not assumptions.",
            },
            {
                title: "Seamless cross-channel experiences",
                description:
                    "Mobile-first, responsive, and unified interfaces ensure a consistent user experience across all devices.",
            },
            {
                title: "Reduced usability risk",
                description:
                    "Early validation and rapid iteration minimize rework, prevent usability issues, and streamline rollout cycles.",
            },
        ]),
    },
    {
        slug: "quality-assurance",
        label: "Quality Assurance",
        hero: {
            eyebrow: "// Services",
            title: "Quality Assurance Built for Confidence.",
            highlight: "Quality",
            description:
                "We protect product quality with pragmatic testing systems that catch risk early and keep releases predictable.",
        },
        pain: buildPain(
            "Quality slips when testing is reactive, coverage is uneven, and release criteria stay informal.",
            [
                {
                    title: "Bugs found too late",
                    description:
                        "Critical issues appear only near release, forcing rushed fixes and delayed launches.",
                },
                {
                    title: "Inconsistent coverage",
                    description:
                        "Important journeys, devices, and edge cases are tested unevenly across teams and releases.",
                },
                {
                    title: "Unclear release readiness",
                    description:
                        "Stakeholders lack a shared definition of go-live quality, creating last-minute debate and risk.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core QA expertise",
            items: [
                {
                    title: "Test strategy & coverage",
                    description:
                        "We define what must be validated across journeys, devices, and risk areas so QA effort stays focused.",
                },
                {
                    title: "Manual exploratory testing",
                    description:
                        "We stress real user flows and edge cases to surface issues automation alone can miss.",
                },
                {
                    title: "Automation & regression",
                    description:
                        "We build stable automated suites that protect critical paths and support faster release cycles.",
                },
                {
                    title: "Release readiness",
                    description:
                        "We create clear go-live criteria, reports, and remediation loops so shipping stays confident.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core QA expertise",
            "Focusing on risk-based coverage, reliable feedback loops, and releases teams can trust.",
            [
                {
                    title: "Define quality strategy",
                    points: [
                        "Identify high-risk journeys, platforms, and product areas",
                        "Set coverage priorities based on business impact and failure cost",
                        "Align teams on pass/fail criteria before major testing begins",
                    ],
                },
                {
                    title: "Validate critical experiences",
                    points: [
                        "Run exploratory and scenario-based testing across real usage paths",
                        "Capture defects with enough context for fast remediation",
                        "Surface usability and reliability issues before customers do",
                    ],
                },
                {
                    title: "Automate what matters",
                    points: [
                        "Build regression suites around the flows that protect revenue and trust",
                        "Keep automation stable enough to support frequent releases",
                        "Reduce repetitive manual effort without losing exploratory depth",
                    ],
                },
                {
                    title: "Gate releases with clarity",
                    points: [
                        "Create go-live checklists and shared readiness reporting",
                        "Track defect trends so quality debt stays visible",
                        "Improve process continuously as product complexity grows",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Earlier defect detection",
                description:
                    "Issues are found when they are still inexpensive to fix and less disruptive to launch plans.",
            },
            {
                title: "More predictable releases",
                description:
                    "Shared readiness criteria reduce last-minute uncertainty around what is safe to ship.",
            },
            {
                title: "Stronger critical-path protection",
                description:
                    "The journeys that matter most stay covered through both manual and automated testing.",
            },
            {
                title: "Faster remediation cycles",
                description:
                    "Clear defect reporting and prioritization help teams resolve issues with less back-and-forth.",
            },
            {
                title: "Higher customer confidence",
                description:
                    "Fewer surprises reach production, protecting trust and long-term product reputation.",
            },
        ]),
    },
    {
        slug: "automated-delivery-devops",
        label: "Automated Delivery DevOps",
        hero: {
            eyebrow: "// Services",
            title: "DevOps Built for Continuous Delivery.",
            highlight: "DevOps",
            description:
                "We build delivery systems that ship often, stay observable, and reduce friction between development and operations.",
        },
        pain: buildPain(
            "Delivery slows when releases depend on manual steps, fragile environments, and limited operational visibility.",
            [
                {
                    title: "Slow release cycles",
                    description:
                        "Manual deployment steps and brittle pipelines turn every release into a high-effort event.",
                },
                {
                    title: "Inconsistent environments",
                    description:
                        "Differences between staging and production create defects that only appear after launch.",
                },
                {
                    title: "Limited operational insight",
                    description:
                        "Teams react late because monitoring, alerting, and ownership are incomplete.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core DevOps expertise",
            items: [
                {
                    title: "CI/CD pipeline design",
                    description:
                        "We streamline build, test, and release automation so teams can ship safely with less manual overhead.",
                },
                {
                    title: "Infrastructure as code",
                    description:
                        "We standardize environments and deployments so infrastructure stays versioned, repeatable, and auditable.",
                },
                {
                    title: "Observability & reliability",
                    description:
                        "We put monitoring and alerting in place so issues are visible early and recoverable quickly.",
                },
                {
                    title: "Secure delivery practices",
                    description:
                        "We embed security checks into the pipeline without slowing down the teams who need to move.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core DevOps expertise",
            "Focusing on automation, environment consistency, and delivery systems that make frequent shipping safer.",
            [
                {
                    title: "Map delivery bottlenecks",
                    points: [
                        "Review current build, test, and release workflows end to end",
                        "Identify manual steps that create delay, risk, or inconsistency",
                        "Define target delivery speed and reliability goals with stakeholders",
                    ],
                },
                {
                    title: "Automate the release path",
                    points: [
                        "Design CI/CD pipelines that cover build, verification, and deployment",
                        "Reduce human intervention on repetitive release tasks",
                        "Create rollback and promotion paths that teams can trust",
                    ],
                },
                {
                    title: "Standardize environments",
                    points: [
                        "Use infrastructure as code to keep environments reproducible",
                        "Close gaps between development, staging, and production",
                        "Document ownership so operational changes stay controlled",
                    ],
                },
                {
                    title: "Operate with visibility",
                    points: [
                        "Add monitoring and alerting around critical services and releases",
                        "Improve incident response through clearer ownership and signals",
                        "Continuously refine pipelines as the product and team scale",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Faster release cadence",
                description:
                    "Automated pipelines turn shipping into a routine process instead of a high-risk event.",
            },
            {
                title: "Fewer environment surprises",
                description:
                    "Consistent infrastructure reduces bugs caused by configuration drift across stages.",
            },
            {
                title: "Safer deployments",
                description:
                    "Verification and rollback paths give teams more control when something goes wrong.",
            },
            {
                title: "Earlier operational awareness",
                description:
                    "Monitoring and alerting surface issues before customers feel prolonged disruption.",
            },
            {
                title: "Lower delivery overhead",
                description:
                    "Teams spend less time on manual release work and more time building product value.",
            },
        ]),
    },
    {
        slug: "cyber-security",
        label: "Cyber Security",
        hero: {
            eyebrow: "// Services",
            title: "Cyber Security Built for Resilience.",
            highlight: "Cyber Security",
            description:
                "We harden products and platforms with practical security controls that protect users, data, and business continuity.",
        },
        pain: buildPain(
            "Security gaps widen when access control, product design, and operational readiness are treated as afterthoughts.",
            [
                {
                    title: "Unknown exposure",
                    description:
                        "Teams lack a clear view of vulnerabilities across applications, access paths, and infrastructure.",
                },
                {
                    title: "Weak identity controls",
                    description:
                        "Over-permissioned access and incomplete authentication create avoidable risk around critical systems.",
                },
                {
                    title: "Slow incident readiness",
                    description:
                        "When issues appear, ownership, detection, and response paths are unclear or incomplete.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core security expertise",
            items: [
                {
                    title: "Security assessment",
                    description:
                        "We identify exposure across applications, access paths, and infrastructure before issues become incidents.",
                },
                {
                    title: "Secure by design",
                    description:
                        "We embed security requirements into product and engineering decisions from the earliest stages.",
                },
                {
                    title: "Access & identity controls",
                    description:
                        "We strengthen authentication, authorization, and least-privilege patterns around critical systems.",
                },
                {
                    title: "Monitoring & response readiness",
                    description:
                        "We help teams detect threats faster and respond with clear ownership and communication paths.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core security expertise",
            "Focusing on practical controls, secure delivery habits, and resilience that protects growth.",
            [
                {
                    title: "Assess the security baseline",
                    points: [
                        "Review current exposure across product, access, and infrastructure surfaces",
                        "Prioritize issues by business impact and likelihood",
                        "Create a remediation roadmap teams can actually execute",
                    ],
                },
                {
                    title: "Hardening product and access",
                    points: [
                        "Strengthen authentication, authorization, and least-privilege practices",
                        "Embed security requirements into feature and architecture decisions",
                        "Reduce risky defaults that create avoidable exposure",
                    ],
                },
                {
                    title: "Build secure delivery habits",
                    points: [
                        "Integrate security checks into development and release workflows",
                        "Improve documentation and ownership for critical controls",
                        "Train teams on the patterns that keep systems safer over time",
                    ],
                },
                {
                    title: "Prepare for response",
                    points: [
                        "Define detection and escalation paths for high-impact incidents",
                        "Improve monitoring around the systems that matter most",
                        "Create readiness practices that keep response coordinated and calm",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Clearer risk visibility",
                description:
                    "You know where exposure exists and which issues deserve attention first.",
            },
            {
                title: "Stronger access control",
                description:
                    "Identity and permission patterns better protect critical systems and data.",
            },
            {
                title: "Security built into delivery",
                description:
                    "Controls become part of everyday product and engineering decisions, not last-minute gates.",
            },
            {
                title: "Faster incident readiness",
                description:
                    "Teams detect and respond with clearer ownership when something goes wrong.",
            },
            {
                title: "Greater customer and stakeholder trust",
                description:
                    "Practical security maturity protects reputation while the product continues to grow.",
            },
        ]),
    },
    {
        slug: "cloud-infrastructure",
        label: "Cloud & Infrastructure",
        hero: {
            eyebrow: "// Services",
            title: "Cloud Infrastructure Built for Growth.",
            highlight: "Cloud",
            description:
                "We design cloud foundations that stay secure, cost-aware, and ready for the next stage of product scale.",
        },
        pain: buildPain(
            "Cloud environments become expensive and fragile when architecture, cost control, and operations are not designed together.",
            [
                {
                    title: "Architecture that limits growth",
                    description:
                        "Current cloud design cannot support scale, reliability, or new product demands without constant firefighting.",
                },
                {
                    title: "Uncontrolled cloud spend",
                    description:
                        "Cost grows quietly through unused capacity, inefficient services, and weak visibility.",
                },
                {
                    title: "Operational complexity",
                    description:
                        "Teams struggle to migrate, monitor, and manage environments with clear standards and ownership.",
                },
            ]
        ),
        expertise: {
            eyebrow: "// Client's Solutions",
            title: "Strengthen your product with our core cloud expertise",
            items: [
                {
                    title: "Cloud architecture design",
                    description:
                        "We shape infrastructure that matches product needs today while leaving room for scale and change.",
                },
                {
                    title: "Migration & modernization",
                    description:
                        "We move workloads with clear sequencing so reliability and delivery stay intact throughout transition.",
                },
                {
                    title: "Cost & performance tuning",
                    description:
                        "We balance spend and efficiency so cloud systems support growth without silent waste.",
                },
                {
                    title: "Compliance-ready operations",
                    description:
                        "We establish environments and practices that support security, auditability, and operational discipline.",
                },
            ],
            cta: sharedExpertiseCta,
        },
        stages: buildStages(
            "Strengthen your product with our core cloud expertise",
            "Focusing on scalable foundations, controlled cost, and operations that stay reliable as demand grows.",
            [
                {
                    title: "Design the target foundation",
                    points: [
                        "Assess current architecture, reliability needs, and growth constraints",
                        "Define a cloud model that fits product and operational priorities",
                        "Plan sequencing that protects uptime during change",
                    ],
                },
                {
                    title: "Migrate with control",
                    points: [
                        "Move workloads in stages that reduce risk and keep delivery moving",
                        "Modernize what creates the most leverage first",
                        "Validate reliability at each step before expanding scope",
                    ],
                },
                {
                    title: "Optimize cost and performance",
                    points: [
                        "Identify waste, underused capacity, and efficiency opportunities",
                        "Tune services for the performance critical journeys need",
                        "Create visibility so cost stays manageable as usage grows",
                    ],
                },
                {
                    title: "Operate with discipline",
                    points: [
                        "Establish standards for security, auditability, and ownership",
                        "Improve monitoring and operational routines across environments",
                        "Support teams with practices that keep infrastructure sustainable",
                    ],
                },
            ]
        ),
        outcomes: buildOutcomes([
            {
                title: "Cloud ready for scale",
                description:
                    "Infrastructure supports growth without forcing constant emergency redesign.",
            },
            {
                title: "More controlled cloud spend",
                description:
                    "Visibility and tuning reduce waste while protecting required performance.",
            },
            {
                title: "Smoother modernization",
                description:
                    "Migrations move forward in stages that preserve reliability and delivery momentum.",
            },
            {
                title: "Stronger operational confidence",
                description:
                    "Standards, monitoring, and ownership make environments easier to run day to day.",
            },
            {
                title: "Better long-term flexibility",
                description:
                    "Architecture remains adaptable as product needs, traffic, and team capacity evolve.",
            },
        ]),
    },
];

export const serviceDetails = serviceDetailsBase;

export function getServiceBySlug(slug) {
    return serviceDetails.find((service) => service.slug === slug) ?? null;
}

export function getServiceSlugs() {
    return serviceDetails.map((service) => service.slug);
}

export const serviceNavLinks = serviceDetails.map((service) => ({
    label: service.label,
    href: `/services/${service.slug}`,
}));
