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

    // MFL "Printer Friendly" reports usually structure teams in tables
    // Strategy: Split the HTML by "<caption>" tags, which usually hold the Team Name
    const sections = htmlText.split('<caption');

    // Skip the first chunk (header garbage)
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];

      // 1. Extract Team Name (and Owner if present)
      // It usually looks like: ">Hipster Doofus (Corey Thoesen)</caption>"
      const headerMatch = section.match(/>(.*?)(?:\((.*?)\))?<\/caption>/);
      const teamName = headerMatch ? headerMatch[1].trim() : "Unknown Team";
      const ownerName = headerMatch && headerMatch[2] ? headerMatch[2].trim() : "Unknown Owner";

      // 2. Find all table rows
      const rowMatches = section.matchAll(/<tr[^>]*>(.*?)<\/tr>/gs);

      for (const row of rowMatches) {
        const rowContent = row[1];
        
        // 3. Extract cells (td)
        // This regex finds content between > and </td>
        const cells = [...rowContent.matchAll(/<td[^>]*>(.*?)<\/td>/gs)].map(m => {
            // Strip HTML tags from the cell content to get just the text
            return m[1].replace(/<[^>]*>/g, '').trim();
        });

        // Skip header rows (usually have "Player" or "Status" in them)
        if (cells.length < 3 || cells[0].includes('Player')) continue;

        // 4. Map the columns to your data structure
        // MFL Roster Report columns usually are:
        // [0] Player, [1] Bye, [2] Status/Pts, [3] Years, [4] Salary/Acquired?
        // Note: You might need to adjust these indices based on your specific report columns!
        // Based on your CSV, we'll try to map common positions.
        
        players.push({
          Team: teamName,
          Owner: ownerName,
          Player: cells[0],   // 1st column is usually Player Name
          Acquired: cells[cells.length - 1], // Last column is often 'Acquired' or 'Salary'
          Years: cells[cells.length - 2]     // 2nd to last often 'Years' or 'Contract'
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