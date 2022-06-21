import { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

type propType = { children: ReactNode, props: any }
const IFrame = ({ children, ...props }: propType | any) => {
    const [iframRef, setIframRef] = useState() as any;
    const headNode = iframRef?.contentWindow?.document?.head;

    useEffect(() => {
        if (headNode) {
            headNode.innerHTML = document?.head?.innerHTML;
        }
    }, [headNode]);

    return <div className="embed-responsive embed-responsive-16by9">
        <iframe title={props.title || "iframe"} className="embed-responsive-item" {...props} ref={setIframRef}>
        </iframe>
        {iframRef &&
            ReactDOM.createPortal(children, iframRef?.contentWindow?.document.body)
        }
    </div>
}
export default IFrame;