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
            "radial-gradient(900px circle at 18% 18%, rgba(124,92,255,0.35), rgba(0,0,0,0) 60%), radial-gradient(900px circle at 85% 10%, rgba(255,255,255,0.12), rgba(0,0,0,0) 60%), #0b0d12",
          color: "#e6e9f2",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#a5adbf",
            maxWidth: 980,
            lineHeight: 1.3,
          }}
        >
          {profile.tagline}
        </div>
        <div style={{ marginTop: 34, fontSize: 28, color: "#c7cce0" }}>
          {profile.role}
        </div>
      </div>
    ),
    size
  );
}

