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
"[project]/src/hyperledger/1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/1.0o__r_zfpavsu.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/hyperledger/1.jpg.mjs { IMAGE => \"[project]/src/hyperledger/1.jpg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/hyperledger/1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1312,
    height: 938,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrf+FfuzIP+EgvgPr1/Wps+5zexv8AaP/Z"
};
}),
"[project]/src/hyperledger/2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/2.17cf03b7j-o.8.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/hyperledger/2.jpg.mjs { IMAGE => \"[project]/src/hyperledger/2.jpg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/hyperledger/2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1191,
    height: 916,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0tdD04SiArPu9RM2P507nN9Wp/wBNn//Z"
};
}),
"[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.0rf.57xj5x19y.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg.mjs { IMAGE => \"[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 830,
    height: 803,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDybzY/I24+b+taXVhH/9k="
};
}),
"[project]/src/calculator/calculator.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/calculator.13-c197zwzmu-.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/calculator/calculator.jpg.mjs { IMAGE => \"[project]/src/calculator/calculator.jpg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/calculator/calculator.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 931,
    height: 898,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDvAdb/AOEtII/4lH2fj7v+s/nV6WEf/9k="
};
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/hyperledger/1.jpg.mjs { IMAGE => "[project]/src/hyperledger/1.jpg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/hyperledger/2.jpg.mjs { IMAGE => "[project]/src/hyperledger/2.jpg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg.mjs { IMAGE => "[project]/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/calculator/calculator.jpg.mjs { IMAGE => "[project]/src/calculator/calculator.jpg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.summary
    };
}
async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-8 md:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/projects",
                    className: "rounded-md text-sm text-muted underline decoration-white/10 underline-offset-4 hover:text-text hover:decoration-accent/60 focus:outline-none focus:ring-2 focus:ring-accent",
                    children: "← Back to projects"
                }, void 0, false, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "surface rounded-3xl p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent/80",
                        children: "Case study"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 text-balance text-3xl font-semibold tracking-tight text-text md:text-5xl",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted md:text-base",
                        children: project.summary
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-2",
                        children: project.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                children: s
                            }, s, false, {
                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    project.links.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-3",
                        children: project.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "inline-flex min-h-10 items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent",
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "surface-soft mt-8 rounded-3xl p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold tracking-tight text-text",
                        children: "Highlights"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-3 text-sm text-muted",
                        children: project.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[slug]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-pretty leading-relaxed",
                                        children: h
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[slug]/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, h, true, {
                                fileName: "[project]/app/projects/[slug]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[slug]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            project.slug === "vanilla-js-todo-list-app" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewSection, {
                title: "Preview",
                description: "Screenshot of the deployed app.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                    className: "overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-lg shadow-black/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$todolist$2f$a62c4d0b$2d$1bc1$2d$4d6c$2d$a125$2d$c106b53c1a55$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "To-Do List App interface preview",
                            className: "h-auto w-full object-cover object-top",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                            className: "border-t border-white/10 px-4 py-3 text-xs text-muted",
                            children: "To-Do List app"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : null,
            project.slug === "vanilla-js-calculator" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewSection, {
                title: "Preview",
                description: "Screenshot of the deployed calculator.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                    className: "overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-lg shadow-black/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$calculator$2f$calculator$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Calculator interface preview",
                            className: "h-auto w-full object-cover object-top"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                            className: "border-t border-white/10 px-4 py-3 text-xs text-muted",
                            children: "Calculator"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this) : null,
            project.slug === "hyperledger-blockchain-verification" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewSection, {
                title: "Project Screens",
                description: "Key views from the Hyperledger blockchain verification project.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "overflow-hidden rounded-2xl border border-white/10 bg-black/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$hyperledger$2f$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "Hyperledger blockchain verification home page",
                                    className: "h-auto w-full object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "border-t border-white/10 px-4 py-3 text-xs text-muted",
                                    children: "Home page"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "overflow-hidden rounded-2xl border border-white/10 bg-black/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$hyperledger$2f$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "Hyperledger blockchain verification about page",
                                    className: "h-auto w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "border-t border-white/10 px-4 py-3 text-xs text-muted",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function PreviewSection({ title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "surface-soft mt-8 rounded-3xl p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold tracking-tight text-text",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-muted",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/projects/[slug]/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08-y-o~._.js.map