import JoinFormUI from "./JoinForm.presenter";
import { useState } from 'react';

export default function JoinForm() {
    interface IInitInputs {
        id: string,
        password: string,
        passwordCheck: string
    }
    const initInputs: IInitInputs = {
        id: '',
        password: '',
        passwordCheck: '',
    }
    const [inputs, setInputs] = useState(initInputs);
    const [idSpaceErr, setIdSpaceErr] = useState('');
    const [idEmTypeErr, setIdEmTypeErr] = useState('');
    const [nonSpecErr, setNonSpecErr] = useState('');
    const [passwordCheckErr, setPasswordCheckErr] = useState('');

    const validationCheck = () => {
        console.log('validationCheck start');
        // 1. 비밀번호 마스킹
        // 2. 아이디에 공백있는지 체크
        const {id, password, passwordCheck} = inputs
        if(id.search(/\s/) !== -1) {
            setIdSpaceErr('아이디에 공백은 사용할 수 없습니다.');
            return;
        } else {
            setIdSpaceErr('');
        }
        // 3. 아이디 이메일형식 체크
        const regExEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if(!regExEmail.test(id)) {
            setIdEmTypeErr('이메일 형식에 맞지 않습니다.');
            return;
        } else {
            setIdEmTypeErr('');
        }
        // 4. 특수문자2개
        const regExpSpecial = /[~!@#$%^*()_+|?:{}]{2,}/
        if(!regExpSpecial.test(password)) {
            setNonSpecErr('비밀번호에 특수문자 2개 이상 사용해주세요.');
            setInputs({
                ...inputs,
                password: '',
                passwordCheck: ''
            })
            return;
        } else {
            setNonSpecErr('');
        }
        // 5. 비밀번호와 비밀번호확인이 같은지 체크 > 다르면 빨간 테투리
        if(password !== passwordCheck) {
            setPasswordCheckErr('비밀번호가 일치하지 않습니다.');
            return;
        } else {
            setPasswordCheckErr('');
        }

        console.log('validationCheck end');
        console.log('회원가입 API call');
    }

    const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const {id,password,passwordCheck} = inputs;
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value
        })
        /*
        console.log(inputs);
        if(id && password && passwordCheck) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        */
    }

    const onSubmitJoinForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit click!!')
        validationCheck();
    }

    return (
        <JoinFormUI 
            onSubmitJoinForm={onSubmitJoinForm}
            onChangeInputs={onChangeInputs}
            idSpaceErr={idSpaceErr}
            idEmTypeErr={idEmTypeErr}
            nonSpecErr={nonSpecErr}
            passwordCheckErr={passwordCheckErr}
            inputs={inputs}
        />
    )
}