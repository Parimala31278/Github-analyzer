import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import RepoCard from "../components/RepoCard";

function Dashboard() {
  const [username, setUsername] = useState("");

  const [profile, setProfile] = useState(null);

  const [stats, setStats] = useState(null);

  const [repos, setRepos] = useState([]);

  const search = async () => {
    if (!username.trim()) {
      alert("Enter a GitHub username");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/github/${username}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "User not found");
      }

      setProfile(data.profile);
      setStats(data.stats);
      setRepos(data.repos);
    } catch (error) {
      alert(error.message);
      setProfile(null);
      setStats(null);
      setRepos([]);
    }
  };

  return (
    <div className="container">
      <h1>GitHub Developer Intelligence</h1>

      <SearchBar
        username={username}
        setUsername={setUsername}
        search={search}
      />

      <ProfileCard profile={profile} />

      <StatsCard stats={stats} />

      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </div>
  );
}

export default Dashboard;