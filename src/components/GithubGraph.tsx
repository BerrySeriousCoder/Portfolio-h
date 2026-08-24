"use client";

import { useEffect, useState } from "react";

export default function GithubGraph() {
  const [graphUrl, setGraphUrl] = useState("/api/github-graph");

  useEffect(() => {
    // Bust browser cache to ensure fresh SVG colors load
    setGraphUrl(`/api/github-graph?v=${Date.now()}`);
  }, []);

  return (
    <div className="w-full overflow-x-auto py-1">
      <img
        src={graphUrl}
        alt="Harsh Vardhan Singh Official GitHub Contribution Graph"
        className="w-full h-auto min-w-[550px] opacity-95 hover:opacity-100 transition-opacity"
        loading="lazy"
      />
    </div>
  );
}
