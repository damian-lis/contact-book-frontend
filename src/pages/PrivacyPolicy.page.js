import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>Polityka prywatności</h1>

      <p>
        Niniejsza polityka prywatności opisuje zasady postępowania z danymi osobowymi oraz ich
        wykorzystywania w ramach strony internetowej my-contact-book-frontend-app.vercel.app.
      </p>
      <p>
        Administratorem strony jest Damian Lis (osoba prywatna) zameldowana we Wrocławiu przy ulicy
        Estońska 42/24.
      </p>
      <p>Kontakt z administratorem możliwy jest pod adresem email: damian.lis1293@gmail.com.</p>

      <h2 style={{ marginTop: 50 }}>§1 Dane osobowe </h2>

      <ol style={{ lineHeight: 2.5 }}>
        <li>
          Użytkownik (każdy podmiot, który korzysta ze strony) może przekazywać swoje dane osobowe
          za pomocą formularza rejestracji.
        </li>
        <li>
          Dane przekazane przez formularz rejestracji (imię, nazwisko, email) służą Administratorowi
          jedynie w celach prezentacji aplikacji.
        </li>
        <li>
          Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych od
          użytkownika.
        </li>
        <li>
          Podanie danych osobowych jest zawsze dobrowolne. Podczas korzystania z aplikacji można
          podać zmyślone dane, dzięki którym użytkownik również będzie w stanie w satysfakcjonujący
          sposób używać aplikacji.
        </li>
        <li>Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.</li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;
