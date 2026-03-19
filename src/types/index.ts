export type ApiError = {
  status: number;
  message: string;
};

export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string | null;
}

export interface LeaguesResponse {
  leagues: League[] | null;
}

export interface SeasonBadge {
  strBadge: string | null;
  strSeason: string | null;
}

export interface SeasonsResponse {
  seasons: SeasonBadge[] | null;
}
