import { useState, useMemo, useCallback } from "react";
import { fetchApiLeagues } from "./api";

import "./app.css";

import useDebounce from "./hooks/useDebounce";
import useFilterData from "./hooks/useFilterData";
import useFetchData from "./hooks/useFetchData";

import LeaguesList from "./components/LeaguesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";

const App = () => {
  const {
    data: leagues,
    loading: isLoading,
    error,
    refetch,
  } = useFetchData([], fetchApiLeagues, true, "all-leagues");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const debouncedSearchQuery = useDebounce(searchTerm, 500);
  const filteredLeagues = useFilterData(
    leagues || [],
    debouncedSearchQuery,
    selectedSport,
  );
  const availableSportOptions = useMemo(
    () => [...new Set((leagues || []).map((league) => league.strSport))],
    [leagues],
  );

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedSport("");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="w-full max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <div className="flex flex-col mb-6 md:flex-row gap-4">
            <SearchBar
              value={searchTerm}
              onChange={(val: string) => {
                setSearchTerm(val);
              }}
              className="flex-1"
            />
            <Dropdown
              value={selectedSport}
              options={availableSportOptions.map((sport) => ({
                label: sport,
                value: sport,
              }))}
              onChange={(val) => {
                setSelectedSport(val);
              }}
            />
          </div>
          <LeaguesList
            leagues={filteredLeagues}
            isLoading={isLoading}
            error={error}
            onRetry={refetch}
            onClearFilters={handleClearFilters}
            searchQuery={debouncedSearchQuery}
            selectedSport={selectedSport}
          />
        </div>
      </main>
    </div>
  );
};
export default App;
