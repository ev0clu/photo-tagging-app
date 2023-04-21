import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App: React.FC = () => {
  const [isGamePage, setIsGamePage] = useState<boolean>(true);

  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col">
        <Header isGamePage={isGamePage} />
        {/* <Main />*/}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
