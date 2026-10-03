"use client";
import ShaderBackground from "@/components/ui/shader-background";

export default function ShaderBg() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      <ShaderBackground />
    </div>
  );
}
