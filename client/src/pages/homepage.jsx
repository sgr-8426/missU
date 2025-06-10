import "./homepage.css";
export function HomePage() {
    return(
        <>
          <Nav />
          <div className="search-user"> 
            <h2>
                Search  user by username
            </h2>
            <input type="text" placeholder="Enter username" />
                <button type="submit" id ="btn">Search</button>
          </div>
          <div className="searched-user-details">
            <h2>Searched user details</h2>
            <div></div>
          </div>
         </>
    )
}
export function Nav(){
    return(
        <>
          <nav className="navbar">
            <h1 className="logo">missU</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </>
    )
}