import { type ApiError, type League } from "../../types";
import  LeagueCard  from "../LeagueCard";
import  LeagueGrid  from "../LeagueGrid";
import  EmptyState  from "../EmptyState";
import  ErrorState  from "../ErrorState";
import  LoadingSkeleton  from "../LoadingSkeleton";

export interface LeagueListProps {
  leagues: League[];
  isLoading?: boolean;
  error?: ApiError | null;
  onRetry?: () => void;
  onClearFilters?: () => void;
  searchQuery?: string;
  selectedSport?: string;
}

const LeagueList = ({
  leagues,
  error,
  isLoading,
  onRetry,
  onClearFilters,
  searchQuery,
  selectedSport,
}: LeagueListProps) => {
  if (error) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  if (isLoading) {
    return <LoadingSkeleton count={12} />;
  }

  if (!leagues || leagues.length === 0) {
    const hasFilters = searchQuery || selectedSport;
    return (
      <EmptyState
        message={hasFilters ? "No leagues found" : "No leagues available"}
        description={
          hasFilters
            ? "Try adjusting your search or filters to find what you're looking for."
            : undefined
        }
        onAction={hasFilters ? onClearFilters : undefined}
      />
    );
  }

  return (
    <LeagueGrid>
      {leagues.map((league) => (
        <LeagueCard key={league.idLeague} league={league} />
      ))}
    </LeagueGrid>
  );
};
LeagueList.displayName = "LeagueList";
export default LeagueList;
