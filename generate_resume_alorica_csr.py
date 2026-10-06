"""One-page BPO / Customer Service Representative resume (Alorica onsite application)."""

from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT = "Calibri"
NAVY = RGBColor(0x1F, 0x3A, 0x5F)
BLACK = RGBColor(0x1A, 0x1A, 0x1A)

NAME = "Mark Roderick I. Salise"
TITLE = "Customer Service Representative"
LINE1 = "Cavite, Philippines  |  0948 253 6598  |  rodericksalise812@gmail.com"

OUT = r"c:\Users\roder\Downloads\Mark_Salise_Resume_Alorica_CSR.docx"
OUT_PROJECT = r"E:\Projects\PERSONAL WEBSITE\Mark_Salise_Resume_Alorica_CSR.docx"


def build_doc():
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.45)
        s.bottom_margin = Inches(0.45)
        s.left_margin = Inches(0.6)
        s.right_margin = Inches(0.6)

    normal = doc.styles["Normal"]
    normal.font.name = FONT
    normal.font.size = Pt(10)
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
    style_run(p.add_run(TITLE), 10, color=NAVY)

    p = para(doc, space_after=0.5)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    style_run(p.add_run(LINE1), 9.5, color=BLACK)


def section(doc, title):
    p = para(doc, space_before=6, space_after=2)
    style_run(p.add_run(title.upper()), 11, bold=True, color=NAVY)
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
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.25), WD_TAB_ALIGNMENT.RIGHT)
    style_run(p.add_run(left_text), 10.5, bold=True, color=BLACK)
    if right_text:
        style_run(p.add_run("\t" + right_text), 9.5, italic=True, color=BLACK)


def bullet(doc, text):
    p = para(doc, space_after=0.5, left=0.18, hanging=0.18)
    style_run(p.add_run("\u2022  " + text), 10, color=BLACK)


def field(doc, label, value):
    p = para(doc, space_after=1)
    p.paragraph_format.tab_stops.add_tab_stop(Inches(1.7))
    style_run(p.add_run(label + ":"), 10, bold=True)
    style_run(p.add_run("\t" + value), 10)


def skills(doc, label, items):
    p = para(doc, space_after=1)
    style_run(p.add_run(label + ": "), 10, bold=True, color=BLACK)
    style_run(p.add_run(items), 10, color=BLACK)


def build():
    doc = build_doc()
    header(doc)

    section(doc, "Objective")
    p = para(doc, space_after=1)
    style_run(
        p.add_run(
            "To join Alorica as a Customer Service Representative where I can apply my "
            "communication skills, client-handling experience, and technical background to "
            "deliver excellent customer support, while building a long-term career with a "
            "stable and growth-oriented company."
        ),
        10,
    )

    section(doc, "Personal Information")
    field(doc, "Full Name", "Mark Roderick Indita Salise")
    field(doc, "Date of Birth", "September 8, 2002")
    field(doc, "Age", "24 years old")
    field(doc, "Civil Status", "Single")
    field(doc, "Nationality", "Filipino")
    field(doc, "Address", "[City/Municipality], Cavite, Philippines")
    field(doc, "Contact Number", "0948 253 6598")
    field(doc, "Email Address", "rodericksalise812@gmail.com")
    field(doc, "Languages", "English (fluent - spoken & written), Filipino (native)")

    section(doc, "Skills & Qualifications")
    skills(
        doc,
        "Communication",
        "Fluent English communication, clear and courteous phone and email etiquette, "
        "active listening, ability to explain technical matters in simple terms",
    )
    skills(
        doc,
        "Customer Service",
        "Customer inquiry handling, complaint resolution, de-escalation, follow-through "
        "until resolution, setting clear expectations, professional and patient manner",
    )
    skills(
        doc,
        "Computer Skills",
        "Microsoft Office (Word, Excel, Outlook), Google Workspace (Gmail, Docs, Sheets), "
        "fast and accurate typing, data encoding, CRM and ticketing systems, "
        "basic troubleshooting of software and account issues",
    )
    skills(
        doc,
        "Work Habits",
        "Reliable and punctual, organized with accurate record keeping, strong attention "
        "to detail, works well under pressure, coachable and open to feedback, team player",
    )
    skills(
        doc,
        "Availability",
        "Amenable to shifting schedules including night shift, weekends, and holidays; "
        "willing to work onsite in Alabang; can start immediately",
    )

    section(doc, "Work Experience")

    entry(doc, "Freelance Web Developer / Client Support", "Jan 2024 - Present")
    bullet(
        doc,
        "Handle client communication from first inquiry to project completion, including "
        "clarifying their needs, giving regular updates, and setting clear expectations.",
    )
    bullet(
        doc,
        "Respond to client questions and reported concerns, explaining causes and solutions "
        "in simple, non-technical language that customers can easily understand.",
    )
    bullet(
        doc,
        "Conduct online walkthrough sessions and prepare step-by-step guides so clients can "
        "confidently use the systems delivered to them.",
    )
    bullet(
        doc,
        "Maintain organized records of all client requests, changes, and resolutions for "
        "accurate follow-up and documentation.",
    )

    entry(doc, "Web Developer Intern  |  Go Crayons", "Jun 2024 - Aug 2024")
    bullet(
        doc,
        "Served as a point of contact for client-reported concerns - listened to the issue, "
        "gathered details, and provided updates until the concern was fully resolved.",
    )
    bullet(
        doc,
        "Handled multiple client accounts at the same time, prioritizing urgent requests "
        "while keeping every open item tracked and accounted for.",
    )
    bullet(
        doc,
        "Coordinated with team members to resolve issues quickly, then verified the fix "
        "before confirming completion with the client.",
    )
    bullet(
        doc,
        "Maintained professional and courteous communication in a fast-paced, "
        "service-oriented environment.",
    )

    section(doc, "Leadership Experience")
    entry(doc, "Treasurer  |  Young Programmers and Developers' Society", "Jun 2022 - Mar 2024")
    bullet(
        doc,
        "Managed organization funds and financial records with complete accuracy and "
        "accountability, reporting regularly to officers and members.",
    )
    bullet(
        doc,
        "Assisted members with their questions and concerns and coordinated organization "
        "events, developing patience and strong people-handling skills.",
    )

    section(doc, "Educational Background")
    entry(doc, "Bachelor of Science in Computer Science", "Graduated September 2025")
    p = para(doc, space_after=0.5)
    style_run(p.add_run("Cavite State University - Carmona Campus"), 10)

    section(doc, "Character References")
    p = para(doc, space_after=1)
    style_run(p.add_run("Available upon request."), 10)

    doc.save(OUT)
    doc.save(OUT_PROJECT)
    print("Saved:", OUT)
    print("Saved:", OUT_PROJECT)


if __name__ == "__main__":
    build()
