import { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

let activeZIndex = 10;

export function useDraggable() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const bringToFront = () => {
    if (nodeRef.current) {
      activeZIndex++;
      nodeRef.current.style.zIndex = activeZIndex.toString();
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    bringToFront();

    if ((e.target as HTMLElement).closest("button")) return;
    if (!nodeRef.current) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = nodeRef.current.getBoundingClientRect();

    const computedStyle = window.getComputedStyle(nodeRef.current);
    // nodeRef.current.style.width = computedStyle.width;
    nodeRef.current.style.left = `${rect.left}px`;
    nodeRef.current.style.top = `${rect.top}px`;
    nodeRef.current.style.transform = "none";

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !nodeRef.current) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    nodeRef.current.style.left = `${newX}px`;
    nodeRef.current.style.top = `${newY}px`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return {
    nodeRef,
    isDragging,
    bringToFront,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
    },
  };
}
