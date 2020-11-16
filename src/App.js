import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const[comments, setComments] = useState([])
  useEffect(() => {
    // start is the number of rounds
    // limit refers to how many i want to get
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
    .then((response) => response.json())
    // setting json into comments state
    .then((json) => setComments(json))
  }, []);

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
      <div className='row' >
        <div className='col id header'>ID</div>
        <div className='col title header'>Title</div>
        <div className='col body header'>Body</div>
      </div>
      {renderComments()}
    </div>
  );
}
export default App;

