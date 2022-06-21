import { cleanup, render, screen, waitFor } from "@testing-library/react"
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../../App"
import IFrame from "./IFrame"


let container: Element | DocumentFragment

afterEach(cleanup);

it('renders welcome message', async () => {
    render(<IFrame title={'table'} ><div>hello1</div></IFrame>);
    let table = screen.findAllByTitle('table')
    expect(screen.findAllByTitle('table')).toBeInTheDocument();
});