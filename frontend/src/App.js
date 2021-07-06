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
      <AuthContext.Provider>
        <ContactsContext.Provider>
          <Header />
          <Container>
            <Route path="/" exact component={Auth} />
            <Route path="/contact" exact component={Contacts} />
          </Container>
        </ContactsContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
