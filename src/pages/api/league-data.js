// src/pages/api/league-data.js

export async function GET({ params, request }) {
  const MFL_URL = "https://www47.myfantasyleague.com/2025/options?L=45267&O=07&PRINTER=1";
  
  try {
    const response = await fetch(MFL_URL);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch MFL data" }), { status: 500 });
    }
    
    const htmlText = await response.text();
    const players = [];

    // Split by table captions (team headers)
    const sections = htmlText.split('<caption');

    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];

      // Extract Team Name and Owner
      const headerMatch = section.match(/>(.*?)(?:\((.*?)\))?<\/caption>/);
      const teamName = headerMatch ? headerMatch[1].trim() : "Unknown Team";
      const ownerName = headerMatch && headerMatch[2] ? headerMatch[2].trim() : "Unknown Owner";

      // Find all table rows
      const rowMatches = section.matchAll(/<tr[^>]*>(.*?)<\/tr>/gs);

      for (const row of rowMatches) {
        const rowContent = row[1];
        
        // Extract cells (td) - preserve empty cells
        const cellMatches = [...rowContent.matchAll(/<td[^>]*>(.*?)<\/td>/gs)];
        const cells = cellMatches.map(m => {
          // Strip HTML tags but preserve the content (even if empty)
          return m[1].replace(/<[^>]*>/g, '').trim();
        });

        // Skip header rows
        if (cells.length < 3 || cells[0].includes('Player')) continue;

        // MFL Roster Report columns (based on your CSV):
        // [0] Player
        // [1] YTD Pts (ignore)
        // [2] Bye (ignore)
        // [3] Years
        // [4] Keeper (K11, K12, etc. or blank)
        // [5] Acquired (round.pick format or blank)
        
        players.push({
          Team: teamName,
          Owner: ownerName,
          Player: cells[0] || '',
          Years: cells[3] || '',           // Years column
          Keeper: cells[4] || '',          // Keeper column (K11, etc.)
          Acquired: cells[5] || ''         // Acquired column (17.06 format)
        });
      }
    }
    
    return new Response(JSON.stringify(players), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
