import './sidebar.css'
import { postType } from '../../Types/types'
import { userType } from '../../Types/types'
import { ReactComponent as usericon } from '../personicon.svg';
type sideBartype = {
    currentUserPosts: Array<postType>,
    isOpen: boolean,
    currentUser: userType | undefined;
    currentState: { id: number | null, type: string }
    showPosts: Function,
    showProfile: Function
}

const SideBar = ({ currentUserPosts, isOpen, currentUser, currentState, showPosts, showProfile }: sideBartype) => {
    const posts = currentUserPosts.map(post => (
        <div key={post.id} className="card border-dark mb-1" style={{ maxWidth: '19rem' }}>
            <div className="card-body text-dark">
                <h5 className="card-title text-dark">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    ));
    const profile = <form className='form'>
        <div className="user-info">
            <div className="profile-pic">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Person</title><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"32"} /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit={"10"} strokeWidth={"32"} /></svg>
                </span>
            </div>
            <h5>{currentUser?.name}</h5>
            <br />
        </div>

        {
            [{ input: "Email", value: currentUser?.email },
            { input: "Phone", value: currentUser?.phone },
            { input: "Website", value: currentUser?.website }
            ].map(input => (
                <div className="form-group">
                    <label >{input.input}</label>
                    <input disabled={true} type="email" className="form-control" id="exampleFormControlInput1" value={input.value} />
                </div>
            ))
        }
    </form>
    const profileClass = currentState.type === 'profile' ? 'active' : '';
    const postsClass = currentState.type === 'posts' ? 'active' : '';

    return <div style={isOpen ? { transform: 'translate(0px, 0px)' } : { transform: 'translate(1000px, 0px)' }} className="sidebar row m-0">
        {
            currentState.type === 'posts' ?
                <span className='posts'>
                    <h3 className='text-dark'>Posts</h3>
                    <p className='text-dark'>{currentUser?.name}</p>
                    {posts}
                </span> :
                <span className='profile'>
                    <h3 className='text-dark'>Profile</h3>
                    {profile}
                </span>
        }
        <span className="navigation">
            <div className="profile-btn">
                <button onClick={() => showProfile(currentState.id)} className={`btn btn-link py-0 ${profileClass}`} >Profile</button>
            </div>
            <div className="posts-btn">
                <button onClick={() => showPosts(currentState.id)} className={`btn btn-link py-0 ${postsClass}`}>Posts</button>
            </div>
        </span>
    </div>
}
export default SideBar;