import apiClient from "../client";
import type { League, SeasonBadge, LeaguesResponse, SeasonsResponse } from "../types";

export const fetchApiLeagues = async (): Promise<League[]> => {
  const response = await apiClient.get<LeaguesResponse>("/all_leagues.php");
  if (response.data) {
    return response.data.leagues ?? [];
  }
  return Promise.reject(response);
};

export const fetchApiLeagueDetails = async (
  leagueId: string
): Promise<SeasonBadge[]> => {
  if (!leagueId) return Promise.reject();
  const response = await apiClient.get<SeasonsResponse>("/search_all_seasons.php", {
    params: {
      badge: 1,
      id: leagueId,
    },
  });
  if (response.data) return response.data.seasons ?? [];
  return Promise.reject(response);
};
