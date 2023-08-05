import React from 'react';
import JoinPage from './pages/Join/JoinPage';
import { Global } from '@emotion/react';
import { GlobalStyles } from './commons/styles/GlobalStyles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <JoinPage />
    </>
  );
}

export default App;
