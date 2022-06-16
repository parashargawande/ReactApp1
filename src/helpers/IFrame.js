import { useState } from 'react'
import * as ReactDOM from 'react-dom';
const IFrame = ({ children }) => {
    const [ref, setRef] = useState();
    const container = ref?.contentWindow?.document?.body;
    return (
        <iframe title="Table" ref={setRef}>
            {container && ReactDOM.createPortal(children, container)}
        </iframe>
    );
}
export default IFrame;