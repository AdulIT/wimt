import StyledSignedInApp from './styled/SignedInApp.styled';
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Account from './Account';
import Maps from './Maps';


const SignedInApp = () => {
    return (
        <StyledSignedInApp>
            <Nav />
            <Routes>
                <Route path='/' element={<Maps />} />
                <Route path='/account' element={<Account />} />
            </Routes>
        </StyledSignedInApp>
    );
};

export default SignedInApp;