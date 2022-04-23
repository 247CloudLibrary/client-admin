import { Route, Routes } from 'react-router-dom';
import BlacklistPage from './pages/BlacklistPage';

/*Board*/
import BoardsPage from './pages/board/BoardsPage';
import NoticesPage from './pages/board/NoticesPage';
import NoticesDetail from './components/board/NoticesDetail';
import GuidePage from './pages/board/GuidePage';
import BoardListPage from './pages/board/BoardListPage';
import BoardDetailPage from './pages/board/BoardDetailPage';
import BoardEditPage from './pages/board/BoardEditPage';
import BoardWritePage from './pages/board/BoardWritePage';

/* Book */
import BooksEditPage from './pages/books/BooksEditPage';
import BooksListPage from './pages/books/BooksListPage';
import BooksWritePage from './pages/books/BooksWritePage';
import BooksDetailPage from './pages/books/BooksDetailPage';

/* Libraries */
import LibrariesListPage from './pages/libraries/LibrariesListPage';
import LibrariesDetailPage from './pages/libraries/LibrariesDetailPage';
import LibrariesRulePage from './pages/libraries/LibrariesRulePage';
import LibrariesEditPage from './pages/libraries/LibrariesEditPage';

import FindIdPage from './pages/auth/FindIdPage';
import FindPwPage from './pages/auth/FindPwPage';
import Home from './pages/Home';
import LendingPage from './pages/LendingPage';
import UserListPage from './pages/UserListPage';
import LoginPage from './pages/auth/LoginPage';
import ProfilePage from './pages/auth/ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
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
      <Route path="/books/edit/:id" element={<BooksEditPage />} />
      <Route path="/books/detail/:id" element={<BooksDetailPage />} />
      <Route path="/libraries/list" element={<LibrariesListPage />} />
      <Route path="/libraries/detail/:id" element={<LibrariesDetailPage />} />
      <Route path="/lending/libraries/rules" element={<LibrariesRulePage />} />
      <Route path="/libraries/edit/:id" element={<LibrariesEditPage />} />
      <Route path="/lending" element={<LendingPage />} />
      <Route path="/auth" element={<UserListPage />} />
      <Route path="/find-id" element={<FindIdPage />} />
      <Route path="/find-pw" element={<FindPwPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
