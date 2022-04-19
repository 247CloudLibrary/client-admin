import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import BlacklistPage from "./pages/BlacklistPage";
import BoardsPage from "./pages/board/BoardsPage";
import NoticesPage from "./pages/board/NoticesPage";
import NoticesDetail from "./components/board/NoticesDetail";
import GuidePage from "./pages/board/GuidePage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardDetailPage from "./pages/board/BoardDetailPage";
import BoardEditPage from "./pages/board/BoardEditPage";
import BoardWritePage from "./pages/board/BoardWritePage";
import BooksEditPage from "./pages/books/BooksEditPage";
import BooksListPage from "./pages/books/BooksListPage";
import BooksWritePage from "./pages/books/BooksWritePage";
import BooksDetailPage from "./pages/books/BooksDetailPage";
import Home from "./pages/Home";
import LendingPage from "./pages/LendingPage";
import LibrariesRulePage from "./pages/LibrariesRulePage";
import UserListPage from "./pages/UserListPage";
import LoginPage from "./pages/auth/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/lending/blacklist" element={<BlacklistPage />} />
      <Route path="/boards" element={<BoardsPage />} />
      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/notices/detail" element={<NoticesDetail />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/boards/list" element={<BoardListPage />} />
      <Route path="/boards/detail" element={<BoardDetailPage />} />
      <Route path="/boards/edit" element={<BoardEditPage />} />
      <Route path="/boards/write" element={<BoardWritePage />} />
      <Route path="/books" element={<BooksListPage />} />
      <Route path="/books/write" element={<BooksWritePage />} />
      <Route path="/books/edit" element={<BooksEditPage />} />
      <Route path="/books/detail" element={<BooksDetailPage />} />
      <Route path="/lending" element={<LendingPage />} />
      <Route path="/lending/libraries/rules" element={<LibrariesRulePage />} />
      <Route path="/auth" element={<UserListPage />} />
    </Routes>
  );
};

export default App;
