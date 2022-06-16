import './Alert.css';
import Backdrop from '../Backdrop/Backdrop';
const Alert = ({ message, isError, close }) => {

    return <div className='alert-container'>
        <Backdrop close={close}></Backdrop>
        {
            isError ?
                <div className="alertbox card border-danger mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-body text-danger">
                        <h5 className="card-title">Something went wrong</h5>
                        <p className="card-text">{message}</p>
                    </div>
                </div> :
                <div className="alertbox  card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-body text-dark">
                        <p className="card-text">{message}</p>
                    </div>
                </div>
        }
    </div>
}
export default Alert;
