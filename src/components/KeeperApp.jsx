import React, { useState, useMemo, useEffect } from 'react';
import { Search, Award, XCircle, CheckCircle, AlertCircle, Trophy, Loader2 } from 'lucide-react';


function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) { values.push(current.trim()); current = ''; }
      else { current += char; }
    }
    values.push(current.trim());
    const obj = {};
    headers.forEach((header, i) => { obj[header.trim()] = values[i] || ''; });
    return obj;
  });
}

function calculateKeeperStatus(player) {
  const isRookie = player.Player.includes('(R)');
  const acquired = player.Acquired;
  const currentYears = player.Years ? parseInt(player.Years) : null;
  let acquiredRound = null;
  if (acquired) {
    const match = acquired.match(/^(\d+)\./);
    if (match) acquiredRound = parseInt(match[1]);
  }

  if (acquiredRound && acquiredRound <= 3) {
    return { eligible: false, reason: 'Rounds 1-3 ineligible', nextRound: null, yearsRemaining: null };
  }

  let yearsRemaining = currentYears === null ? 3 : currentYears - 1;
  if (yearsRemaining <= 0) {
    return { eligible: false, reason: '0 years left', nextRound: null, yearsRemaining: 0 };
  }

  let nextRound;
  if (!acquired) nextRound = 12;
  else if (isRookie) nextRound = acquiredRound;
  else nextRound = Math.max(1, acquiredRound - 2);

  return { eligible: true, nextRound, yearsRemaining, isRookie };
}

export default function KeeperApp() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');

    useEffect(() => {
    async function fetchData() {
      try {
        // Fetch from your own local Astro API route
        // This bypasses CORS completely because it's the same domain
        const response = await fetch('/api/league-data'); 
        
        if (!response.ok) throw new Error('Failed to fetch league data');
        
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setPlayers(parsedData);
      } catch (err) {
        setError("Error loading league data.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const teams = useMemo(() => {
    const teamMap = new Map();
    players.forEach(player => {
      if (!teamMap.has(player.Team)) {
        teamMap.set(player.Team, { name: player.Team, owner: player.Owner, players: [] });
      }
      teamMap.get(player.Team).players.push({ ...player, keeperStatus: calculateKeeperStatus(player) });
    });
    return Array.from(teamMap.values());
  }, [players]);

  const filteredTeams = useMemo(() => {
    let result = teams;
    if (selectedTeam !== 'all') result = result.filter(t => t.name === selectedTeam);
    if (searchTerm) {
      result = result.map(t => ({
        ...t,
        players: t.players.filter(p => p.Player.toLowerCase().includes(searchTerm.toLowerCase()))
      })).filter(t => t.players.length > 0);
    }
    return result;
  }, [teams, selectedTeam, searchTerm]);

if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-400">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          {/* Explicitly size the icon to prevent the "giant icon" bug */}
          <Trophy className="w-8 h-8 text-purple-400 flex-shrink-0" />
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            KKL Keeper Manager
          </h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search players..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 outline-none"
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="all">All Teams</option>
          {teams.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
        </select>
      </div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto space-y-6">
        {filteredTeams.map(team => (
          <div key={team.name} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <h2 className="text-xl font-bold text-purple-300">{team.name}</h2>
              <p className="text-slate-500 text-sm">{team.owner}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs uppercase text-slate-500 bg-slate-950/50">
                    <th className="px-6 py-3">Player</th>
                    <th className="px-6 py-3">Acquired</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">2026 Round</th>
                    <th className="px-6 py-3">Years Left</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {team.players.map((p, i) => (
                    <tr key={i} className={p.keeperStatus.eligible ? "hover:bg-purple-500/5" : "opacity-40"}>
                      <td className="px-6 py-4 font-medium">{p.Player}</td>
                      <td className="px-6 py-4 text-slate-400">{p.Acquired || 'FA'}</td>
                      <td className="px-6 py-4">
                        {p.keeperStatus.eligible ? (
                          <span className="flex items-center gap-1 text-green-400 text-sm font-bold">
                            <CheckCircle className="w-4 h-4" /> Eligible
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-400 text-sm">
                            <XCircle className="w-4 h-4" /> {p.keeperStatus.reason}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {p.keeperStatus.eligible ? (
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-bold border border-purple-500/30">
                            RD {p.keeperStatus.nextRound} {p.keeperStatus.isRookie && '(R)'}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                        {p.keeperStatus.eligible ? `${p.keeperStatus.yearsRemaining}y` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}