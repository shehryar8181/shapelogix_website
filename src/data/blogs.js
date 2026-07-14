const unsplash = (id, extra = "") =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80${extra}`;

export const blogAudiences = ["All", "Founders", "Product teams", "Designers", "Engineers"];

export const blogCategories = [
    "All",
    "Design",
    "Product",
    "AI",
    "Engineering",
    "Strategy",
];

export const blogs = [
    {
        slug: "power-of-minimalism-in-design",
        date: "July 1, 2026",
        title: "The Power of Minimalism: Why Less is More in Design",
        description:
            "How stripping complexity from interfaces improves clarity, speed, and product adoption across modern SaaS experiences.",
        audience: "Designers",
        category: "Design",
        image: unsplash("photo-1618005182384-a83a8bd57fbe"),
    },
    {
        slug: "design-systems-that-scale",
        date: "July 3, 2026",
        title: "Design Systems That Scale Without Becoming Slow",
        description:
            "Practical ways to build reusable patterns that keep teams aligned while still leaving room for product-specific expression.",
        audience: "Designers",
        category: "Design",
        image: unsplash("photo-1586717791821-3f44a563fa4c"),
    },
    {
        slug: "ai-product-roadmap-reality-check",
        date: "July 5, 2026",
        title: "An AI Product Roadmap Reality Check for Founders",
        description:
            "How to decide where intelligence belongs, what to validate first, and which AI bets are worth funding now.",
        audience: "Founders",
        category: "AI",
        image: unsplash("photo-1677442136019-21780ecad995"),
    },
    {
        slug: "ux-audits-that-drive-revenue",
        date: "July 7, 2026",
        title: "UX Audits That Actually Drive Revenue",
        description:
            "A structured approach to spotting journey friction, conversion leaks, and design debt before they compound.",
        audience: "Product teams",
        category: "Strategy",
        image: unsplash("photo-1460925895917-afdab827c52f"),
    },
    {
        slug: "onboarding-flows-that-activate-users",
        date: "July 9, 2026",
        title: "Onboarding Flows That Activate Users Faster",
        description:
            "Patterns for first-run experiences that reduce drop-off while teaching value in the first few minutes.",
        audience: "Product teams",
        category: "Product",
        image: unsplash("photo-1551434678-e076c223a692"),
    },
    {
        slug: "shipping-trustworthy-ai-features",
        date: "July 11, 2026",
        title: "Shipping Trustworthy AI Features",
        description:
            "Designing oversight, feedback, and failure states so AI assists users without creating silent risk.",
        audience: "Engineers",
        category: "AI",
        image: unsplash("photo-1620712943543-bcc4688e7485"),
    },
    {
        slug: "motion-with-purpose-in-product-ui",
        date: "July 13, 2026",
        title: "Motion With Purpose in Product UI",
        description:
            "When animation supports hierarchy and feedback—and when it becomes noise that slows comprehension.",
        audience: "Designers",
        category: "Design",
        image: unsplash("photo-1558655146-d09347e92766"),
    },
    {
        slug: "b2b-information-architecture",
        date: "July 15, 2026",
        title: "Information Architecture for Complex B2B Products",
        description:
            "How to organize dense workflows so teams can find the right action without drowning in navigation.",
        audience: "Product teams",
        category: "Product",
        image: unsplash("photo-1504868584819-f8e8b4b67da3"),
    },
    {
        slug: "prototyping-before-you-build",
        date: "July 17, 2026",
        title: "Prototype Before You Build Expensive Assumptions",
        description:
            "Why interactive prototypes create sharper stakeholder decisions and reduce costly late-stage rework.",
        audience: "Founders",
        category: "Strategy",
        image: unsplash("photo-1581291518857-4e27b48ff24e"),
    },
    {
        slug: "engineering-for-design-handoff",
        date: "July 19, 2026",
        title: "Engineering Practices That Improve Design Handoff",
        description:
            "Shared definitions, component discipline, and review rituals that stop UX quality from slipping in build.",
        audience: "Engineers",
        category: "Engineering",
        image: unsplash("photo-1517694712202-14dd9538aa97"),
    },
    {
        slug: "measurement-loops-for-product-teams",
        date: "July 21, 2026",
        title: "Measurement Loops Every Product Team Needs",
        description:
            "Simple analytics and review rhythms that keep roadmap decisions connected to real user behavior.",
        audience: "Product teams",
        category: "Strategy",
        image: unsplash("photo-1551288049-bebda4e38f71"),
    },
    {
        slug: "dark-modes-done-with-intention",
        date: "July 23, 2026",
        title: "Dark Modes Done With Intention",
        description:
            "Beyond inverted colors: contrast, hierarchy, and accessibility principles for usable dark interfaces.",
        audience: "Designers",
        category: "Design",
        image: unsplash("photo-1518770660439-4636190af475"),
    },
    {
        slug: "ai-assistants-inside-workflows",
        date: "July 25, 2026",
        title: "Designing AI Assistants Inside Existing Workflows",
        description:
            "Where copilots should appear, how they explain themselves, and what keeps people in control.",
        audience: "Product teams",
        category: "AI",
        image: unsplash("photo-1485827404703-89b55fcc595e"),
    },
    {
        slug: "frontend-performance-as-ux",
        date: "July 27, 2026",
        title: "Frontend Performance Is a UX Feature",
        description:
            "Why perceived speed, loading states, and interaction readiness shape trust as much as visual design.",
        audience: "Engineers",
        category: "Engineering",
        image: unsplash("photo-1498050108023-c8196b13490d"),
    },
    {
        slug: "branding-systems-for-tech-companies",
        date: "July 29, 2026",
        title: "Brand Systems for Modern Tech Companies",
        description:
            "How identity, product UI, and content systems reinforce each other without feeling overdesigned.",
        audience: "Founders",
        category: "Strategy",
        image: unsplash("photo-1561070791-2526d30994b5"),
    },
    {
        slug: "accessibility-beyond-compliance",
        date: "August 1, 2026",
        title: "Accessibility Beyond Compliance Checklists",
        description:
            "Practical accessibility decisions that improve usability for everyone while reducing support friction.",
        audience: "Designers",
        category: "Design",
        image: unsplash("photo-1573164713986-866bb4653016"),
    },
    {
        slug: "choosing-what-not-to-build",
        date: "August 3, 2026",
        title: "Choosing What Not to Build",
        description:
            "A founder-friendly framework for cutting roadmap noise while protecting the outcomes that matter.",
        audience: "Founders",
        category: "Product",
        image: unsplash("photo-1454165804606-c3d57bc86b40"),
    },
    {
        slug: "qa-strategies-for-fast-teams",
        date: "August 5, 2026",
        title: "QA Strategies for Teams That Ship Fast",
        description:
            "Risk-based coverage and regression habits that keep quality high without freezing release cadence.",
        audience: "Engineers",
        category: "Engineering",
        image: unsplash("photo-1516321318423-f06f85e504b3"),
    },
    {
        slug: "saas-pricing-page-ux",
        date: "August 7, 2026",
        title: "SaaS Pricing Page UX That Converts",
        description:
            "Clarity patterns for plans, comparisons, and objections that help buyers decide with less friction.",
        audience: "Product teams",
        category: "Product",
        image: unsplash("photo-1553729459-efe14ef6055d"),
    },
    {
        slug: "research-synthesis-that-sticks",
        date: "August 9, 2026",
        title: "Research Synthesis That Stick With Stakeholders",
        description:
            "How to turn interviews and tests into decisions teams remember and actually act on.",
        audience: "Designers",
        category: "Strategy",
        image: unsplash("photo-1522071820081-009f0129c71c"),
    },
    {
        slug: "cloud-cost-visibility-for-product",
        date: "August 11, 2026",
        title: "Cloud Cost Visibility for Product Decisions",
        description:
            "Connecting infrastructure spend to product features so growth stays intentional and measurable.",
        audience: "Founders",
        category: "Engineering",
        image: unsplash("photo-1451187580459-43490279c0fa"),
    },
    {
        slug: "human-oversight-in-ai-products",
        date: "August 13, 2026",
        title: "Human Oversight Patterns in AI Products",
        description:
            "Interface and process patterns that keep people accountable while AI handles heavy lifting.",
        audience: "Engineers",
        category: "AI",
        image: unsplash("photo-1535378620166-273708d44e4c"),
    },
    {
        slug: "content-design-for-complex-tools",
        date: "August 15, 2026",
        title: "Content Design for Complex Tools",
        description:
            "Microcopy, guidance, and empty states that help users complete advanced tasks with confidence.",
        audience: "Designers",
        category: "Product",
        image: unsplash("photo-1432888498266-38ffec3eaf0a"),
    },
    {
        slug: "building-product-culture-remote",
        date: "August 17, 2026",
        title: "Building Product Culture Across Remote Teams",
        description:
            "Cadence, documentation, and decision rituals that keep distributed product teams aligned.",
        audience: "Founders",
        category: "Strategy",
        image: unsplash("photo-1600880292203-757bb62b4baf"),
    },
];

export const BLOGS_PER_PAGE = 12;

const defaultArticleImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

const defaultAuthor = {
    name: "Alex Doe",
    role: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
};

const defaultCategories = [
    "Digital Strategy",
    "Marketing Campaign",
    "Strategy & Marketing",
];

const defaultSections = [
    {
        title: "First Impressions Matter",
        points: [
            {
                title: "Design Shapes perception",
                body: "People judge products in seconds. Clear hierarchy, composed spacing, and intentional visuals signal quality before users read a single feature claim.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Broken layouts, uneven spacing, and unclear actions make products feel unfinished. That doubt spreads into pricing, support, and long-term brand trust.",
            },
        ],
        bottomLine: "Your interface is often the first salesperson—and the first proof of credibility.",
    },
    {
        title: "Good Design Boosts Conversions & Sales",
        points: [
            {
                title: "Design Shapes perception",
                body: "When journeys feel effortless, users reach value faster. That momentum shows up in activation, checkout completion, and expansion rates.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Friction in forms, weak CTAs, and confusing next steps quietly kill demand even when the underlying offer is strong.",
            },
        ],
        bottomLine: "Conversion is rarely just copy or traffic—it’s how confidently people can take the next step.",
    },
    {
        title: "Strong Branding Creates Customer Loyalty",
        points: [
            {
                title: "Design Shapes perception",
                body: "Consistent identity systems help customers recognize, remember, and prefer you across web, product, and marketing surfaces.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Inconsistent visuals and tone create the feeling of a fragmented company, which makes loyalty harder to earn and easier to lose.",
            },
        ],
        bottomLine: "Brand coherence turns one-time users into people who come back without being pushed.",
    },
    {
        title: "Good Design Enhances User Experience (UX)",
        points: [
            {
                title: "Design Shapes perception",
                body: "Thoughtful information architecture and interaction patterns reduce cognitive load so users can focus on outcomes, not navigation.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Unclear flows force users to guess. Every guess introduces frustration, support tickets, and quiet churn.",
            },
        ],
        bottomLine: "Great UX removes work the customer never asked to do.",
    },
    {
        title: "Design Gives You a Competitive Edge",
        points: [
            {
                title: "Design Shapes perception",
                body: "In crowded markets, experience quality becomes differentiation. Two products with similar features rarely feel the same to use.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "When competitors feel clearer and faster, yours looks harder—even if the underlying capability is comparable.",
            },
        ],
        bottomLine: "Design can be the moat when features alone are easy to copy.",
    },
    {
        title: "Saves Money in the Long Run",
        points: [
            {
                title: "Design Shapes perception",
                body: "Early prototyping and usability validation reduce expensive rebuilds, failed launches, and engineering effort spent on the wrong solutions.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Skipping design discovery often means paying twice—once to ship, and again to repair the experience after customers reject it.",
            },
        ],
        bottomLine: "Design investment upfront is almost always cheaper than redesign after release.",
    },
    {
        title: "Conclusion",
        points: [
            {
                title: "Design Shapes perception",
                body: "Across trust, conversion, loyalty, and efficiency, design compounds. Treat it as a business system, not decoration.",
            },
            {
                title: "Poor Design Leads to Distrust",
                body: "Ignoring experience quality creates hidden costs that show up later as churn, stalled growth, and brand dilution.",
            },
        ],
        bottomLine: "The products that win make quality visible at every interaction.",
    },
];

export function getBlogContent(blog) {
    return {
        categories: blog.articleCategories || defaultCategories,
        author: blog.author || defaultAuthor,
        images: blog.articleImages || [blog.image || defaultArticleImage, blog.image || defaultArticleImage],
        intro:
            blog.intro ||
            blog.description ||
            "Strong design does more than make products look polished. It shapes trust, accelerates decisions, and turns complex workflows into experiences people can move through with confidence.",
        sections: blog.sections || defaultSections,
    };
}

export function getBlogBySlug(slug) {
    return blogs.find((blog) => blog.slug === slug) ?? null;
}

export function getBlogSlugs() {
    return blogs.map((blog) => blog.slug);
}
