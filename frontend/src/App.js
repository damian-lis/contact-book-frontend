import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import Contact from 'pages/Contact';
import Auth from 'pages/Auth';
import Header from 'components/Header';

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <Router>
      <Header userInfo={userInfo} />
      <Container>
        <Route path="/" exact component={Auth} />
        <Route path="/contact" exact component={Contact} />
      </Container>
    </Router>
  );
}

export default App;
