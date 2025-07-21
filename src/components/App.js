import React from "react";
import user from "../data/user";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
