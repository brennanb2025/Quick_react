import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CourseBanner from './components/CourseBanner';
import CourseList from './components/CourseList';

import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Schedule = () => {
  const [scheduleData, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading schedule data...</h1>;
  if (!scheduleData) return <h1>No schedule data found</h1>;

  return (
    <div>
      <CourseBanner scheduleTitle={scheduleData.title} />
      <CourseList courses={scheduleData.courses} />
    </div>);
  
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Schedule />
      </QueryClientProvider>
    </div>
  );
};

export default App;