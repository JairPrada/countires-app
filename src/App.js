import React from 'react';
import { Header } from './components/common/Header';
import { PublicRouter } from './routers/PublicRouter';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PublicRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;


