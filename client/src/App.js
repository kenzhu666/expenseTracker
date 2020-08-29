import React from 'react';
import './index.css'

import Header from './components/Header'
import Balance from './components/Balance'
import IncExp from './components/IncExp'
import History from './components/History'
import Form from './components/Form'

import GlobalProvider from './context/GlobalProvider'

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncExp />
          <History />
          <Form />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
