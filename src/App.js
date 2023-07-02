import PageDisplay from "./pages/PageDisplay";
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom";
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <PageDisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
