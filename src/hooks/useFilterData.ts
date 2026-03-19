import { useMemo } from "react";
import type { League } from "../types";

const useFilterData = (
  data: League[],
  searchTerm: string,
  selectedSport: string
) => {
  const filteredData = useMemo(() => {
    return data.filter((league: League) => {
      const matchesSearch = league.strLeague.toLowerCase().includes(searchTerm.toLowerCase());
      const includesSport = selectedSport
        ? league.strSport === selectedSport
        : true;
      return matchesSearch && includesSport;
    });
  }, [searchTerm, selectedSport, data]);
  return filteredData
};

export default useFilterData