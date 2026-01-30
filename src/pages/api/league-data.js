export async function GET({ params, request }) {
    const MFL_URL = "https://www47.myfantasyleague.com/2025/options?L=45267&O=07&PRINTER=1";
    
    try {
      const response = await fetch(MFL_URL);
      if (!response.ok) {
        return new Response("Failed to fetch MFL data", { status: 500 });
      }
      const csvText = await response.text();
      
      return new Response(csvText, {
        status: 200,
        headers: {
          "Content-Type": "text/csv"
        }
      });
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  }