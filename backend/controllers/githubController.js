import axios from "axios";

export const getGithubData = async (req, res) => {
    try {
        const { username } = req.params;

        const userRes = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const repoRes = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        const profile = {
            avatar_url: userRes.data.avatar_url,
            name: userRes.data.name,
            bio: userRes.data.bio,
            followers: userRes.data.followers,
            following: userRes.data.following,
            public_repos: userRes.data.public_repos,
            location: userRes.data.location,
            company: userRes.data.company,
            created_at: userRes.data.created_at
        };

        let stars = 0;
        let forks = 0;

        repoRes.data.forEach(repo => {
            stars += repo.stargazers_count;
            forks += repo.forks_count;
        });

        const stats = {
            repos: repoRes.data.length,
            stars,
            forks
        };

        const repos = repoRes.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            repo_url: repo.html_url,
            watchers: repo.watchers_count,
            open_issues: repo.open_issues_count
        }));

        res.json({
            profile,
            stats,
            repos
        });

    } catch (error) {
        res.status(500).json({
            message: "User not found"
        });
    }
};