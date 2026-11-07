"use client";

import { useEffect, useRef, useState } from "react";
import { NativeLink } from "@/components/native-link";
import { modelInfo, type Mode } from "@/lib/model-info";

type Controls = {
  rotate: (amount: number) => void;
  reset: () => void;
  play: (value: boolean) => void;
};

function ModelFallback({ mode }: { mode: Mode }) {
  const points =
    mode === "trust"
      ? [
          [110, 210],
          [300, 70],
          [490, 210],
        ]
      : mode === "decision"
        ? [
            [90, 160],
            [300, 60],
            [300, 160],
            [300, 260],
            [510, 160],
          ]
        : mode === "data"
          ? [
              [300, 150],
              [90, 65],
              [510, 65],
              [80, 255],
              [300, 270],
              [520, 255],
            ]
          : [
              [110, 70],
              [110, 130],
              [110, 190],
              [110, 250],
              [300, 50],
              [300, 105],
              [300, 160],
              [300, 215],
              [300, 270],
              [490, 160],
            ];
  const edges =
    mode === "trust"
      ? [
          [0, 1],
          [1, 2],
          [0, 2],
        ]
      : mode === "decision"
        ? [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
            [2, 4],
            [3, 4],
          ]
        : mode === "data"
          ? [
              [0, 1],
              [0, 2],
              [0, 3],
              [0, 4],
              [0, 5],
            ]
          : points
              .slice(0, 4)
              .flatMap((_, i) => [4, 5, 6, 7, 8].map((j) => [i, j]))
              .concat([4, 5, 6, 7, 8].map((i) => [i, 9]));
  return (
    <svg
      className="model-static"
      viewBox="0 0 600 320"
      role="img"
      aria-label={`${modelInfo[mode].caption}. Conceptual diagram.`}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="#83b7d8"
          strokeOpacity=".5"
          strokeWidth="2"
        />
      ))}
      {points.map(([x, y], i) =>
        mode === "data" ? (
          <rect
            key={i}
            x={x - 19}
            y={y - 19}
            width="38"
            height="38"
            rx="5"
            fill="#9bd4f5"
            stroke="#e4f5ff"
            strokeWidth="2"
          />
        ) : (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={mode === "network" ? 13 : 20}
            fill={i % 2 ? "#c8f582" : "#9bd4f5"}
            stroke="#e4f5ff"
            strokeWidth="2"
          />
        ),
      )}
      {(mode === "data"
        ? points.map(([x, y], i) => ({
            x,
            y: y + 35,
            text: [
              "Location",
              "Delivery",
              "Status",
              "Reviews",
              "Promotion",
              "Scan",
            ][i],
          }))
        : mode === "trust"
          ? [
              { x: 110, y: 255, text: "Personalisation" },
              { x: 300, y: 115, text: "Trust" },
              { x: 490, y: 255, text: "Loyalty" },
            ]
          : mode === "decision"
            ? [
                { x: 90, y: 205, text: "Assumptions" },
                { x: 300, y: 305, text: "Illustrative scenarios" },
                { x: 510, y: 205, text: "Decision" },
              ]
            : [
                { x: 110, y: 308, text: "Customer attributes" },
                { x: 300, y: 308, text: "Hidden layer" },
                { x: 490, y: 205, text: "Churn score" },
              ]
      ).map((label) => (
        <text
          key={label.text}
          x={label.x}
          y={label.y}
          fill="#e8f1fb"
          fontSize="18"
          textAnchor="middle"
        >
          {label.text}
        </text>
      ))}
    </svg>
  );
}

