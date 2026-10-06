"""One-page IT Technical Support (Remote) resume — requirement-matched."""

from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT = "Calibri"
NAVY = RGBColor(0x1F, 0x3A, 0x5F)
BLACK = RGBColor(0x1A, 0x1A, 0x1A)

NAME = "Mark Roderick I. Salise"
TITLE = "IT Technical Support  |  L1-L2 Support & System Administration  |  Remote"
LINE1 = "Cavite, Philippines  |  0948 253 6598  |  rodericksalise812@gmail.com"
LINE2 = "markroderick.vercel.app  |  github.com/Tofuwuuu"

OUT = r"c:\Users\roder\Downloads\Mark_Salise_CV_IT_Technical_Support.docx"
OUT_PROJECT = r"E:\Projects\PERSONAL WEBSITE\Mark_Salise_CV_IT_Technical_Support.docx"


def build_doc():
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.42)
        s.bottom_margin = Inches(0.42)
        s.left_margin = Inches(0.55)
        s.right_margin = Inches(0.55)

    normal = doc.styles["Normal"]
    normal.font.name = FONT
    normal.font.size = Pt(9.5)
    normal.font.color.rgb = BLACK
    rpr = normal.element.get_or_add_rPr()
    fonts = rpr.get_or_add_rFonts()
    for attr in ("w:ascii", "w:hAnsi", "w:cs", "w:eastAsia"):
        fonts.set(qn(attr), FONT)

    pf = normal.paragraph_format
    pf.space_before = Pt(0)
    pf.space_after = Pt(0)
    pf.line_spacing = 1.0
    return doc


def style_run(run, size, bold=False, italic=False, color=BLACK):
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = color
    run.font.name = FONT
    rpr = run._element.get_or_add_rPr()
    fonts = rpr.get_or_add_rFonts()
    for attr in ("w:ascii", "w:hAnsi", "w:cs", "w:eastAsia"):
        fonts.set(qn(attr), FONT)


def para(doc, space_after=0.0, space_before=0.0, left=0.0, hanging=0.0):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(space_before)
    if left:
        p.paragraph_format.left_indent = Inches(left)
    if hanging:
        p.paragraph_format.first_line_indent = Inches(-hanging)
    return p


def header(doc):
    p = para(doc, space_after=0.5)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    style_run(p.add_run(NAME), 18, bold=True, color=NAVY)

    p = para(doc, space_after=1.5)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    style_run(p.add_run(TITLE), 9.5, color=NAVY)

    for line in (LINE1, LINE2):
        p = para(doc, space_after=0.5)
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        style_run(p.add_run(line), 9, color=BLACK)


def section(doc, title):
    p = para(doc, space_before=5, space_after=2)
    style_run(p.add_run(title.upper()), 10.5, bold=True, color=NAVY)
    pPr = p._p.get_or_add_pPr()
    bdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "1F3A5F")
    bdr.append(bottom)
    pPr.append(bdr)


def entry(doc, left_text, right_text):
    p = para(doc, space_before=3, space_after=0.5)
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.35), WD_TAB_ALIGNMENT.RIGHT)
    style_run(p.add_run(left_text), 10, bold=True, color=BLACK)
    if right_text:
        style_run(p.add_run("\t" + right_text), 9, italic=True, color=BLACK)


def bullet(doc, text):
    p = para(doc, space_after=0.5, left=0.16, hanging=0.16)
    style_run(p.add_run("\u2022  " + text), 9.5, color=BLACK)


def meta(doc, text):
    p = para(doc, space_after=0.5, left=0.16)
    style_run(p.add_run(text), 8.5, italic=True, color=BLACK)


def skills(doc, label, items):
    p = para(doc, space_after=1)
    style_run(p.add_run(label + ": "), 9.5, bold=True, color=BLACK)
    style_run(p.add_run(items), 9.5, color=BLACK)


