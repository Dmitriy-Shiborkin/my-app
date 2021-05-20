import style from './Message.module.css';

const Message = (props) => {
  return (
    <main id={style.container}>
      {props.message}
    </main>
  )
}

export default Message;
