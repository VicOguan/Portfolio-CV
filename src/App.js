import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Timeline from "./components/Timeline";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <Timeline />
    <Skill />
    <Profile />
   </div>
  );
}

export default App;
