function SearchBar({ username, setUsername, search }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={search}>
        Analyze
      </button>

    </div>
  );
}

export default SearchBar;