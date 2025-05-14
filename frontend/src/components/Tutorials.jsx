import React, { useEffect, useState } from 'react';
import TutorialCard from './TutorialCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tutorial/getalltutorial', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setTutorials(res.data.tutorials);
      } catch (error) {
        if (error.response?.status === 401) {
          // Backend said user is not authorized
          navigate('/signup'); // or '/login'
        } else {
          console.error('Unexpected error:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, [navigate]);

  if (loading) return <p className="text-center mt-10 text-white">Loading tutorials...</p>;

  return (
    <section className="bg-[#0a0f1c] py-10 px-4 min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-200 text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Tutorials</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} tutorial={tutorial} />
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
