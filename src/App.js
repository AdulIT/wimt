import StyledApp from './components/styled/App.styled';
import GlobalStyle from './components/styled/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import { UserContext } from './components/UserContext';
import { useContext } from 'react';

function App() {

  const user = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === true ? "logged in" : <SignUp />}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
