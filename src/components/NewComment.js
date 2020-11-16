import React, {useState} from 'react';
import '../App.css';

const NewComment =()=>{
    const [commentTitle, setCommentTitle] = useState('');
    const [commentBody, setCommentBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('title:', commentTitle, 'body:', commentBody);
        
        fetch('http://test.steps.me/test/testAssignComment',{
            method:'POST',
            body: {
                'title': commentTitle, 
                'body': commentBody
            },
            headers: { 'Content-Type': 'application/json' },
        })
        .then(() => {
            setCommentTitle(''); 
            setCommentBody('')
        })    
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='inputTitles'>Title:</label>
            <input type='text' value={commentTitle} required onChange={(e)=>{setCommentTitle(e.target.value)}}/>
            <label className='inputTitles'>Body:</label>
            <input type='text' required value={commentBody} onChange={(e)=>{setCommentBody(e.target.value)}}/>
            <input type='submit' value='Send' className="button"/>
        </form>
    )
}

export default NewComment;