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

  const search = () => {

    setProfile({
      avatar_url:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",

      name: "Octocat",

      bio: "GitHub Mascot",

      followers: 5000,

      following: 10
    });

    setStats({
      repos: 25,
      stars: 120,
      forks: 35
    });

    setRepos([
      {
        id: 1,
        name: "GitHub Analyzer",
        description: "Analyze GitHub profiles",
        stars: 50,
        forks: 10,
        language: "JavaScript"
      },
      {
        id: 2,
        name: "Portfolio Website",
        description: "Personal portfolio",
        stars: 20,
        forks: 5,
        language: "React"
      }
    ]);
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

      {
        repos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))
      }

    </div>
  );
}

export default Dashboard;