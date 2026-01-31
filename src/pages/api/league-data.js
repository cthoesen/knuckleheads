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

      // Extract Team Name from anchor tag and Owner from ownername span
      // Pattern: <a ...>Hipster Doofus</a><span class="ownername"> - Corey Thoesen</span>
      const teamMatch = section.match(/<a[^>]*>([^<]+)<\/a>/);
      const ownerMatch = section.match(/<span class="ownername">\s*-\s*([^<]+)<\/span>/);
      
      const teamName = teamMatch ? teamMatch[1].trim() : "Unknown Team";
      const ownerName = ownerMatch ? ownerMatch[1].trim() : "Unknown Owner";

      // Find all table rows
      const rowMatches = section.matchAll(/<tr[^>]*>(.*?)<\/tr>/gs);

      for (const row of rowMatches) {
        const rowContent = row[1];
        
        // Skip if this is a header row (has th tags)
        if (rowContent.includes('<th')) continue;
        
        // Extract all td cells with their class names
        const cellMatches = [...rowContent.matchAll(/<td\s+class="([^"]*)"[^>]*>(.*?)<\/td>/gs)];
        
        // Skip if not enough cells
        if (cellMatches.length < 4) continue;
        
        // Build a map of class -> content for easier access
        const cellMap = {};
        cellMatches.forEach(match => {
          const className = match[1];
          const content = match[2].replace(/<[^>]*>/g, '').trim();
          cellMap[className] = content;
        });
        
        // Skip rows without player data
        if (!cellMap['player']) continue;
        
        // Map the columns based on MFL class names:
        // class="player" -> Player name
        // class="points" -> YTD Pts (we'll ignore this)
        // class="week" -> Bye (we'll ignore this)
        // class="contractyear" -> Years
        // class="contractinfo" -> Keeper (K11, K12, etc.)
        // class="drafted" -> Acquired (9.07, 17.06, etc.)
        
        players.push({
          Team: teamName,
          Owner: ownerName,
          Player: cellMap['player'] || '',
          Years: cellMap['contractyear'] || '',
          Keeper: cellMap['contractinfo'] || '',
          Acquired: cellMap['drafted'] || ''
        });
      }
    }
    
    console.log("Parsed players sample:", players.slice(0, 3)); // Log first 3 for debugging
    console.log("Total players parsed:", players.length);
    
    return new Response(JSON.stringify(players), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error in league-data:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
