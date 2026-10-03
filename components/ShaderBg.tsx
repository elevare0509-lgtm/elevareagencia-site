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
          "radial-gradient(ellipse at 50% 0%, #14284a 0%, #0B1628 55%, #070f1d 100%)",
      }}
    />
  );
}
