import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import OAuthSuccess from './components/OAuthSuccess';
import { useDispatch } from 'react-redux';
import { fetchUser } from './components/hooks/useGetUSer';
import Tutorials from './components/Tutorials';


const MainLayout = ({ theme, toggleTheme }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main className="p-4">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const dispatch =useDispatch()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
   useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/"); // Clean URL
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);


useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(fetchUser());
  }
}, []);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout theme={theme} toggleTheme={toggleTheme} />,
      children: [
        { index: true, element: <Home /> },
        { path: '/signup', element: <Signup /> },
        { path: '/login', element: <Login /> },
        {path:"/oauth-success", element:<OAuthSuccess />},
        {path:"/tutorials", element:<Tutorials />},
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
