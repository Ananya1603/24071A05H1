import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookCatalogue from "./pages/BookCatalogue";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/catalogue">Book Catalogue</Link>
        <Link to="/issue">Issue Book</Link>
        <Link to="/return">Return Book</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<BookCatalogue />} />
        <Route path="/issue" element={<IssueBook />} />
        <Route path="/return" element={<ReturnBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer">
        <p>@copyright 24071a05h1</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;