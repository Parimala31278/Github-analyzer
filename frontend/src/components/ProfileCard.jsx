function ProfileCard({ profile }) {

  if (!profile) return null;

  return (
    <div className="card">

      <img
        src={profile.avatar_url}
        alt="avatar"
        width="120"
      />

      <h2>{profile.name}</h2>

      <p>{profile.bio}</p>

      <p>Followers: {profile.followers}</p>

      <p>Following: {profile.following}</p>

    </div>
  );
}

export default ProfileCard;