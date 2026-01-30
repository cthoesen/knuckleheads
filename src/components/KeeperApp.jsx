import React, { useState, useMemo, useEffect } from 'react';
import { Search, Award, XCircle, CheckCircle, AlertCircle, Trophy, Loader2 } from 'lucide-react';


function calculateKeeperStatus(player) {
  if (!player || !player.Player) {
    return {
      eligible: false,
      reason: 'Invalid player data',
      nextRound: null,
      yearsRemaining: 0,
    };
  }

  const isRookie = player.Player.includes('(R)');
  const acquiredRaw = player.Acquired?.trim();
  const acquiredRound = acquiredRaw ? parseInt(acquiredRaw) : null;

  // YEARS LOGIC
  let yearsRemaining;
  if (!player.Years || player.Years.trim() === '') {
    yearsRemaining = 3;
  } else {
    yearsRemaining = parseInt(player.Years) - 1;
  }

  if (yearsRemaining <= 0) {
    return {
      eligible: false,
      reason: 'No keeper years remaining',
      nextRound: null,
      yearsRemaining: 0,
    };
  }

  // ROUND 1–3 BLOCK
  if (acquiredRound && acquiredRound <= 3) {
    return {
      eligible: false,
      reason: 'Drafted in rounds 1–3',
      nextRound: null,
      yearsRemaining,
    };
  }

  // NEXT ROUND CALCULATION
  let nextRound;

  if (!acquiredRound) {
    // Undrafted / FA
    nextRound = 12;
  } else if (isRookie) {
    nextRound = acquiredRound;
  } else {
    nextRound = acquiredRound - 2;
  }

  if (nextRound <= 0) {
    return {
      eligible: false,
      reason: 'Invalid draft round',
      nextRound: null,
      yearsRemaining,
    };
  }

  return {
    eligible: true,
    reason: 'Eligible keeper',
    nextRound,
    yearsRemaining,
  };
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
        // Fetch from our new local "Translator" API
        const response = await fetch('/api/league-data');
        if (!response.ok) throw new Error('Failed to fetch league data');
        
        const data = await response.json();
        console.log("Fetched Data:", data); // Check your console to see what we got!
        setPlayers(data);
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
      // Skip entries with no Player name (malformed data)
      if (!player.Player) return;
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

// Show message when no players are loaded
  if (players.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4" />
          <p>No player data available</p>
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