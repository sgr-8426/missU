export function Homepage() {
    return(
        <>
          <Nav />
          <div>
            <h2>
                Search  user by username
            </h2>
            <form>
                <input type="text" placeholder="Enter username" />
                <button type="submit">Search</button>
            </form>
          </div>
          <div>
            <h2>searched user details</h2>
            <div></div>
          </div>
         </>
    )
}
export function Nav(){
    return(
        <>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </>
    )
}