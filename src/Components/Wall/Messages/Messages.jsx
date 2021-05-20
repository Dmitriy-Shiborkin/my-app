import React from 'react';
import style from './Messages.module.css';
import Message from './Message/Message';
import {addPostActionCreator, changePostActionCreator}  from '../../../Redux/Wall_Reducer';

const Messages = (props) => {

  let messageElement = props.state.messageData.map( (elem) => <Message message={elem.message} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }

  let changePost = () => {
    let text = newPostElement.current.value;
    let action = changePostActionCreator(text);
    props.dispatch(action);
  }

  return (
    <main>

      <section id={style.container}>

        <textarea ref={newPostElement} 
                  onChange={changePost}
                  value={props.state.newPostText}></textarea>
        <br />
        <button onClick={addPost}>Add Post</button>

      </section>

      <section>

        {messageElement}

      </section>
      
    </main>
  )
}

export default Messages;
