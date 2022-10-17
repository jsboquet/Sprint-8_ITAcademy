import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";
import StarshipList from "./components/StarshipList/StarshipList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <StarshipList />
    </div>
  );
};

export default App;
