import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Contacts from 'pages/Contacts.page';
import Auth from 'pages/Auth.page';
import PrivacyPolicy from 'pages/PrivacyPolicy.page';
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
            <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
          </Container>
        </ContactsContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
