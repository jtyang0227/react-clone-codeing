import React from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Container from './components/Container';

const App: React.FC = () => {
  return (
    <div id="wrap">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  )
};

export default App;