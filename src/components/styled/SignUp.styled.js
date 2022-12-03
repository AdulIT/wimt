import styled from "styled-components";

const Signup = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > form {
        background-color: ${({ theme }) => theme.elevation_1};
        border-radius: 5px;
        height: 400px;
        width: 90%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }
`;

export const SignupButton = styled.button`
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    width: 90%;
    max-width: 300px;
    height: 15%;
    border-radius: 3px;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    color: #fff;
    background-color: ${({ theme }) => theme.primary};
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
    }
`;

export default Signup;