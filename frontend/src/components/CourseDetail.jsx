import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cssCourse } from './data/CssCourse';
import { reactCourse } from './data/ReactCourse';
import { ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const courseMap = {
  css: cssCourse,
  react: reactCourse,
};

const CourseViewer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user?.token);
  const loading = useSelector((state) => state.user?.loading);
  const isAuthChecked = token !== undefined || loading === false;

  const course = courseMap[courseId];
  const [selectedSectionId, setSelectedSectionId] = useState(course?.sections[0]?.id || '');
  const currentSection = course?.sections.find((sec) => sec.id === selectedSectionId);

  useEffect(() => {
    if (isAuthChecked && !token) {
      navigate('/signup');
    }
  }, [token, isAuthChecked, navigate]);

  useEffect(() => {
    if (course) {
      setSelectedSectionId(course.sections[0].id);
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="p-10 text-center text-xl text-gray-600 dark:text-gray-300">
        Loading course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-10 text-red-600 text-center text-2xl">
        Course not found: <strong>{courseId}</strong>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-10 shadow rounded-lg bg-white dark:bg-gray-900">
      <aside className="w-full md:w-1/4 border-r border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{course.title}</h2>
        <ul className="space-y-4">
          {course.sections.map((section) => (
            <li
              key={section.id}
              className={`flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 ${
                selectedSectionId === section.id ? 'bg-blue-100 dark:bg-gray-700' : ''
              }`}
              onClick={() => setSelectedSectionId(section.id)}
            >
              <span className="text-gray-800 dark:text-gray-200">{section.title}</span>
              <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" />
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentSection?.title}</h1>
        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
          <ReactMarkdown>{currentSection?.content}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default CourseViewer;