def build():
    doc = build_doc()
    header(doc)

    section(doc, "Professional Summary")
    p = para(doc, space_after=1)
    style_run(
        p.add_run(
            "IT Technical Support professional and BS Computer Science graduate with hands-on "
            "experience resolving L1-L2 technical issues, supporting client-facing systems, "
            "and maintaining application and infrastructure environments. Experienced in "
            "troubleshooting complex multi-system issues, organizing and tracking support "
            "requests through resolution, and documenting fixes and runbooks that reduce "
            "repeat tickets. Fluent English communicator (spoken and written) with proven "
            "leadership as an organization officer and client-facing coordinator. Fully "
            "equipped for remote work with own Windows computer and stable internet; "
            "available for Mon-Fri Pacific Time coverage."
        ),
        9.5,
    )

    section(doc, "Requirements Match")
    bullet(
        doc,
        "Fluent English (spoken & written) — client-facing support at Go Crayons, stakeholder "
        "presentations, and full technical documentation written in English.",
    )
    bullet(
        doc,
        "Own Windows computer & stable internet — Windows 10/11 workstation, reliable home "
        "fiber connection, backup mobile data, and quiet dedicated work area.",
    )
    bullet(
        doc,
        "Strong organizational skills — tracked and prioritized concurrent client issues "
        "across multiple accounts; served as organization Treasurer handling records and finances.",
    )
    bullet(
        doc,
        "Experience in complex IT support work — troubleshooting across applications, APIs, "
        "databases, hosting environments, and containerized services.",
    )
    bullet(
        doc,
        "Professional communication skills — clear escalation notes, status updates, and "
        "handoff documentation for both technical and non-technical stakeholders.",
    )
    bullet(
        doc,
        "Leadership readiness — coordinated fixes across teams, mentored peers on project "
        "setup, and led end-to-end delivery of systems for real stakeholders.",
    )
    bullet(
        doc,
        "Availability — 40 hours/week, Mon-Fri, 8:00 AM - 5:30 PM Pacific Time; 100% remote.",
    )

    section(doc, "Technical Skills")
    skills(
        doc,
        "IT Support",
        "L1-L2 troubleshooting, issue triage & escalation, ticket organization and tracking, "
        "root-cause analysis, incident documentation, user/client support",
    )
    skills(
        doc,
        "Systems & Administration",
        "Windows 10/11 administration, account/access setup, software installation & updates, "
        "Linux command line basics, environment configuration, backup and recovery concepts",
    )
    skills(
        doc,
        "Infrastructure & Hosting",
        "Docker & Docker Compose, hosting platforms (Vercel, Railway, Render), service "
        "deployment and restarts, log review, uptime and connectivity troubleshooting",
    )
    skills(
        doc,
        "Networking & Security",
        "TCP/IP, DNS, HTTP/HTTPS, VPN concepts, firewall/port basics, credential hygiene, "
        "least-privilege access, phishing awareness (Information Assurance & Security coursework)",
    )
    skills(
        doc,
        "Applications & Data",
        "Microsoft 365 / Google Workspace, remote support tools, SQL queries (PostgreSQL, MySQL), "
        "MongoDB, REST API troubleshooting, browser dev tools",
    )
    skills(
        doc,
        "Tools & Practices",
        "Git/GitHub, ticket and task tracking workflows, runbook and SOP writing, "
        "n8n / workflow automation, AI-assisted troubleshooting tools",
    )

    section(doc, "Professional Experience")

    entry(doc, "Technical Support & Web Developer Intern  |  Go Crayons", "Jun 2024 - Aug 2024")
    bullet(
        doc,
        "Served as first point of contact for client-reported technical issues; diagnosed "
        "problems, resolved L1-L2 items directly, and escalated complex cases with clear "
        "reproduction steps and impact notes.",
    )
    bullet(
        doc,
        "Organized and prioritized concurrent requests across multiple client accounts, "
        "tracking each issue through resolution and confirming fixes before release.",
    )
    bullet(
        doc,
        "Coordinated with developers and account teams to close issues efficiently, "
        "maintaining professional written and verbal communication throughout.",
    )
    bullet(
        doc,
        "Performed quality checks and post-fix verification on client websites, reducing "
        "repeat reports on the same issues.",
    )

    entry(doc, "IT Support & Software Engineer  |  Freelance / Self-Employed", "Jan 2024 - Jan 2025")
    bullet(
        doc,
        "Provided end-to-end technical support for delivered client systems — resolving "
        "runtime, connectivity, permission, configuration, and environment issues.",
    )
    bullet(
        doc,
        "Administered and maintained self-hosted services using Docker and cloud hosting; "
        "handled deployments, service restarts, log review, and recovery from failures.",
    )
    bullet(
        doc,
        "Diagnosed complex multi-system problems spanning front-end applications, REST APIs, "
        "and databases, using logs and targeted queries to confirm root cause.",
    )
    bullet(
        doc,
        "Authored setup guides, runbooks, and handoff documentation so client staff could "
        "operate systems independently and reduce repeat support requests.",
    )
    bullet(
        doc,
        "Managed client relations directly — requirements clarification, status reporting, "
        "expectation setting, and remote walkthrough sessions.",
    )

    section(doc, "Leadership & Relevant Projects")

    entry(doc, "Treasurer  |  Young Programmers and Developers' Society", "Jun 2022 - Mar 2024")
    bullet(
        doc,
        "Managed organization finances and records with full accountability; coordinated "
        "events and communicated across officers and members.",
    )

    entry(doc, "AI Ops Assistant — Support Ticket Automation", "2026")
    bullet(
        doc,
        "Built a support-oriented tool that classifies incoming requests, retrieves relevant "
        "context, drafts responses, and logs every step for human review — directly applicable "
        "to ticket organization and support efficiency.",
    )
    meta(doc, "React  |  TypeScript  |  FastAPI  |  PostgreSQL  |  n8n  -  Live: ai-ops-assistant-wheat.vercel.app")

    entry(doc, "Alumni Document Verification System (Capstone)", "2024 - 2025")
    bullet(
        doc,
        "Delivered and supported a live system for university stakeholders, including user "
        "onboarding, troubleshooting, documentation, and post-deployment assistance.",
    )

    section(doc, "Education")
    entry(doc, "Bachelor of Science in Computer Science", "Graduated September 2025")
    p = para(doc, space_after=0.5)
    style_run(p.add_run("Cavite State University - Carmona Campus"), 9.5)
    bullet(
        doc,
        "Relevant coursework: Computer Networks, Operating Systems, Information Assurance & "
        "Security, Database Systems, Software Engineering, Web Development.",
    )

    section(doc, "Remote Work Setup")
    bullet(doc, "Windows 10/11 desktop/laptop with up-to-date security patches.")
    bullet(doc, "Stable home fiber internet with mobile data backup; headset and webcam ready.")
    bullet(doc, "Dedicated quiet workspace; experienced with remote collaboration and ticketing tools.")
    bullet(doc, "Available to start immediately; open contract arrangement acknowledged.")

    doc.save(OUT)
    doc.save(OUT_PROJECT)
    print("Saved:", OUT)
    print("Saved:", OUT_PROJECT)


if __name__ == "__main__":
    build()
