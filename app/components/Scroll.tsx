"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./scroll.module.css";

function Pill({ text }: { text: string }) {
  return (
    <div contentEditable suppressContentEditableWarning className={styles.pill}>
      {text}
    </div>
  );
}

function Lego({ type = "blue" }: { type?: "blue" | "yellow" }) {
  return (
    <img
      src={type === "blue" ? "/lego-blue.png" : "/lego-yellow.png"}
      className={styles.lego}
      alt=""
    />
  );
}

function Row({
  items,
  icons = [],
  reverse = false,
}: {
  items: string[];
  icons?: number[];
  reverse?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const width = el.scrollWidth / 2;

    gsap.to(el, {
      x: reverse ? width : -width,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const value = parseFloat(x);
          return gsap.utils.wrap(-width, 0, value);
        }),
      },
    });
  }, [reverse]);

  /* Build sequence data (not JSX) */
  const buildSequence = (prefix: string) => {
    const seq: any[] = [];

    items.forEach((item, i) => {
      seq.push(
        <Pill key={`${prefix}-pill-${i}`} text={item} />
      );

      if (icons.includes(i)) {
        seq.push(
          <Lego
            key={`${prefix}-lego-${i}`}
            type={i % 2 === 0 ? "yellow" : "blue"}
          />
        );
      }
    });

    return seq;
  };

  return (
    <div className={styles.wrapper}>
      <div ref={trackRef} className={styles.track}>
        {buildSequence("a")}
        {buildSequence("b")}
      </div>
    </div>
  );
}

export default function Scroll() {
  return (
    <div className={styles.container}>
      <Row
        items={[
          "HTML",
          "CSS",
          "Java Script",
          "React js",
          "Next js",
          "Docker",
          "Node js",
          "Typescript",
          "Mongo DB",
          "Next js",
        ]}
        icons={[0, 2, 4]}
      />

      <Row
        items={[
          "Vite",
          "Express",
          "Java Script",
          "React js",
          "Next js",
          "Docker",
          "Node js",
          "Typescript",
          "Mongo DB",
          "Next js",
        ]}
        icons={[1, 3]}
        reverse
      />

      <Row
        items={[
           "HTML",
          "CSS",
          "Java Script",
          "React js",
          "Next js",
          "HTML",
          "CSS",
          "Java Script",
          "React js",
          "Next js",
          
        ]}
        icons={[0, 2]}
      />
    </div>
  );
}