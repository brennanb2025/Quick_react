import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Dispatcher from './components/Dispatcher';

import CoursePage from './components/CoursePage';

import EditCourseForm from './components/EditCourseForm';

import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [scheduleData, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading schedule data...</h1>;
  if (!scheduleData) return <h1>No schedule data found</h1>;

  return (
      <Dispatcher courses={scheduleData.courses} title={scheduleData.title}>
        
      </Dispatcher>);
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;