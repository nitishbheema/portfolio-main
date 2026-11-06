import React, { useEffect, useRef } from 'react';

interface CyberVisualProps {
  threatScore?: number;
}

export const CyberVisual: React.FC<CyberVisualProps> = ({ threatScore = 94 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 240);

    // Node representation
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      label?: string;
      isTarget?: boolean;
    }

    const labels = ["URL", "QR-CODE", "BEHAVIOR", "ML-CORE", "INTEL", "RISK-SCORE"];
    const nodes: Node[] = labels.map((label, i) => {
      const angle = (i / labels.length) * Math.PI * 2;
      const radiusDist = 65 + (i % 2) * 20;
      return {
        x: width / 2 + Math.cos(angle) * radiusDist,
        y: height / 2 + Math.sin(angle) * radiusDist,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: i === 3 ? 6 : 4,
        label,
        isTarget: i === 3
      };
    });

    let scanY = 0;
    let scanDirection = 1;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radar grid
      ctx.strokeStyle = 'rgba(37, 51, 43, 0.4)';
      ctx.lineWidth = 1;

      // Concentric circles
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 40, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 85, 0, Math.PI * 2);
      ctx.stroke();

      // Scanline
      scanY += 0.8 * scanDirection;
      if (scanY > height || scanY < 0) scanDirection *= -1;

      const grad = ctx.createLinearGradient(0, scanY - 20, 0, scanY);
      grad.addColorStop(0, 'rgba(117, 240, 168, 0)');
      grad.addColorStop(1, 'rgba(117, 240, 168, 0.15)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 20, width, 20);

      ctx.strokeStyle = 'rgba(117, 240, 168, 0.4)';
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(117, 240, 168, ${0.35 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Center link to all nodes
      nodes.forEach(node => {
        ctx.strokeStyle = 'rgba(117, 240, 168, 0.2)';
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounding
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Draw node
        ctx.fillStyle = node.isTarget ? '#75F0A8' : 'rgba(245, 247, 245, 0.85)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow
        if (node.isTarget) {
          ctx.strokeStyle = 'rgba(117, 240, 168, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Label
        if (node.label) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = node.isTarget ? '#75F0A8' : '#A0AAA3';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      // Central core node
      ctx.fillStyle = '#75F0A8';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full rounded-lg bg-[#080B0A] border border-[#25332B] p-3 overflow-hidden">
      {/* Telemetry Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A0AAA3] border-b border-[#25332B] pb-2 mb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#75F0A8] animate-pulse" />
          <span className="text-[#F5F7F5] font-semibold">NEURAL_THREAT_MAP</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#627068]">CONFIDENCE:</span>
          <span className="text-[#75F0A8] font-bold">{threatScore}%</span>
        </div>
      </div>

      <div className="relative w-full h-[220px]">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Footer Details */}
      <div className="mt-2 pt-2 border-t border-[#25332B] flex items-center justify-between text-[10px] font-mono text-[#627068]">
        <span>Multimodal Threat Architecture</span>
        <span className="text-[#75F0A8]">Real-Time Analysis</span>
      </div>
    </div>
  );
};
