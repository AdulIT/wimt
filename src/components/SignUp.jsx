import StyledSignUp, { SignupButton } from './styled/SignUp.styled';

const SignUp = () => {
    const Signin = e => {
        e.preventDefault();
    }
    return (
        <StyledSignUp>
            <form onSubmit={Signin}>
                <div>
                    <h1>WIMT App</h1>
                    <sub>Created by progrumbs</sub>
                </div>
                <SignupButton>
                    <p>Sign in with Google</p>
                    <i className='fa-brands fa-google' />
                </SignupButton>
            </form>
        </StyledSignUp>
    );
};

export default SignUp;