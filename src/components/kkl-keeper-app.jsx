import React, { useState, useMemo } from 'react';
import { Search, Award, XCircle, CheckCircle, AlertCircle, Trophy } from 'lucide-react';

// Parse CSV data
const csvData = `Team,Owner,Player,YTD Pts,Bye,Years,Keeper,Acquired
Hipster Doofus,Corey Thoesen,"Mariota, Marcus WAS QB (Q)",158.55,12,,,
Hipster Doofus,Corey Thoesen,"Williams, Caleb CHI QB",378.3,5,,,9.07
Hipster Doofus,Corey Thoesen,"Charbonnet, Zach SEA RB (I)",165.7,8,,,8.06
Hipster Doofus,Corey Thoesen,"Henderson, TreVeyon NEP RB (R)",221.35,14,,,2.06
Hipster Doofus,Corey Thoesen,"Mixon, Joe HOU RB (I)",‐,6,,,10.05
Hipster Doofus,Corey Thoesen,"Tuten, Bhayshul JAC RB (R)",107.55,8,,,10.06
Hipster Doofus,Corey Thoesen,"Williams, Kyren LAR RB",255.6,8,1,K11,11.07
Hipster Doofus,Corey Thoesen,"Aiyuk, Brandon SFO WR (H)",‐,14,,,15.07
Hipster Doofus,Corey Thoesen,"Ayomanor, Elic TEN WR (R)",108.5,10,,,
Hipster Doofus,Corey Thoesen,"Egbuka, Emeka TBB WR (R)",206.9,9,,,5.07
Hipster Doofus,Corey Thoesen,"Lamb, CeeDee DAL WR",221.5,10,,,1.07
Hipster Doofus,Corey Thoesen,"McMillan, Tetairoa CAR WR (R)",208.9,14,,,3.07
Hipster Doofus,Corey Thoesen,"Odunze, Rome CHI WR",152.1,5,3,K6,6.06
Hipster Doofus,Corey Thoesen,"Reed, Jayden GBP WR",49.55,5,,,5.06
Hipster Doofus,Corey Thoesen,"Bowers, Brock LVR TE (I)",182.6,8,3,K7,7.12
Hipster Doofus,Corey Thoesen,"Fannin, Harold CLE TE (R) (Q)",189.4,9,,,
Hipster Doofus,Corey Thoesen,"Mevis, Harrison LAR PK",66,8,,,
Hipster Doofus,Corey Thoesen,"Bears, Chicago CHI Def",114,5,,,
Wa Wa Wee Wa,Mike Stein,"Burrow, Joe CIN QB",146.05,10,,,3.04
Wa Wa Wee Wa,Mike Stein,"Dart, Jaxson NYG QB (R)",259.9,14,,,16.01
Wa Wa Wee Wa,Mike Stein,"Carter, Michael ARI RB",93.45,8,,,
Wa Wa Wee Wa,Mike Stein,"Harvey, RJ DEN RB (R)",222.05,12,,,4.01
Wa Wa Wee Wa,Mike Stein,"Marks, Woody HOU RB (R)",144.8,6,,,14.06
Wa Wa Wee Wa,Mike Stein,"Mitchell, Keaton BAL RB",81.75,7,,,18.01
Wa Wa Wee Wa,Mike Stein,"Pollard, Tony TEN RB",189.3,10,,,4.09
Wa Wa Wee Wa,Mike Stein,"Swift, D'Andre CHI RB",236,5,,,4.06
Wa Wa Wee Wa,Mike Stein,"Taylor, Jonathan IND RB",381.4,11,,,1.12
Wa Wa Wee Wa,Mike Stein,"Tracy, Tyrone NYG RB",140.3,14,3,K15,15.08
Wa Wa Wee Wa,Mike Stein,"Brown, A.J. PHI WR",235.3,9,,,2.05
Wa Wa Wee Wa,Mike Stein,"Evans, Mike TBB WR",82.4,9,,,2.11
Wa Wa Wee Wa,Mike Stein,"London, Drake ATL WR",199.1,5,,,2.01
Wa Wa Wee Wa,Mike Stein,"Pittman, Michael IND WR",202.3,11,,,6.01
Wa Wa Wee Wa,Mike Stein,"Waddle, Jaylen MIA WR (Q)",201.2,12,,,5.12
Wa Wa Wee Wa,Mike Stein,"McBride, Trey ARI TE",311.4,8,2,K12,12.06
Wa Wa Wee Wa,Mike Stein,"Aubrey, Brandon DAL PK",179.6,10,,,11.12
Wa Wa Wee Wa,Mike Stein,"Lions, Detroit DET Def",100,8,,,13.06
Phoenix Force,Chris Culbreath,"Allen, Josh BUF QB (Q)",449.3,7,,,2.03
Phoenix Force,Chris Culbreath,"Hubbard, Chuba CAR RB",133.35,14,3,K6,6.03
Phoenix Force,Chris Culbreath,"Jacobs, Josh GBP RB",239.1,5,,,1.1
Phoenix Force,Chris Culbreath,"Knight, Bam ARI RB (I)",105.9,8,,,
Phoenix Force,Chris Culbreath,"Pacheco, Isiah KCC RB",87.6,10,,,5.1
Phoenix Force,Chris Culbreath,"Perine, Samaje CIN RB",91.2,10,,,
Phoenix Force,Chris Culbreath,"Wilson, Emanuel GBP RB",102.3,5,,,
Phoenix Force,Chris Culbreath,"Allen, Keenan LAC WR",175.1,12,,,11.1
Phoenix Force,Chris Culbreath,"Bond, Isaiah CLE WR (R)",52.55,9,,,14.03
Phoenix Force,Chris Culbreath,"Higgins, Jayden HOU WR (R)",123.2,6,,,9.1
Phoenix Force,Chris Culbreath,"McConkey, Ladd LAC WR",188.05,12,3,K7,7.1
Phoenix Force,Chris Culbreath,"Nacua, Puka LAR WR",371,8,2,K12,12.03
Phoenix Force,Chris Culbreath,"Wilson, Garrett NYJ WR (I)",99.5,9,1,K4,4.03
Phoenix Force,Chris Culbreath,"Kincaid, Dalton BUF TE (Q)",124.3,7,,,13.1
Phoenix Force,Chris Culbreath,"Njoku, David CLE TE (Q)",86.3,9,,,8.03
Phoenix Force,Chris Culbreath,"Little, Cam JAC PK",145,8,,,
Phoenix Force,Chris Culbreath,"Lutz, Wil DEN PK",116,12,,,
Phoenix Force,Chris Culbreath,"Browns, Cleveland CLE Def",156,9,,,
Karaoke Craig,Ever Rivera,"Goff, Jared DET QB",375.85,8,3,K8,8.1
Karaoke Craig,Ever Rivera,"Herbert, Justin LAC QB",366.15,12,,,9.08
Karaoke Craig,Ever Rivera,"Hall, Breece NYJ RB (Q)",225.7,9,,,2.1
Karaoke Craig,Ever Rivera,"Hunt, Kareem KCC RB",141.9,10,,,17.03
Karaoke Craig,Ever Rivera,"Judkins, Quinshon CLE RB (R) (I)",175.4,9,,,9.03
Karaoke Craig,Ever Rivera,"Kamara, Alvin NOS RB (Q)",100.7,11,,,3.03
Karaoke Craig,Ever Rivera,"Chase, Ja'Marr CIN WR",315.3,10,,,1.03
Karaoke Craig,Ever Rivera,"Doubs, Romeo GBP WR",170.1,5,,,12.1
Karaoke Craig,Ever Rivera,"Jeudy, Jerry CLE WR",120.5,9,3,K7,7.03
Karaoke Craig,Ever Rivera,"Kirk, Christian HOU WR",57.2,6,,,15.03
Karaoke Craig,Ever Rivera,"Kupp, Cooper SEA WR",111.4,8,,,6.1
Karaoke Craig,Ever Rivera,"Samuel, Deebo WAS WR",207.1,12,,,4.1
Karaoke Craig,Ever Rivera,"Williams, Jameson DET WR",223.3,8,2,K11,10.1
Karaoke Craig,Ever Rivera,"Andrews, Mark BAL TE",127.6,7,,,5.03
Karaoke Craig,Ever Rivera,"Schultz, Dalton HOU TE (Q)",166.4,6,,,14.1
Karaoke Craig,Ever Rivera,"McLaughlin, Chase TBB PK",140,9,,,18.1
Karaoke Craig,Ever Rivera,"Myers, Jason SEA PK",189,8,,,
Karaoke Craig,Ever Rivera,"Texans, Houston HOU Def",208,6,,,13.03
Sleepy Hollow Stranglers,Damien Long,"Hurts, Jalen PHI QB",365.3,9,,,3.12
Sleepy Hollow Stranglers,Damien Long,"Benson, Trey ARI RB (I)",35.4,8,,,11.03
Sleepy Hollow Stranglers,Damien Long,"Irving, Bucky TBB RB",134.7,9,3,K17,17.08
Sleepy Hollow Stranglers,Damien Long,"Jeanty, Ashton LVR RB (R)",250.7,8,,,1.08
Sleepy Hollow Stranglers,Damien Long,"Monangai, Kyle CHI RB (R)",146.8,5,,,13.08
Sleepy Hollow Stranglers,Damien Long,"Rodriguez, Chris WAS RB",76.7,12,,,15.12
Sleepy Hollow Stranglers,Damien Long,"Boutte, Kayshon NEP WR",122.7,14,,,
Sleepy Hollow Stranglers,Damien Long,"Burden, Luther CHI WR (R)",142.45,5,,,11.09
Sleepy Hollow Stranglers,Damien Long,"Diggs, Stefon NEP WR",218,14,,,7.07
Sleepy Hollow Stranglers,Damien Long,"Flowers, Zay BAL WR",219.5,7,,,4.05
Sleepy Hollow Stranglers,Damien Long,"Godwin, Chris TBB WR",84.2,9,,,9.12
Sleepy Hollow Stranglers,Damien Long,"Metcalf, DK PIT WR",197.2,5,,,3.08
Sleepy Hollow Stranglers,Damien Long,"Pierce, Alec IND WR",157.1,11,,,
Sleepy Hollow Stranglers,Damien Long,"Wilson, Michael ARI WR",208.7,8,,,
Sleepy Hollow Stranglers,Damien Long,"Gadsden, Oronde LAC TE (R)",130.1,12,,,
Sleepy Hollow Stranglers,Damien Long,"Loveland, Colston CHI TE (R) (Q)",147.2,5,,,8.05
Sleepy Hollow Stranglers,Damien Long,"Boswell, Chris PIT PK",137,5,,,16.09
Sleepy Hollow Stranglers,Damien Long,"Seahawks, Seattle SEA Def",213,8,,,
Fightin Irish Mist,Craig Mayo,"Jones, Daniel IND QB (I)",284.55,11,,,
Fightin Irish Mist,Craig Mayo,"Shough, Tyler NOS QB (R)",183.75,11,,,
Fightin Irish Mist,Craig Mayo,"Stroud, C.J. HOU QB",258,6,2,K13,13.04
Fightin Irish Mist,Craig Mayo,"Brown, Chase CIN RB",273.4,10,2,K11,11.04
Fightin Irish Mist,Craig Mayo,"Chubb, Nick HOU RB",88.9,6,,,9.04
Fightin Irish Mist,Craig Mayo,"Etienne, Trevor CAR RB (R)",56.35,14,,,10.09
Fightin Irish Mist,Craig Mayo,"Gibbs, Jahmyr DET RB",370.6,8,,,1.04
Fightin Irish Mist,Craig Mayo,"Tucker, Sean TBB RB",124.4,9,2,K12,12.09
Fightin Irish Mist,Craig Mayo,"Higgins, Tee CIN WR",201.9,10,,,2.09
Fightin Irish Mist,Craig Mayo,"Mooney, Darnell ATL WR",79.3,5,,,8.09
Fightin Irish Mist,Craig Mayo,"Shakir, Khalil BUF WR",181.9,7,3,K6,5.04
Fightin Irish Mist,Craig Mayo,"TeSlaa, Isaac DET WR (R)",73.1,8,,,18.09
Fightin Irish Mist,Craig Mayo,"Thomas Jr., Brian JAC WR",130.9,8,3,K6,6.09
Fightin Irish Mist,Craig Mayo,"Hockenson, T.J. MIN TE (Q)",112.8,6,3,K7,7.04
Fightin Irish Mist,Craig Mayo,"Otton, Cade TBB TE",99.8,9,,,
Fightin Irish Mist,Craig Mayo,"Loop, Tyler BAL PK (R)",132,7,,,15.09
Fightin Irish Mist,Craig Mayo,"Packers, Green Bay GBP Def",104,5,,,14.01
Fightin Irish Mist,Craig Mayo,"Patriots, New England NEP Def",146,14,,,14.09
Midnight Marauders,Rodney Sasher,"Mayfield, Baker TBB QB",331.6,9,2,K9,9.02
Midnight Marauders,Rodney Sasher,"Rodgers, Aaron PIT QB",273.6,5,,,
Midnight Marauders,Rodney Sasher,"Ward, Cam TEN QB (R) (Q)",237.25,10,,,11.02
Midnight Marauders,Rodney Sasher,"Croskey-Merritt, Jacory WAS RB (R)",147.5,12,,,6.11
Midnight Marauders,Rodney Sasher,"Mason, Jordan MIN RB",122.5,6,3,K12,12.11
Midnight Marauders,Rodney Sasher,"Montgomery, David DET RB",163.45,8,,,5.02
Midnight Marauders,Rodney Sasher,"Robinson, Bijan ATL RB",396.5,5,,,1.02
Midnight Marauders,Rodney Sasher,"Harrison Jr., Marvin ARI WR (I)",127.8,8,,,3.02
Midnight Marauders,Rodney Sasher,"Mims, Marvin DEN WR",143.9,12,,,16.05
Midnight Marauders,Rodney Sasher,"Pickens, George DAL WR",307,10,,,4.11
Midnight Marauders,Rodney Sasher,"Shaheed, Rashid SEA WR",198.8,8,2,K10,10.11
Midnight Marauders,Rodney Sasher,"Watson, Christian GBP WR",141.4,5,,,
Midnight Marauders,Rodney Sasher,"Barner, AJ SEA TE",143.9,8,,,
Midnight Marauders,Rodney Sasher,"Pitts, Kyle ATL TE",202,5,,,13.02
Midnight Marauders,Rodney Sasher,"McPherson, Evan CIN PK",133,10,,,16.07
Midnight Marauders,Rodney Sasher,"Chargers, Los Angeles LAC Def",144,12,,,18.05
Midnight Marauders,Rodney Sasher,"Panthers, Carolina CAR Def",120,14,,,
Over the Hill,Craig Wiesen,"Tagovailoa, Tua MIA QB",215.4,12,,,10.07
Over the Hill,Craig Wiesen,"Young, Bryce CAR QB",257.05,14,,,16.12
Over the Hill,Craig Wiesen,"Etienne, Travis JAC RB",259.1,8,,,6.07
Over the Hill,Craig Wiesen,"Gainwell, Kenneth PIT RB",232.05,5,,,
Over the Hill,Craig Wiesen,"Henry, Derrick BAL RB",289.9,7,,,1.06
Over the Hill,Craig Wiesen,"Neal, Devin NOS RB (R) (I)",67.6,11,,,
Over the Hill,Craig Wiesen,"Walker III, Kenneth SEA RB",184.7,8,,,3.06
Over the Hill,Craig Wiesen,"Addison, Jordan MIN WR",143.3,6,,,9.06
Over the Hill,Craig Wiesen,"Franklin, Troy DEN WR (Q)",177.5,12,,,
Over the Hill,Craig Wiesen,"Johnston, Quentin LAC WR",178.4,12,,,17.06
Over the Hill,Craig Wiesen,"Robinson, Wan'Dale NYG WR (I)",228.95,14,,,18.07
Over the Hill,Craig Wiesen,"Tucker, Tre LVR WR",166.9,8,,,
Over the Hill,Craig Wiesen,"Washington, Malik MIA WR (Q)",163.35,12,,,
Over the Hill,Craig Wiesen,"Johnson, Juwan NOS TE",172.8,11,,,
Over the Hill,Craig Wiesen,"Kelce, Travis KCC TE",189,10,,,8.01
Over the Hill,Craig Wiesen,"Bates, Jake DET PK",130,8,,,17.09
Over the Hill,Craig Wiesen,"Rams, Los Angeles LAR Def",143,8,,,
Over the Hill,Craig Wiesen,"Steelers, Pittsburgh PIT Def",125,5,3,K15,15.11
Guinness All Blacks,Rob Sherman,"Darnold, Sam SEA QB (Q)",308.4,8,,,
Guinness All Blacks,Rob Sherman,"Love, Jordan GBP QB",303.15,5,2,K10,10.08
Guinness All Blacks,Rob Sherman,"Purdy, Brock SFO QB",213.3,14,,,4.08
Guinness All Blacks,Rob Sherman,"Ford, Jerome CLE RB (I)",59.1,9,,,13.05
Guinness All Blacks,Rob Sherman,"Robinson, Brian SFO RB",78.8,14,,,14.08
Guinness All Blacks,Rob Sherman,"Spears, Tyjae TEN RB",102.2,10,2,K8,8.08
Guinness All Blacks,Rob Sherman,"Warren, Jaylen PIT RB",219.7,5,,,6.08
Guinness All Blacks,Rob Sherman,"White, Rachaad TBB RB",136.9,9,,,11.05
Guinness All Blacks,Rob Sherman,"Downs, Josh IND WR",129.55,11,3,K16,16.08
Guinness All Blacks,Rob Sherman,"Jefferson, Justin MIN WR",189.1,6,,,1.05
Guinness All Blacks,Rob Sherman,"McLaurin, Terry WAS WR",108.5,12,3,K3,2.08
Guinness All Blacks,Rob Sherman,"Meyers, Jakobi JAC WR",166.4,8,3,K9,9.05
Guinness All Blacks,Rob Sherman,"Olave, Chris NOS WR (Q)",281.3,11,,,5.05
Guinness All Blacks,Rob Sherman,"Sutton, Courtland DEN WR",228.2,12,3,K7,7.05
Guinness All Blacks,Rob Sherman,"Kittle, George SFO TE (I)",156.9,14,,,3.05
Guinness All Blacks,Rob Sherman,"Dicker, Cameron LAC PK",163,12,,,17.05
Guinness All Blacks,Rob Sherman,"Folk, Nick NYJ PK",126,9,,,
Guinness All Blacks,Rob Sherman,"Jaguars, Jacksonville JAC Def",158,8,,,
Foladelphia Iggles,Mike Foley,"Flacco, Joe CIN QB",202.55,10,,,
Foladelphia Iggles,Mike Foley,"Jackson, Lamar BAL QB",228.55,7,,,3.01
Foladelphia Iggles,Mike Foley,"Stafford, Matthew LAR QB",418.8,8,2,K10,10.12
Foladelphia Iggles,Mike Foley,"Barkley, Saquon PHI RB",251.5,9,,,1.01
Foladelphia Iggles,Mike Foley,"Hill, Justice BAL RB (I)",80,7,,,
Foladelphia Iggles,Mike Foley,"Jones, Aaron MIN RB (Q)",118.7,6,,,4.12
Foladelphia Iggles,Mike Foley,"Stevenson, Rhamondre NEP RB",145.5,14,,,11.01
Foladelphia Iggles,Mike Foley,"Adams, Davante LAR WR",227.9,8,,,2.12
Foladelphia Iggles,Mike Foley,"Coleman, Keon BUF WR",96.8,7,3,K7,7.01
Foladelphia Iggles,Mike Foley,"Collins, Nico HOU WR (Q)",243.2,6,1,K9,9.01
Foladelphia Iggles,Mike Foley,"Jennings, Jauan SFO WR",167.8,14,,,8.12
Foladelphia Iggles,Mike Foley,"Legette, Xavier CAR WR",84.3,14,,,18.12
Foladelphia Iggles,Mike Foley,"Turpin, KaVontae DAL WR",170.7,10,,,
Foladelphia Iggles,Mike Foley,"Washington, Parker JAC WR",192.55,8,,,
Foladelphia Iggles,Mike Foley,"Goedert, Dallas PHI TE",188.1,9,3,K7,6.12
Foladelphia Iggles,Mike Foley,"Henry, Hunter NEP TE",171.2,14,3,K14,14.12
Foladelphia Iggles,Mike Foley,"Ryland, Chad ARI PK",111,8,,,
Foladelphia Iggles,Mike Foley,"Bills, Buffalo BUF Def",139,7,3,K16,16.03
Hail Marys,Bill Davidson,"Maye, Drake NEP QB (Q)",415.25,14,3,K16,16.04
Hail Marys,Bill Davidson,"Nix, Bo DEN QB (I)",376.5,12,3,K16,16.11
Hail Marys,Bill Davidson,"Prescott, Dak DAL QB",421.6,10,,,9.09
Hail Marys,Bill Davidson,"Allgeier, Tyler ATL RB",120.7,5,,,18.04
Hail Marys,Bill Davidson,"Dowdle, Rico CAR RB",232.35,14,,,12.08
Hail Marys,Bill Davidson,"Hampton, Omarion LAC RB (R)",144.2,12,,,2.04
Hail Marys,Bill Davidson,"McCaffrey, Christian SFO RB",416.9,14,,,1.09
Hail Marys,Bill Davidson,"Nabers, Malik NYG WR (I)",62.1,14,3,K4,4.04
Hail Marys,Bill Davidson,"Pearsall, Ricky SFO WR",95,14,,,6.04
Hail Marys,Bill Davidson,"Smith, DeVonta PHI WR",203.6,9,,,3.09
Hail Marys,Bill Davidson,"Smith-Njigba, Jaxon SEA WR",382.6,8,3,K5,5.09
Hail Marys,Bill Davidson,"Worthy, Xavier KCC WR (Q)",109.9,10,3,K7,7.09
Hail Marys,Bill Davidson,"Ferguson, Jake DAL TE",186.6,10,2,K14,14.04
Hail Marys,Bill Davidson,"Warren, Tyler IND TE (R)",180.9,11,,,8.04
Hail Marys,Bill Davidson,"Fairbairn, Ka'imi HOU PK",164,6,,,
Hail Marys,Bill Davidson,"49ers, San Francisco SFO Def",77,14,,,17.07
Hail Marys,Bill Davidson,"Chiefs, Kansas City KCC Def",112,10,,,15.05
Hail Marys,Bill Davidson,"Saints, New Orleans NOS Def",145,11,,,
BoRaDLeSHoW,Brad Thoesen,"Daniels, Jayden WAS QB (Q)",133.9,12,3,K6,6.02
BoRaDLeSHoW,Brad Thoesen,"Lawrence, Trevor JAC QB",382.4,8,,,16.06
BoRaDLeSHoW,Brad Thoesen,"McCarthy, J.J. MIN QB (Q)",140.9,6,3,K16,16.02
BoRaDLeSHoW,Brad Thoesen,"Achane, De'Von MIA RB (Q)",342.8,12,2,K5,5.11
BoRaDLeSHoW,Brad Thoesen,"Cook, James BUF RB",337.7,7,,,2.02
BoRaDLeSHoW,Brad Thoesen,"Corum, Blake LAR RB",136.6,8,,,
BoRaDLeSHoW,Brad Thoesen,"Skattebo, Cam NYG RB (R) (I)",128,14,,,7.11
BoRaDLeSHoW,Brad Thoesen,"Vidal, Kimani LAC RB",137.85,12,,,
BoRaDLeSHoW,Brad Thoesen,"Williams, Javonte DAL RB (I)",248.8,10,,,9.11
BoRaDLeSHoW,Brad Thoesen,"Wright, Jaylen MIA RB",47.2,12,,,14.07
BoRaDLeSHoW,Brad Thoesen,"Dike, Chimere TEN WR (R)",219.65,10,,,
BoRaDLeSHoW,Brad Thoesen,"Moore, D.J. CHI WR",170.5,5,,,3.11
BoRaDLeSHoW,Brad Thoesen,"Rice, Rashee KCC WR (I)",153.1,10,2,K8,8.02
BoRaDLeSHoW,Brad Thoesen,"St. Brown, Amon-Ra DET WR",311.1,8,,,1.11
BoRaDLeSHoW,Brad Thoesen,"Strange, Brenton JAC TE",100.8,8,,,
BoRaDLeSHoW,Brad Thoesen,"Waller, Darren MIA TE (I)",88.7,12,,,
BoRaDLeSHoW,Brad Thoesen,"Borregales, Andres NEP PK (R)",133,14,,,
BoRaDLeSHoW,Brad Thoesen,"Broncos, Denver DEN Def",171,12,,,12.02`;

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i] || '';
    });
    return obj;
  });
}

