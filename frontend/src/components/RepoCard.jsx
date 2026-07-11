function RepoCard({ repo }) {
  return (
    <div className="card">

      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <p>⭐ Stars: {repo.stars}</p>

      <p>🍴 Forks: {repo.forks}</p>

      <p>👀 Watchers: {repo.watchers}</p>

      <p>🐞 Open Issues: {repo.open_issues}</p>

      <p>💻 Language: {repo.language}</p>

      <a
        href={repo.repo_url}
        target="_blank"
        rel="noreferrer"
      >
        View Repository
      </a>

    </div>
  );
}

export default RepoCard;