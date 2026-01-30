import React, { useState, useMemo } from 'react';
import { Search, Award, XCircle, CheckCircle, AlertCircle, Trophy } from 'lucide-react';

// Use the data you provided in the CSV variable
const csvData = `Team,Owner,Player,YTD Pts,Bye,Years,Keeper,Acquired
Hipster Doofus,Corey Thoesen,"Mariota, Marcus WAS QB (Q)",158.55,12,,,
Hipster Doofus,Corey Thoesen,"Williams, Caleb CHI QB",378.3,5,,,9.07
Hipster Doofus,Corey Thoesen,"Charbonnet, Zach SEA RB (I)",165.7,8,,,8.06
Hipster Doofus,Corey Thoesen,"Henderson, TreVeyon NEP RB (R)",221.35,14,,,2.06
Hipster Doofus,Corey Thoesen,"Mixon, Joe HOU RB (I)",‐,6,,,10.05
Hipster Doofus,Corey Thoesen,"Tuten, Bhayshul JAC RB (R)",107.55,8,,,10.06
Hipster Doofus,Corey Thoesen,"Williams, Kyren LAR RB",255.6,8,1,K11,11.07
Hipster Doofus,Corey Thoesen,"Aiyuk, Brandon SFO WR (H)",‐,14,,,15.07
Hipster Doofus,Corey Thoesen,"Ayomanor, Elic TEN WR (R)",108.5,10,,,
Hipster Doofus,Corey Thoesen,"Egbuka, Emeka TBB WR (R)",206.9,9,,,5.07
Hipster Doofus,Corey Thoesen,"Lamb, CeeDee DAL WR",221.5,10,,,1.07
Hipster Doofus,Corey Thoesen,"McMillan, Tetairoa CAR WR (R)",208.9,14,,,3.07
Hipster Doofus,Corey Thoesen,"Odunze, Rome CHI WR",152.1,5,3,K6,6.06
Hipster Doofus,Corey Thoesen,"Reed, Jayden GBP WR",49.55,5,,,5.06
Hipster Doofus,Corey Thoesen,"Bowers, Brock LVR TE (I)",182.6,8,3,K7,7.12
Hipster Doofus,Corey Thoesen,"Fannin, Harold CLE TE (R) (Q)",189.4,9,,,
Hipster Doofus,Corey Thoesen,"Mevis, Harrison LAR PK",66,8,,,
Hipster Doofus,Corey Thoesen,"Bears, Chicago CHI Def",114,5,,,
Wa Wa Wee Wa ,Mike Stein,"Burrow, Joe CIN QB",146.05,10,,,3.04
Wa Wa Wee Wa ,Mike Stein,"Dart, Jaxson NYG QB (R)",259.9,14,,,16.01
Wa Wa Wee Wa ,Mike Stein,"Carter, Michael ARI RB",93.45,8,,,
Wa Wa Wee Wa ,Mike Stein,"Harvey, RJ DEN RB (R)",222.05,12,,,4.01
Wa Wa Wee Wa ,Mike Stein,"Marks, Woody HOU RB (R)",144.8,6,,,14.06
Wa Wa Wee Wa ,Mike Stein,"Mitchell, Keaton BAL RB",81.75,7,,,18.01
Wa Wa Wee Wa ,Mike Stein,"Pollard, Tony TEN RB",189.3,10,,,4.09
Wa Wa Wee Wa ,Mike Stein,"Swift, D'Andre CHI RB",236,5,,,4.06
Wa Wa Wee Wa ,Mike Stein,"Taylor, Jonathan IND RB",381.4,11,,,1.12
Wa Wa Wee Wa ,Mike Stein,"Tracy, Tyrone NYG RB",140.3,14,3,K15,15.08
Wa Wa Wee Wa ,Mike Stein,"Brown, A.J. PHI WR",235.3,9,,,2.05
Wa Wa Wee Wa ,Mike Stein,"Evans, Mike TBB WR",82.4,9,,,2.11
Wa Wa Wee Wa ,Mike Stein,"London, Drake ATL WR",199.1,5,,,2.01
Wa Wa Wee Wa ,Mike Stein,"Pittman, Michael IND WR",202.3,11,,,6.01
Wa Wa Wee Wa ,Mike Stein,"Waddle, Jaylen MIA WR (Q)",201.2,12,,,5.12
Wa Wa Wee Wa ,Mike Stein,"McBride, Trey ARI TE",311.4,8,2,K12,12.06
Wa Wa Wee Wa ,Mike Stein,"Aubrey, Brandon DAL PK",179.6,10,,,11.12
Wa Wa Wee Wa ,Mike Stein,"Lions, Detroit DET Def",100,8,,,13.06
Phoenix Force,Chris Culbreath,"Allen, Josh BUF QB (Q)",449.3,7,,,2.03
Phoenix Force,Chris Culbreath,"Hubbard, Chuba CAR RB",133.35,14,3,K6,6.03
Phoenix Force,Chris Culbreath,"Jacobs, Josh GBP RB",239.1,5,,,1.1
Phoenix Force,Chris Culbreath,"Knight, Bam ARI RB (I)",105.9,8,,,
Phoenix Force,Chris Culbreath,"Pacheco, Isiah KCC RB",87.6,10,,,5.1
Phoenix Force,Chris Culbreath,"Perine, Samaje CIN RB",91.2,10,,,
Phoenix Force,Chris Culbreath,"Wilson, Emanuel GBP RB",102.3,5,,,
Phoenix Force,Chris Culbreath,"Allen, Keenan LAC WR",175.1,12,,,11.1
Phoenix Force,Chris Culbreath,"Bond, Isaiah CLE WR (R)",52.55,9,,,14.03
Phoenix Force,Chris Culbreath,"Higgins, Jayden HOU WR (R)",123.2,6,,,9.1
Phoenix Force,Chris Culbreath,"McConkey, Ladd LAC WR",188.05,12,3,K7,7.1
Phoenix Force,Chris Culbreath,"Nacua, Puka LAR WR",371,8,2,K12,12.03
Phoenix Force,Chris Culbreath,"Wilson, Garrett NYJ WR (I)",99.5,9,1,K4,4.03
Phoenix Force,Chris Culbreath,"Kelce, Travis KCC TE",‐,10,,,13.1
Phoenix Force,Chris Culbreath,"Zuerlein, Greg NYJ PK",‐,9,,,
Phoenix Force,Chris Culbreath,"Commanders, Washington WAS Def",118,12,,,`; // Keep your CSV string here

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const players = useMemo(() => parseCSV(csvData), []);

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