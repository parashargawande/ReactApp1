import './SidePannel.css';
import * as constants from '../../helpers/Constant';
import Backdrop from '../Backdrop/Backdrop'

const SidePannel = ({ pannelData, isOpen, setisOpen, displayPannel }) => {
    console.log(pannelData);

    const closeSidePannel = () => {
        setisOpen(false)
    }

    // const backdrop = <div onClick={() =>close()} className='background-pannel'></div>

    const navigationBtns = <div className='col-2'>
        <div>
            <button
                type="button"
                className="btn btn-link"
                onClick={() => displayPannel(constants.PROFILE, pannelData.user.id)}>Profile</button>
        </div>
        <div>
            <button
                type="button"
                className="btn btn-link"
                onClick={() => displayPannel(constants.POSTS, pannelData.user.id)}>Posts</button>
        </div>
    </div>

    const postMenu = <div className='post-container'>
        <h5>Posts</h5>
        <h6>{pannelData.user.username}</h6>
        {
            pannelData.posts.map(post => (
                <div key={post.id} className="card">
                    <div className="card-body">
                        <p>{post.userId}</p>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            ))
        }
    </div>

    const profileMenu = <div className='profile-container'>
        <h5>Profile</h5>
        <div>{pannelData.user.name}</div>
        <form>
            <div class="form-group">
                <label >Email address</label>
                <input readOnly={true} type="email" class="form-control" placeholder="name@example.com" value={pannelData.user.email}></input>
            </div>
            <div class="form-group">
                <label >Address</label>
                <input readOnly={true} type="text" class="form-control" value={pannelData.user.address.street}></input>
            </div>
            <div class="form-group">
                <label >Phone</label>
                <input readOnly={true} type="text" class="form-control" value={pannelData.user.phone} ></input>
            </div>
            <div class="form-group">
                <label >Website</label>
                <input readOnly={true} type="text" class="form-control" value={pannelData.user.website} ></input>
            </div>
        </form>
    </div>

    console.log("is posts", pannelData.type === constants.POSTS);
    return <div className='sidePannel-container'>
        {
            isOpen ? <Backdrop close={closeSidePannel}></Backdrop> : null
        }
        <div style={{ width: !isOpen ? 0 : '600px' }} className="sidePannel">
            <div className='row m-0'>
                <div className='col-10 posts p-2'>
                    {
                        (pannelData.type === constants.POSTS ? postMenu : profileMenu)
                    }
                </div>
                {navigationBtns}
            </div>
        </div>
    </div >
}
export default SidePannel;