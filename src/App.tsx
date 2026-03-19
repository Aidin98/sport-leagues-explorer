import "./app.css";

import type { League } from "./types";

import { fetchApiLeagues } from "./api";

import useFetchData from "./hooks/useFetchData";

import Header from "./components/Header";
import LeagueGrid from "./components/LeagueGrid";
import LeagueCard from "./components/LeagueCard";

const App = () => {
  const { data: leagues } = useFetchData([], fetchApiLeagues, true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="w-full max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <LeagueGrid>
            {leagues.map((league: League) => (
              <LeagueCard key={league.idLeague} league={league} />
            ))}
          </LeagueGrid>
        </div>
      </main>
    </div>
  );
};
export default App;