function calculateKeeperStatus(player) {
  const isRookie = player.Player.includes('(R)');
  const acquired = player.Acquired;
  const currentYears = player.Years ? parseInt(player.Years) : null;
  
  // Parse acquired round
  let acquiredRound = null;
  if (acquired) {
    const match = acquired.match(/^(\d+)\./);
    if (match) {
      acquiredRound = parseInt(match[1]);
    }
  }
  
  // Rule: Players drafted in rounds 1-3 are ineligible
  if (acquiredRound && acquiredRound <= 3) {
    return {
      eligible: false,
      reason: 'Drafted in rounds 1-3',
      nextRound: null,
      yearsRemaining: null
    };
  }
  
  // Calculate years remaining for next season
  let yearsRemaining;
  if (currentYears === null) {
    // Blank years = 3 years remaining next season
    yearsRemaining = 3;
  } else {
    // Subtract 1 from current years
    yearsRemaining = currentYears - 1;
  }
  
  // If years remaining is 0 or less, player is ineligible
  if (yearsRemaining <= 0) {
    return {
      eligible: false,
      reason: 'No keeper years remaining',
      nextRound: null,
      yearsRemaining: 0
    };
  }
  
  // Calculate next season's draft round
  let nextRound;
  if (!acquired) {
    // Blank acquired = 12th round
    nextRound = 12;
  } else if (isRookie) {
    // Rookies stay in same round
    nextRound = acquiredRound;
  } else {
    // Regular players move up 2 rounds
    nextRound = acquiredRound - 2;
  }
  
  // Ensure round doesn't go below 1
  if (nextRound < 1) {
    nextRound = 1;
  }
  
  return {
    eligible: true,
    reason: null,
    nextRound: nextRound,
    yearsRemaining: yearsRemaining,
    isRookie: isRookie
  };
}

