"use client";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
