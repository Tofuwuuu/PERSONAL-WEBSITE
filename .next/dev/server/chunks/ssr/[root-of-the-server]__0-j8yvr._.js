module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/content/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "vanilla-js-todo-list-app",
        title: "To-Do List App",
        summary: "Single-page tasks: add, edit, complete, filter, and persist with localStorage.",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "localStorage"
        ],
        highlights: [
            "Demonstrates practical UI behavior: form handling, event delegation, accessible controls, optimistic rendering, and persistent client-side storage with validation.",
            "Add, edit, complete, and delete tasks; filter by all, active, or completed; clear completed in one action.",
            "Remaining and total counts, empty state messaging, and accessible semantics (ARIA states, labels)."
        ],
        links: [
            {
                kind: "demo",
                label: "Live demo",
                href: "https://to-do-list-app-vanilla-js.onrender.com/"
            },
            {
                kind: "repo",
                label: "Repo",
                href: "https://github.com/Tofuwuuu/To-Do-List-App-Vanilla-JS-"
            }
        ]
    },
    {
        slug: "hyperledger-blockchain-verification",
        title: "Hyperledger Blockchain System - Alumni Document Verification",
        summary: "Permissioned Hyperledger Fabric system for tamper-proof alumni document verification and credential checks.",
        stack: [
            "Hyperledger Fabric",
            "Go/Chaincode",
            "FastAPI",
            "Node.js",
            "Docker",
            "MongoDB"
        ],
        highlights: [
            "Designed and implemented a permissioned Hyperledger Fabric network and chaincode to store tamper-proof alumni records.",
            "Built RESTful APIs for credential issuance and verification, integrating smart contracts with backend services.",
            "Implemented admin tooling and deployment scripts to provision the network and nodes."
        ],
        links: [
            {
                kind: "repo",
                label: "Repo",
                href: "https://github.com/Tofuwuuu/Hyperledger-Document-Verification-"
            }
        ]
    },
    {
        slug: "procurement-blockchain-system",
        title: "Procurement Blockchain System - Freelance Client Project",
        summary: "Full procurement workflow on Hyperledger Fabric covering purchase orders, approvals, and audit trails.",
        stack: [
            "Hyperledger Fabric",
            "Go/Chaincode",
            "FastAPI",
            "Docker",
            "PostgreSQL"
        ],
        highlights: [
            "Built for a graduate-level client with end-to-end workflow support from procurement request to approval.",
            "Implemented role-based access control and chaincode business logic for every procurement stage.",
            "Focused on tamper-proof records, auditability, and data integrity across transactions."
        ],
        links: []
    },
    {
        slug: "collaborative-realtime-document-editor",
        title: "Collaborative Real-Time Document Editor",
        summary: "Multi-user document editing platform with live synchronization and conflict handling.",
        stack: [
            "React",
            "TypeScript",
            "WebSockets",
            "FastAPI",
            "PostgreSQL",
            "Docker"
        ],
        highlights: [
            "Built simultaneous multi-user editing with real-time updates.",
            "Implemented WebSocket communication and conflict-resolution logic for concurrent edits.",
            "Designed a clean React and TypeScript interface with intuitive document management."
        ],
        links: []
    },
    {
        slug: "fashion-ecommerce-platform",
        title: "Fashion E-Commerce Platform",
        summary: "Full-stack fashion storefront with product browsing, variant carts, checkout, orders, and admin tools.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "JWT",
            "Cloudinary",
            "Docker",
            "PayMongo"
        ],
        highlights: [
            "Built a full-stack fashion e-commerce platform with a React, TypeScript, Tailwind CSS, and Zustand frontend connected to a FastAPI backend.",
            "Implemented product browsing, category filters, variant-based carts, checkout flow, order history, and JWT authentication.",
            "Designed admin dashboard workflows for managing products and orders, with Cloudinary media uploads, SQLAlchemy models, PostgreSQL persistence, Dockerized services, and PayMongo sandbox payments."
        ],
        links: []
    },
    {
        slug: "ai-powered-personal-dashboard",
        title: "AI-Powered Personal Dashboard",
        summary: "Full-stack AI dashboard that aggregates user data and surfaces intelligent insights.",
        stack: [
            "React",
            "TypeScript",
            "FastAPI",
            "PyTorch",
            "Transformers",
            "PostgreSQL",
            "Docker"
        ],
        highlights: [
            "Integrated transformer-based models for natural language summarization and classification features.",
            "Built modular, dynamic widgets with a responsive dashboard layout.",
            "Designed the app architecture for scalable full-stack data and inference flows."
        ],
        links: []
    },
    {
        slug: "vanilla-js-calculator",
        title: "Calculator",
        summary: "Keypad and keyboard input, expression display, and error handling responsive layout, deployed on Render.",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "render.yaml"
        ],
        highlights: [
            "Arithmetic (add, subtract, multiply, divide) with clear, backspace, and decimal input.",
            "Keyboard shortcuts for digits, operators, equals, clear, and backspace mirrors the on-screen controls.",
            "Division by zero surfaces an error state and resets cleanly on the next input.",
            "Static-site friendly: no build step; Render blueprint (`render.yaml`) documents repeatable deployment."
        ],
        links: [
            {
                kind: "demo",
                label: "Live demo",
                href: "https://calculator-ht64.onrender.com/"
            },
            {
                kind: "repo",
                label: "Repo",
                href: "https://github.com/Tofuwuuu/Calculator"
            }
        ]
    }
];
function getProjectBySlug(slug) {
    if (slug === "project-two") {
        return projects.find((p)=>p.slug === "hyperledger-blockchain-verification");
    }
    if (slug === "project-one") {
        return projects.find((p)=>p.slug === "vanilla-js-todo-list-app");
    }
    return projects.find((p)=>p.slug === slug);
}
}),
"[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Badge({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-muted ring-1 ring-white/10",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Badge.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProjectCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)");
;
;
;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/projects/${project.slug}`,
        className: "group surface-soft relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-accent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold tracking-tight text-text",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-relaxed text-muted",
                                children: project.summary
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 text-sm text-muted transition group-hover:translate-x-1 group-hover:text-accent",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex flex-wrap gap-2 pt-6",
                children: project.stack.slice(0, 4).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                        children: s
                    }, s, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Projects",
    description: "Selected projects and case studies."
};
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-8 md:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "surface mb-8 rounded-3xl p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent/80",
                        children: "Selected work"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 text-3xl font-semibold tracking-tight text-text md:text-5xl",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base",
                        children: "A curated set of work. Each project page includes the goal, key decisions, and links."
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectCard"], {
                        project: p
                    }, p.slug, false, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-j8yvr._.js.map