import "./homepage.css";
import { Nav } from "../components/nav";
import { Input } from "../components/Input";
export function HomePage() {
    return(
        <>
          <Nav />
          <div className="search-user"> 
            <h2>
                Search  user by username
            </h2>
            <Input type="text" placeholder="Enter username" />
                <button type="submit" id ="btn">Search</button>
          </div>
          <div className="searched-user-details">
            <h2>Searched user details</h2>
            <div></div>
          </div>
         </>
    )
}
