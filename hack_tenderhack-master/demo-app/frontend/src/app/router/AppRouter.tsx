import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('@/pages/WelcomePage/WelcomePage'));
const ChatPage = lazy(() => import('@/pages/ChatPage/ChatPage'));

const PAGES = [
  {
    url: '/chat',
    page: <ChatPage />,
  },
  {
    url: '/',
    page: <WelcomePage />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {PAGES.map(({ url, page }) => (
        <Route key={url} path={url} element={page} />
      ))}
    </Routes>
  );
};