export function ModelExplorer({
  initialMode = "trust",
  compact = false,
}: {
  initialMode?: Mode;
  compact?: boolean;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">(
    "loading",
  );
  const [playing, setPlaying] = useState(false);
  const [diagramOnly, setDiagramOnly] = useState(false);
  const displayStatus = diagramOnly ? "fallback" : status;
  const mount = useRef<HTMLDivElement>(null);
  const controls = useRef<Controls | null>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host || diagramOnly) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    let started = false;
    let inView = false;
    let wake: (() => void) | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        wake?.();
        if (!inView || started) return;
        started = true;
        void initialize();
      },
      { rootMargin: "0px", threshold: 0.01 },
    );
    observer.observe(host);

    async function initialize() {
      try {
        const T = await import("three");
        if (disposed || !host) return;
        const renderer = new T.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        const resources: Array<{ dispose: () => void }> = [];
        const keep = <D extends { dispose: () => void }>(resource: D): D => {
          resources.push(resource);
          return resource;
        };
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x0b1420, 0);
        renderer.outputColorSpace = T.SRGBColorSpace;
        renderer.domElement.setAttribute("aria-hidden", "true");
        host.appendChild(renderer.domElement);
        const scene = new T.Scene();
        const camera = new T.PerspectiveCamera(38, 1, 0.1, 60);
        camera.position.set(0, 1, 10);
        camera.lookAt(0, 0, 0);
        scene.add(new T.HemisphereLight(0xd8ffff, 0x132239, 2.8));
        const key = new T.DirectionalLight(0xffffff, 4);
        key.position.set(-3, 5, 4);
        scene.add(key);
        const fill = new T.DirectionalLight(0x73dfed, 3);
        fill.position.set(4, 1, -2);
        scene.add(fill);
        const model = new T.Group();
        model.rotation.set(0.06, -0.18, 0);
        scene.add(model);
        const colours = [0x9fd5ee, 0xc8f582, 0xa9a5ff];
        const sphere = keep(new T.SphereGeometry(1, 32, 20));
        const materials = colours.map((color) =>
          keep(
            new T.MeshStandardMaterial({
              color,
              metalness: 0.48,
              roughness: 0.23,
            }),
          ),
        );
        const connectorMaterial = keep(
          new T.MeshStandardMaterial({
            color: 0x7193a5,
            metalness: 0.3,
            roughness: 0.5,
          }),
        );
        function node(
          x: number,
          y: number,
          z: number,
          radius: number,
          colour: number,
        ) {
          const mesh = new T.Mesh(sphere, materials[colour]);
          mesh.position.set(x, y, z);
          mesh.scale.setScalar(radius);
          model.add(mesh);
          return mesh.position.clone();
        }
        function link(
          a: InstanceType<typeof T.Vector3>,
          b: InstanceType<typeof T.Vector3>,
          radius: number,
          arrows = false,
        ) {
          const delta = b.clone().sub(a);
          const length = delta.length();
          const direction = delta.clone().normalize();
          const cylinder = new T.Mesh(
            keep(new T.CylinderGeometry(radius, radius, length, 8)),
            connectorMaterial,
          );
          cylinder.position.copy(a).add(b).multiplyScalar(0.5);
          cylinder.quaternion.setFromUnitVectors(
            new T.Vector3(0, 1, 0),
            direction,
          );
          model.add(cylinder);
          if (arrows) {
            const arrow = new T.Mesh(
              keep(new T.ConeGeometry(0.1, 0.24, 12)),
              connectorMaterial,
            );
            arrow.position.copy(a).lerp(b, 0.7);
            arrow.quaternion.copy(cylinder.quaternion);
            model.add(arrow);
          }
        }
        function label(text: string, x: number, y: number, z: number) {
          const canvas = document.createElement("canvas");
          canvas.width = 768;
          canvas.height = 96;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.font = "500 38px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#eef5fa";
          ctx.fillText(text, 384, 48);
          const texture = keep(new T.CanvasTexture(canvas));
          texture.colorSpace = T.SRGBColorSpace;
          const sprite = new T.Sprite(
            keep(
              new T.SpriteMaterial({
                map: texture,
                depthTest: false,
                transparent: true,
              }),
            ),
          );
          sprite.position.set(x, y, z);
          sprite.scale.set(3.5, 0.4375, 1);
          model.add(sprite);
        }
        if (mode === "trust") {
          const a = node(-2, -0.6, 0.3, 0.43, 0);
          const b = node(0, 1.1, -0.2, 0.6, 1);
          const c = node(2, -0.6, 0.3, 0.43, 2);
          link(a, b, 0.035, true);
          link(b, c, 0.035, true);
          link(a, c, 0.015, true);
          label("Personalisation", -2, -1.42, 0.3);
          label("Trust", 0, 2.05, -0.2);
          label("Loyalty", 2, -1.42, 0.3);
          label("B = .575", -1.35, 0.55, 0.3);
          label("B = .526", 1.35, 0.55, 0.3);
        } else if (mode === "decision") {
          const origin = node(-2.4, 0, 0, 0.42, 0);
          const end = node(2.4, 0, 0, 0.5, 2);
          for (const y of [-1.3, 0, 1.3]) {
            const branch = node(0, y, y * 0.3, 0.3, 1);
            link(origin, branch, 0.025, true);
            link(branch, end, 0.025, true);
          }
          label("Assumptions", -2.4, -2.1, 0);
          label("Scenarios", 0, -2.1, 0);
          label("Decision", 2.4, -2.1, 0);
        } else if (mode === "data") {
          const tables = [
            { name: "Location", position: [0, 0.25, 0.2] },
            { name: "Delivery", position: [-2.5, 1.4, 0] },
            { name: "Status", position: [2.5, 1.4, 0] },
            { name: "Reviews", position: [-2.5, -1.4, 0] },
            { name: "Promotion", position: [0, -1.7, -0.8] },
            { name: "Scan", position: [2.5, -1.4, 0] },
          ];
          const blocks = tables.map(({ name, position: [x, y, z] }, i) => {
            const block = new T.Mesh(
              keep(new T.BoxGeometry(0.7, 0.7, 0.7)),
              materials[i % 3],
            );
            block.position.set(x, y, z);
            model.add(block);
            label(name, x, y + 0.65, z);
            return block.position.clone();
          });
          for (const index of [1, 2, 3, 4, 5])
            link(blocks[0], blocks[index], 0.035);
        } else {
          const counts = [4, 5, 1];
          const layers = counts.map((count, layer) =>
            Array.from({ length: count }, (_, i) =>
              node(
                (layer - 1) * 2.1,
                (i - (count - 1) / 2) * 0.65,
                i % 2 ? 0.35 : -0.35,
                layer === 2 ? 0.43 : 0.23,
                layer,
              ),
            ),
          );
          for (let layer = 0; layer < 2; layer++)
            layers[layer].forEach((a) =>
              layers[layer + 1].forEach((b) => link(a, b, 0.012)),
            );
          label("Customer attributes", -2.1, -2, 0);
          label("Hidden layer", 0, -2, 0);
          label("Churn score", 2.1, -2, 0);
        }
        const grid = new T.GridHelper(8, 16, 0x29434e, 0x1a2b39);
        grid.position.y = -2.55;
        scene.add(grid);
        keep(grid.geometry);
        (Array.isArray(grid.material)
          ? grid.material
          : [grid.material]
        ).forEach(keep);
        let frame = 0;
        let auto = false;
        let last = 0;
        const motionPreference = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        );
        function render(time = 0) {
          frame = 0;
          if (disposed || document.hidden || !inView) {
            last = 0;
            return;
          }
          if (auto && !motionPreference.matches)
            model.rotation.y += Math.min((time - last) / 1000 || 0, 0.05) * 0.2;
          last = time;
          renderer.render(scene, camera);
          if (auto && !motionPreference.matches)
            frame = requestAnimationFrame(render);
        }
        const requestRender = () => {
          if (!frame && !disposed) frame = requestAnimationFrame(render);
        };
        wake = requestRender;
        const resize = new ResizeObserver(() => {
          const width = host.clientWidth;
          const height = host.clientHeight;
          if (!width || !height) return;
          camera.aspect = width / height;
          // Fit the full model and labels in narrow chapter columns.
          camera.position.z = Math.max(9.5, 8.8 / Math.max(camera.aspect, 0.4));
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          requestRender();
        });
        resize.observe(host);
        let pointer: { id: number; x: number; y: number } | null = null;
        const down = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
          host.setPointerCapture(event.pointerId);
        };
        const move = (event: PointerEvent) => {
          if (!pointer || pointer.id !== event.pointerId) return;
          model.rotation.y += (event.clientX - pointer.x) * 0.006;
          model.rotation.x = Math.max(
            -0.5,
            Math.min(
              0.5,
              model.rotation.x + (event.clientY - pointer.y) * 0.004,
            ),
          );
          pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
          requestRender();
        };
        const up = () => {
          pointer = null;
        };
        const lost = (event: Event) => {
          event.preventDefault();
          auto = false;
          setPlaying(false);
          setStatus("fallback");
        };
        host.addEventListener("pointerdown", down);
        host.addEventListener("pointermove", move);
        host.addEventListener("pointerup", up);
        host.addEventListener("lostpointercapture", up);
        renderer.domElement.addEventListener("webglcontextlost", lost);
        document.addEventListener("visibilitychange", requestRender);
        const reduce = () => {
          if (motionPreference.matches) {
            auto = false;
            setPlaying(false);
          }
          requestRender();
        };
        motionPreference.addEventListener("change", reduce);
        controls.current = {
          rotate: (amount) => {
            model.rotation.y += amount;
            requestRender();
          },
          reset: () => {
            model.rotation.set(0.06, -0.18, 0);
            requestRender();
          },
          play: (value) => {
            auto = value;
            requestRender();
          },
        };
        cleanup = () => {
          cancelAnimationFrame(frame);
          resize.disconnect();
          host.removeEventListener("pointerdown", down);
          host.removeEventListener("pointermove", move);
          host.removeEventListener("pointerup", up);
          host.removeEventListener("lostpointercapture", up);
          renderer.domElement.removeEventListener("webglcontextlost", lost);
          document.removeEventListener("visibilitychange", requestRender);
          motionPreference.removeEventListener("change", reduce);
          resources.forEach((resource) => resource.dispose());
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
          controls.current = null;
        };
        setStatus("ready");
        requestRender();
      } catch {
        if (!disposed) setStatus("fallback");
      }
    }
    return () => {
      disposed = true;
      observer.disconnect();
      cleanup?.();
    };
  }, [mode, diagramOnly]);

  function changeMode(next: Mode) {
    if (mode === next) return;
    setMode(next);
    setStatus("loading");
    setPlaying(false);
  }
  return (
    <section
      className={`model-explorer${compact ? " model-explorer--compact" : ""}`}
      aria-label="Interactive analytical models"
    >
      <div className="model-heading">
        <span>{modelInfo[mode].title}</span>
        <span>
          {displayStatus === "fallback" ? "Static diagram" : "Interactive 3D"}
        </span>
      </div>
      {!compact && (
        <div className="model-modes" role="group" aria-label="Choose a model">
          {(Object.keys(modelInfo) as Mode[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={mode === key}
              onClick={() => changeMode(key)}
            >
              {modelInfo[key].title}
            </button>
          ))}
        </div>
      )}
      <div
        className="model-view-modes"
        role="group"
        aria-label="Choose model presentation"
      >
        <button
          type="button"
          aria-pressed={!diagramOnly}
          onClick={() => {
            if (diagramOnly) {
              setStatus("loading");
              setDiagramOnly(false);
            }
          }}
        >
          3D view
        </button>
        <button
          type="button"
          aria-pressed={diagramOnly}
          onClick={() => {
            setPlaying(false);
            setDiagramOnly(true);
          }}
        >
          Static diagram
        </button>
      </div>
      <div className="model-viewport" ref={mount}>
        {displayStatus !== "ready" && (
          <div className="model-fallback">
            <ModelFallback mode={mode} />
            <p>{modelInfo[mode].caption}</p>
            <small>
              {displayStatus === "loading"
                ? "Preparing 3D view. The findings are available below."
                : "Static diagram shown. The explanation is available below."}
            </small>
          </div>
        )}
      </div>
      <div
        className="model-controls"
        role="group"
        aria-label="3D view controls"
      >
        <span>
          {displayStatus === "ready" ? "Drag to explore" : "Diagram view"}
        </span>
        <div>
          <button
            disabled={displayStatus !== "ready"}
            type="button"
            aria-label="Rotate model left"
            onClick={() => controls.current?.rotate(-0.25)}
          >
            ↶
          </button>
          <button
            disabled={displayStatus !== "ready"}
            type="button"
            aria-label="Rotate model right"
            onClick={() => controls.current?.rotate(0.25)}
          >
            ↷
          </button>
          <button
            disabled={displayStatus !== "ready"}
            type="button"
            onClick={() => controls.current?.reset()}
          >
            Reset
          </button>
          <button
            className="auto-rotate"
            disabled={displayStatus !== "ready"}
            type="button"
            aria-pressed={playing}
            onClick={() => {
              const next = !playing;
              setPlaying(next);
              controls.current?.play(next);
            }}
          >
            {playing ? "Pause" : "Auto rotate"}
          </button>
        </div>
      </div>
      <div className="model-note" aria-live="polite">
        <strong>{modelInfo[mode].caption}</strong>
        <p>{modelInfo[mode].detail}</p>
        <NativeLink href={`/work/${modelInfo[mode].path}#evidence`}>
          Read the supporting case ↗
        </NativeLink>
      </div>
    </section>
  );
}
