import { NextResponse } from "next/server";

export async function GET() {
  const username = "BerrySeriousCoder";
  try {
    // Fetch default ghchart SVG with raw data-score attributes
    const res = await fetch(`https://ghchart.rshah.org/${username}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch graph from ghchart: ${res.status}`);
    }

    const rawSvg = await res.text();

    // Map each GitHub contribution score (0-4) to exact GitHub Dark Mode colors:
    // Score 0 (no contributions): #161b22
    // Score 1 (low activity): #0e4429
    // Score 2 (medium activity): #006d32
    // Score 3 (high activity): #26a641
    // Score 4 (maximum activity): #39d353
    // Text labels: #a1a1aa
    const transformedSvg = rawSvg
      .replace(/style="fill:#eeeeee;/gi, 'style="fill:#161b22;')
      .replace(/style="fill:#c6e48b;/gi, 'style="fill:#0e4429;')
      .replace(/style="fill:#7bc96f;/gi, 'style="fill:#006d32;')
      .replace(/style="fill:#239a3b;/gi, 'style="fill:#26a641;')
      .replace(/style="fill:#196127;/gi, 'style="fill:#39d353;')
      .replace(/#767676/gi, "#a1a1aa");

    return new NextResponse(transformedSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error in /api/github-graph:", error);
    
    // Fallback minimal SVG placeholder
    const fallbackSvg = `<svg width="650" height="110" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#000000"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#71717a" font-family="monospace" font-size="12">
        GitHub Activity Graph (@BerrySeriousCoder)
      </text>
    </svg>`;

    return new NextResponse(fallbackSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  }
}
