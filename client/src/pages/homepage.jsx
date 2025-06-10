import "./homepage.css";
export function HomePage() {
  return (
    <>
      <Nav />
      <div className="search-user">
        <h2>Search user by username</h2>
        <div className="inputandbutton">
          <input type="text" placeholder="Enter username" />
          <button type="submit" id="btn">
          Search
        </button>
        </div>
      </div>
      <div className="searched-user-details">
        <h2>Searched user details</h2>
        <div className="show-user-details">  </div>
      </div>
    </>
  );
}
export function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="logo">missU</li>
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="contact">Contact</li>
        </ul>
      </nav>
    </>
  );
}
