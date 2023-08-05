
import JoinForm from "./JoinForm.container"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("JoinForm이 잘 렌더링 됐는지 확인한다.", () => {
    const view = render(<JoinForm />);

    expect(view.container).toMatchSnapshot();
})

it("타이틀 회원가입 확인", () => {
    render(<JoinForm />);

    const title = screen.getByText("회원가입");
    expect(title).toBeInTheDocument();
})

/*
it("...check", () => {
    
})
*/