export default function KeeperApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  
  const players = useMemo(() => parseCSV(csvData), []);
  
  const teams = useMemo(() => {
    const teamMap = new Map();
    players.forEach(player => {
      if (!teamMap.has(player.Team)) {
        teamMap.set(player.Team, {
          name: player.Team,
          owner: player.Owner,
          players: []
        });
      }
      const keeperStatus = calculateKeeperStatus(player);
      teamMap.get(player.Team).players.push({
        ...player,
        keeperStatus
      });
    });
    return Array.from(teamMap.values());
  }, [players]);
  
  const filteredTeams = useMemo(() => {
    let result = teams;
    
    if (selectedTeam !== 'all') {
      result = result.filter(team => team.name === selectedTeam);
    }
    
    if (searchTerm) {
      result = result.map(team => ({
        ...team,
        players: team.players.filter(player =>
          player.Player.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(team => team.players.length > 0);
    }
    
    return result;
  }, [teams, selectedTeam, searchTerm]);
  
  const stats = useMemo(() => {
    const total = players.length;
    const eligible = players.filter(p => calculateKeeperStatus(p).eligible).length;
    const ineligible = total - eligible;
    
    return { total, eligible, ineligible };
  }, [players]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-slate-950/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center gap-4 mb-2">
              <Trophy className="w-10 h-10 text-purple-400" />
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" 
                  style={{ fontFamily: '"Bebas Neue", "Impact", cursive' }}>
                Keeper League Manager
              </h1>
            </div>
            <p className="text-purple-300/60 text-lg ml-14" style={{ fontFamily: '"Space Mono", monospace' }}>
              2026 Season Planning Tool
            </p>
          </div>
        </header>
        
        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300/60 text-sm uppercase tracking-wider font-bold">Total Players</span>
              </div>
              <div className="text-4xl font-black text-purple-200">{stats.total}</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-950/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300/60 text-sm uppercase tracking-wider font-bold">Eligible</span>
              </div>
              <div className="text-4xl font-black text-green-200">{stats.eligible}</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/40 to-rose-950/40 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300/60 text-sm uppercase tracking-wider font-bold">Ineligible</span>
              </div>
              <div className="text-4xl font-black text-red-200">{stats.ineligible}</div>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl text-purple-100 placeholder-purple-400/40 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-6 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl text-purple-100 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
            >
              <option value="all">All Teams</option>
              {teams.map(team => (
                <option key={team.name} value={team.name}>{team.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Teams Grid */}
        <div className="max-w-7xl mx-auto px-6 py-6 pb-12">
          <div className="space-y-6">
            {filteredTeams.map(team => (
              <div key={team.name} className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 px-6 py-4 border-b border-purple-500/20">
                  <h2 className="text-2xl font-black text-purple-100" style={{ fontFamily: '"Bebas Neue", "Impact", cursive' }}>
                    {team.name}
                  </h2>
                  <p className="text-purple-300/60 text-sm">{team.owner}</p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-950/40 text-purple-300/60 text-xs uppercase tracking-wider">
                        <th className="px-6 py-3 text-left font-bold">Player</th>
                        <th className="px-6 py-3 text-left font-bold">Current Acq.</th>
                        <th className="px-6 py-3 text-left font-bold">Current Years</th>
                        <th className="px-6 py-3 text-left font-bold">Status</th>
                        <th className="px-6 py-3 text-left font-bold">2026 Round</th>
                        <th className="px-6 py-3 text-left font-bold">Years Left</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-500/10">
                      {team.players.map((player, idx) => (
                        <tr key={idx} className={`
                          transition-colors
                          ${player.keeperStatus.eligible 
                            ? 'hover:bg-green-500/5' 
                            : 'hover:bg-red-500/5 opacity-60'
                          }
                        `}>
                          <td className="px-6 py-4 text-purple-100 font-medium">
                            {player.Player}
                          </td>
                          <td className="px-6 py-4 text-purple-300/80">
                            {player.Acquired || '—'}
                          </td>
                          <td className="px-6 py-4 text-purple-300/80">
                            {player.Years || '—'}
                          </td>
                          <td className="px-6 py-4">
                            {player.keeperStatus.eligible ? (
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 font-bold text-sm">Eligible</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <XCircle className="w-4 h-4 text-red-400" />
                                <span className="text-red-400 text-sm">{player.keeperStatus.reason}</span>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {player.keeperStatus.eligible ? (
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40">
                                <span className="text-purple-200 font-black text-lg">
                                  {player.keeperStatus.nextRound}
                                </span>
                                {player.keeperStatus.isRookie && (
                                  <span className="text-xs text-purple-400 font-bold">(R)</span>
                                )}
                              </div>
                            ) : (
                              <span className="text-purple-500/40">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {player.keeperStatus.eligible ? (
                              <span className="text-purple-300 font-bold">
                                {player.keeperStatus.yearsRemaining} {player.keeperStatus.yearsRemaining === 1 ? 'year' : 'years'}
                              </span>
                            ) : (
                              <span className="text-purple-500/40">—</span>
                            )}
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
        
        {/* Rules Footer */}
        <div className="max-w-7xl mx-auto px-6 py-8 mb-8">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-black text-purple-100" style={{ fontFamily: '"Bebas Neue", "Impact", cursive' }}>
                Keeper Rules
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-purple-300/80 text-sm leading-relaxed">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Players may be kept for a maximum of <strong className="text-purple-200">3 years</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Players drafted in <strong className="text-purple-200">rounds 1-3</strong> are ineligible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Undrafted players count as <strong className="text-purple-200">12th round</strong> picks</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Regular players move up <strong className="text-purple-200">2 rounds</strong> when kept</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Rookies (R) stay in the <strong className="text-purple-200">same round</strong> when kept</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Years remaining calculated as current years <strong className="text-purple-200">minus 1</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
