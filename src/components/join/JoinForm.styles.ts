import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 540px;
    height: 540px;
    border: 1px solid #AACDFF;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
`

export const Title = styled.h3`
    font-size: 32px;
    color: #0068FF;
    font-weight: bold;
    width: 380px;
    margin-bottom: 40px;
`

export const InputBox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`

export const SubmitButton = styled.input`
    width: 380px;
    height: 60px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 20px;
`

export const ErrBox = styled.div`
    padding-top: 10px;
    font-size: 14px;
    color: red;
`