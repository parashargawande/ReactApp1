import { ReactNode } from "react";
import './layout.css';
type propsType = {
    children: ReactNode
}
const Layout = ({ children }: propsType) => {
    return <div className="layout">
        {children}
    </div>
}
export default Layout;