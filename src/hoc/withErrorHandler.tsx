import axios from "../axios-config";
import { useEffect, useState } from "react";
import Backdrop from "../UI/backdrop/backdrop";

const ErrorHandler = ({ children }: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.interceptors.request.use(req => {
            setError(() => null)
            setIsOpen(() => true)
            return req;
        }, error => {
            console.log(error);
        })
        axios.interceptors.response.use(res => {
            setError(() => null)
            setIsOpen(() => false)
            return res
        }, error => {
            setError(() => error.message)
            setIsOpen(true);
            console.log(error.message);
        })
    }, [])

    const errorCard = <div className="card border-danger mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header text-danger">Something went wrong</div>
        <div className="card-body text-danger">
            <p className="card-text">{error}</p>
        </div>
    </div>

    const loadingCard = <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header text-primary">Loading</div>
        <div className="card-body text-primary">
            <p className="card-text">Fetching data, Please wait...</p>
        </div>
    </div>
    return <>
        <Backdrop isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="alert">
                {error !== null ? errorCard : loadingCard}
            </div>
        </Backdrop>
        {children}
    </>
}
export default ErrorHandler;