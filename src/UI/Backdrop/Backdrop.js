import "./Backdrop.css"
const Backdrop = ({ close }) => {
    return <div onClick={() => close()} className='background-pannel'>
    </div>
}
export default Backdrop;