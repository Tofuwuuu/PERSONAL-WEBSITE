import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), "src", "Mark_Resume.pdf");
    const file = await readFile(resumePath);

    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Mark_Resume.pdf"',
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch {
    return new Response("Resume file not found.", { status: 404 });
  }
}

