import { ImageResponse } from "next/og";

export const alt = "Instituto Servir – Faça parte dessa transformação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background:
          "linear-gradient(135deg, #0a1022 0%, #121e3f 60%, #1d4ed8 100%)",
        color: "#eef4ff",
      }}
    >
      <div style={{ fontSize: 34, letterSpacing: 6, color: "#38bdf8" }}>
        INSTITUTO SERVIR
      </div>
      <div
        style={{
          fontSize: 84,
          fontWeight: 700,
          lineHeight: 1.05,
          marginTop: 24,
        }}
      >
        Faça parte dessa transformação
      </div>
      <div style={{ fontSize: 34, marginTop: 32, opacity: 0.9 }}>
        Acolhimento, educação e esperança em Sobradinho II · DF
      </div>
    </div>,
    size,
  );
}
