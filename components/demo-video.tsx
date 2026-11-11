"use client";

import { useEffect, useRef } from "react";
import { publicPath } from "@/lib/paths";

export function RouteDemoVideo() {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.current?.pause();
    }
  }, []);
  return (
    <figure className="cover-video">
      <video
        ref={video}
        src={publicPath("/media/route-and-margin-demo.mp4")}
        poster={publicPath("/media/route-and-margin-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Route and Margin running: shift overview, route replay, costs and customer review"
      />
      <figcaption>
        <strong>Live recording</strong>
        <span>The working app, unedited · simulated data</span>
      </figcaption>
    </figure>
  );
}
