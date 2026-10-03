export default function ShaderBg() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse at 50% 0%, #0f1d36 0%, #09111f 55%, #060c17 100%)",
      }}
    />
  );
}
