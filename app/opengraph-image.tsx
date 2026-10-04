import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [interBold, interRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Inter-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Inter-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "72px",
          background:
            "radial-gradient(800px circle at 88% 12%, rgba(100,255,218,0.16), rgba(10,25,47,0) 62%), #0a192f",
          color: "#eef3f8",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 77, fontWeight: 700, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#d5dce6",
            maxWidth: 760,
            lineHeight: 1.3,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      ],
    }
  );
}
