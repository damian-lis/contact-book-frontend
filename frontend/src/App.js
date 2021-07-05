import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Contacts from 'pages/Contacts';
import Auth from 'pages/Auth';
import Header from 'components/Header';
import AuthContext from 'contexts/auth.context';
import ContactsContext from 'contexts/contacts.context';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <AuthContext.Provider>
          <Route path="/" exact component={Auth} />
        </AuthContext.Provider>
        <ContactsContext.Provider>
          <Route path="/contact" exact component={Contacts} />
        </ContactsContext.Provider>
      </Container>
    </Router>
  );
}

export default App;
