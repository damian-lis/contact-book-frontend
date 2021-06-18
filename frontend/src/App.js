import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Contact from 'pages/Contact';

function App() {
  return (
    <Container>
      <Router>
        <Route path="/contact" exact component={Contact} />
      </Router>
    </Container>
  );
}

export default App;
