import PageDisplay from "./pages/PageDisplay";
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import './index.css'
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <PageDisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
