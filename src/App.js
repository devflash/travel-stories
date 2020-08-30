import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import  StoriesPage from './pages/storiesPage';
function App() {
  return (
   <>
      <h1>Travel stories</h1>
      <BrowserRouter>
        <Route path="/" exact>
          <StoriesPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>        
      </BrowserRouter>
   </>
  );
}

export default App;
