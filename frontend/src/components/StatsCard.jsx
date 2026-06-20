function StatsCard({ stats }) {

  if (!stats) return null;

  return (
    <div className="card">

      <h2>GitHub Statistics</h2>

      <p>
        Repositories: {stats.repos}
      </p>

      <p>
        Stars: {stats.stars}
      </p>

      <p>
        Forks: {stats.forks}
      </p>

    </div>
  );
}

export default StatsCard;