import Table from "./components/table/table/table";
import Layout from "./UI/layout/layout";
import './bootstrap.css';
import SideBar from "./UI/sidebar/sidebar";
import Backdrop from "./UI/backdrop/backdrop";
import { useEffect, useState } from "react";
import useAxios from "./helpers/useAxios";
import { userType } from "./Types/types";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const { fetchData } = useAxios()

  const [users, SetUsers] = useState<Array<userType>>()
  useEffect(() => {
    fetchData('/users', 'get')
      .then(response => {
        SetUsers(() => response.data);
      })
  }, [])

  const [currentUserPosts, setCurrentUserPosts] = useState(null)
  const [currentState, setCurrentState] = useState<{ id: number | null, type: string }>({ id: null, type: '' })
  const [currentUser, setCurrentUser] = useState<userType>()

  const showPosts = (userId: number) => {
    if (currentState.id !== userId || !currentUserPosts) {
      fetchData(`/posts?userId=${userId}`, 'get')
        .then(response => {
          setCurrentUserPosts(response.data);
        })
    }
    let user = users?.find(user => user.id === userId)
    setCurrentUser(user)
    setCurrentState(() => ({ id: userId, type: 'posts' }))
    setIsOpen(true);
  }

  const showProfile = (userId: number) => {
    let user = users?.find(user => user.id === userId)
    setCurrentUser(user)
    setCurrentState({ id: userId, type: 'profile' })

    setIsOpen(true);
  }

  return <Layout>
    <Table
      showPosts={showPosts}
      showProfile={showProfile}
      users={users}
    ></Table>
    <Backdrop isOpen={isOpen} setIsOpen={setIsOpen} />
    <SideBar showPosts={showPosts}
      showProfile={showProfile}
      isOpen={isOpen}
      currentState={currentState}
      currentUser={currentUser}
      currentUserPosts={currentUserPosts || []} />
  </Layout>
}

export default App;
