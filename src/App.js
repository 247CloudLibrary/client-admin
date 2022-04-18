import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BlacklistPage from "./pages/BlacklistPage";
import BoardsPage from "./pages/board/BoardsPage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardWritePage from "./pages/board/BoardWritePage";
import BoardDetailPage from "./pages/board/BoardDetailPage";
import BoardEditPage from "./pages/board/BoardEditPage";
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
      <Route path="/boards/detail" element={<BoardDetailPage />} />
      <Route path="/boards/edit" element={<BoardEditPage />} />
      <Route path="/boards/write" element={<BoardWritePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/lending" element={<LendingPage />} />
      <Route path="/lending/libraries/rules" element={<LibrariesRulePage />} />
      <Route path="/auth" element={<UserListPage />} />
    </Routes>
  );
};

export default App;
