"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CircularFeatures({
  features,
  radius = 180,
  outerPadding = 240,
  titleOffset = 120,
}: {
  features: { title: string; icon: string }[];
  radius?: number;
  outerPadding?: number;
  titleOffset?: number;
}) {
  // ======== 1️⃣ State để lưu giá trị responsive ========
  const [sizes, setSizes] = useState({
    radius,
    outerPadding,
    titleOffset,
    iconSize: 64,
    fontSize: 14,
  });

  // ======== 2️⃣ Xử lý thay đổi khi resize màn hình ========
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Cập nhật giá trị theo breakpoint
      if (width < 480) {
        // Mobile
        setSizes({
          radius: 75,
          outerPadding: 60,
          titleOffset: 40,
          iconSize: 32,
          fontSize: 12,
        });
      } else if (width < 768) {
        // Mobile
        setSizes({
          radius: 110,
          outerPadding: 140,
          titleOffset: 80,
          iconSize: 44,
          fontSize: 12,
        });
      } else if (width < 1024) {
        // Tablet
        setSizes({
          radius: 150,
          outerPadding: 190,
          titleOffset: 100,
          iconSize: 56,
          fontSize: 13,
        });
      } else {
        // Desktop
        setSizes({
          radius,
          outerPadding,
          titleOffset,
          iconSize: 64,
          fontSize: 14,
        });
      }
    };

    handleResize(); // Chạy 1 lần khi mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radius, outerPadding, titleOffset]);

  // ======== 3️⃣ Các biến tính toán cơ bản ========
  const total = features.length;
  const start = total === 8 ? -67.5 : -90;
  const size = (sizes.radius + sizes.outerPadding) * 2;
  const iconR = sizes.iconSize / 2;

  const base = {
    position: "absolute" as const,
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  };

  const pos = (x: number, y: number, t = "") => `translate(${x}px,${y}px) ${t}`;

  // ======== 4️⃣ Render giao diện ========
  return (
    <section className="bg-black py-8 px-2 md:py-16">
      <div
        className="relative flex items-center justify-center mx-auto"
        style={{
          width: size,
          height: size,
          maxWidth: "100%",
        }}
      >
        {/* Hai vòng tròn ngoài (hiệu ứng) */}
        {[0.24, 0.22].map((a, i) => (
          <div
            key={i}
            style={{
              ...base,
              width: (sizes.radius + (i ? 0 : sizes.outerPadding)) * 2,
              height: (sizes.radius + (i ? 0 : sizes.outerPadding)) * 2,
              border: `2px solid rgba(0,255,106,${a})`,
              borderRadius: "50%",
            }}
          />
        ))}

        {/* Render từng phần tử */}
        {features.map((f, i) => {
          const rad = ((start + (i / total) * 360) * Math.PI) / 180;
          const [x, y] = [
            sizes.radius * Math.cos(rad),
            sizes.radius * Math.sin(rad),
          ];
          const right = Math.cos(rad) >= 0;
          const tx = x + (right ? sizes.titleOffset : -sizes.titleOffset);
          const lx = x + (right ? iconR : -iconR);
          const ly = y;
          const w = Math.abs(tx - lx) - 16;

          return (
            <div key={i}>
              {/* Icon */}
              <div
                className="absolute flex items-center justify-center rounded-full bg-[#0D0D0D] border border-[#00FF6A]"
                style={{
                  ...base,
                  transform: pos(x, y, "translate(-50%,-50%)"),
                  width: sizes.iconSize,
                  height: sizes.iconSize,
                }}
              >
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={sizes.iconSize * 0.45}
                  height={sizes.iconSize * 0.45}
                />
              </div>

              {/* Dot nhỏ ở rìa icon */}
              <div
                style={{
                  ...base,
                  transform: pos(lx, ly, "translate(-50%,-50%)"),
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00FF6A",
                  boxShadow: "0 0 0 3px rgba(0,255,106,0.06)",
                }}
              />

              {/* Line nối tới title */}
              <div
                style={{
                  ...base,
                  transform: pos(
                    right ? lx + 8 : tx + 8,
                    ly,
                    "translate(0,-50%)"
                  ),
                  width: w,
                  height: 1,
                  background: "rgba(0,255,106,0.8)",
                }}
              />

              {/* Title */}
              <div
                style={{
                  ...base,
                  transform: pos(
                    tx,
                    ly,
                    `translate(${right ? "0" : "-100%"}, -50%)`
                  ),
                  whiteSpace: "nowrap",
                  color: "#E6FFF0",
                  fontSize: sizes.fontSize,
                  lineHeight: "20px",
                  maxWidth: "40vw",
                  textAlign: right ? "left" : "right",
                }}
              >
                {f.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
