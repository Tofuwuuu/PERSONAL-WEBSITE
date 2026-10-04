import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(800px circle at 88% 12%, rgba(100,255,218,0.16), rgba(10,25,47,0) 62%), #0a192f",
          color: "#eef3f8",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#d5dce6",
            maxWidth: 980,
            lineHeight: 1.3,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    size
  );
}
