import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d12",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 800,
          borderRadius: 16,
        }}
      >
        MR
      </div>
    ),
    size
  );
}

