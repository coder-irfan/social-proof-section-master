import React from 'react';
import Header from './components/Header';
import Comments from './components/Comments';
import Rates from './components/Rates';
import "./index.css";

function App() {
  return (
    <>
      <div className='flex flex-col text-center lg:text-left lg:flex-row lg:justify-between lg:items-center'>
        <Header />
        <Rates />
      </div>
      
      <Comments />
    </>
  )
}

export default App;