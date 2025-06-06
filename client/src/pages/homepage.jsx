import "./homepage.css";
export function Homepage() {
    return(
        <>
          <Nav />
          <div className="search-user"> 
            <h2>
                Search  user by username
            </h2>
            <br />
                <input type="text" placeholder="Enter username"  id ="input"/>
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
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </>
    )
}