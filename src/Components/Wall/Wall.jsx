import style from './Wall.module.css';
import Messages from './Messages/Messages';

const Wall = (props) => {
  return (
    <main id={style.container}>
      <Messages state={props.state}
                dispatch={props.dispatch}/>
    </main>
  )
}

export default Wall;
