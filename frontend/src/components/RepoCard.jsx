function RepoCard({ repo }) {

  return (
    <div className="repo-card">

      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <p>⭐ {repo.stars}</p>

      <p>Forks: {repo.forks}</p>

      <p>Language: {repo.language}</p>

    </div>
  );
}

export default RepoCard;