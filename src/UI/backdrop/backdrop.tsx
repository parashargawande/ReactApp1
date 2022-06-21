import './backdrop.css';

const Backdrop = (props: any) => {
    return props.isOpen ? <div className="backdrop" onClick={() => props.setIsOpen(false)}>
        {props.children ?
            <div className="child-container" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div> : null
        }
    </div> : null;
}
export default Backdrop;
