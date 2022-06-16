import Layout from './UI/Layout/Layout';
import Table from './containers/Table/Table'
import SidePannel from './UI/SidePannel/SidePannel';
import { useState, useEffect } from 'react';
import * as constant from './helpers/Constant';
import Alert from './UI/Alert/Alert';

function App() {
  const [pannelData, setPannelData] = useState(null)
  const [users, setUsers] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: "test", isError: false })

  useEffect(() => {
    setAlert({ show: true, message: "Loading...", isError: false })
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => {
        setUsers(data)
        setAlert({ show: false, message: "", isError: false })
      })
      .catch(e => {
        console.log(e);
        setAlert({ show: true, message: e.message, isError: true })
      })
  }, [])

  const displayPannel = (type, userid) => {
    console.log(type);
    if (type === constant.POSTS) {
      setAlert({ show: true, message: "Loading...", isError: false })

      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
        .then(data => data.json())
        .then(posts => {
          let user = users.find(user => user.id === userid)
          setAlert({ show: false, message: "", isError: false })
          setPannelData({ type, user, posts });
          setisOpen(true);
        })
        .catch(e => {
          console.log(e)
          setAlert({ show: true, message: e.message, isError: true })
        })
    } else {

      let user = users.find(user => user.id === userid)
      if (!user) {
        setAlert({ show: false, message: "User not found", isError: false })
      } else {
        setPannelData({ type, user, posts: [] });
        setisOpen(true);
      }
    }
  }
  const closeAlert = () => {
    setAlert({ show: false, message: "", isError: false })
  }

  return (
    <div className="App">
      <Layout>
        {alert.show ?
          <Alert
            isError={alert.isError}
            message={alert.message}
            close={closeAlert}
          ></Alert> :
          null
        }
        <Table users={users} displayPannel={displayPannel} />
        {
          pannelData ?
            <SidePannel
              pannelData={pannelData}
              isOpen={isOpen}
              setisOpen={setisOpen}
              setPannelData={setPannelData}
              displayPannel={displayPannel}
            /> : null
        }
      </Layout>
    </div>
  );
}

export default App;
