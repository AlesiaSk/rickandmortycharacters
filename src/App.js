import React from 'react';
import styled from 'styled-components/macro';
import List from "./components/List";

function App() {
  return (
    <Main>
      <List/>
    </Main>
  );
}

export default App;

const Main = styled.main`
background: url('../background.jpg');
`;
