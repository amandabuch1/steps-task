import './App.css';
import {useState, useEffect} from 'react';
import NewComment from './components/NewComment'

function App() {
  const[comments, setComments] = useState([])
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // start and limit are query params
    // start is the number of rounds
    // limit referese to how many i want to get
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=20`)
    .then((response) => response.json())
    // setting json into comments state
    .then((json) => setComments(comments.concat(json)))
    // eslint-disable-next-line
  }, [startIndex]);

  // console.log(comments)

  const renderComments = ()=>{
    return comments.map(comment =>
    <div className='row' key={comment.id}>
      <div className='col id'>{comment.id}</div>
      <div className='col title'>{comment.title}</div>
      <div className='col body'>{comment.body}</div>
    </div>
    )
  }

  return (
    <div className="App">
      <NewComment/>
      <div className='row' >
        <div className='col id header'>ID</div>
        <div className='col title header'>Title</div>
        <div className='col body header'>Body</div>
      </div>
      {renderComments()}
      <div>
        { startIndex < 80 && <button className='button' node="button" waves="light" onClick={()=>{setStartIndex(startIndex+20)}}>View More</button> }
      </div>
    </div>
  );
}

export default App;

