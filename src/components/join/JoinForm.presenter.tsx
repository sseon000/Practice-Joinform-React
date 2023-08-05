import * as JS from './JoinForm.styles'


interface IJoinFormUIProps {
    onSubmitJoinForm: (event: React.FormEvent) => void
    onChangeInputs: (event: React.ChangeEvent<HTMLInputElement>) => void
    idSpaceErr: string
    idEmTypeErr: string
    nonSpecErr: string
    passwordCheckErr: string
}
export default function JoinFormUI(props: IJoinFormUIProps) {
    return (
        <>
            <JS.Wrapper>
                <JS.Title>회원가입</JS.Title>
                <form onSubmit={props.onSubmitJoinForm}>
                    <JS.InputBox id="id" type="text" placeholder="이메일을 입력해주세요." onChange={props.onChangeInputs}/>
                    {props.idSpaceErr && <JS.ErrBox>{props.idSpaceErr}</JS.ErrBox>}
                    {props.idEmTypeErr && <JS.ErrBox>{props.idEmTypeErr}</JS.ErrBox>}
                    <JS.InputBox id="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangeInputs}/>
                    {props.nonSpecErr && <JS.ErrBox>{props.nonSpecErr}</JS.ErrBox>}
                    <JS.InputBox id="passwordCheck" type="password" placeholder="비밀번호를 다시 입력해주세요." onChange={props.onChangeInputs}/>
                    {props.passwordCheckErr && <JS.ErrBox>{props.passwordCheckErr}</JS.ErrBox>}
                    <JS.SubmitButton id="submit" type="submit" value="가입하기" />
                </form>
            </JS.Wrapper>
        </>
    )
}