import { Fragment, useState } from 'react';
import './App.css';
import Usertable from './components/Usertable';
import Comments from './components/Comments';

function App() {
  const [userId, setUserId] = useState('');
  const fetchId = (id) => {
    console.log("ID", id)
    setUserId(id);
  }
  return (
    <Fragment>
      <Usertable fetchId={fetchId} />
      <hr></hr>
      <Comments userId={userId} />
    </Fragment>
  );
}

export default App;
