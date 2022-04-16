import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BlacklistPage from "./pages/BlacklistPage";
import BoardsPage from "./pages/BoardsPage";
import BoardListPage from "./pages/BoardListPage";
import BooksPage from "./pages/BooksPage";
import Home from "./pages/Home";
import LendingPage from "./pages/LendingPage";
import LibrariesRulePage from "./pages/LibrariesRulePage";
import UserListPage from "./pages/UserListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/lending/blacklist" element={<BlacklistPage />} />
      <Route path="/boards" element={<BoardsPage />} />
      <Route path="/boards/list" element={<BoardListPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/lending" element={<LendingPage />} />
      <Route path="/lending/libraries/rules" element={<LibrariesRulePage />} />
      <Route path="/auth" element={<UserListPage />} />
    </Routes>
  );
};

export default App;
