import Home from "./Home"
import Category from "../components/Category"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function PageDisplay() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageDisplay