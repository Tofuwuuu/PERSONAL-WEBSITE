import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), "src", "Mark_Salise_Resume_FINAL.docx");
    const file = await readFile(resumePath);

    return new Response(file, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="Mark_Salise_Resume_FINAL.docx"',
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch {
    return new Response("Resume file not found.", { status: 404 });
  }
}

