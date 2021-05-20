import style from './Profile.module.css';
import avatar from './avatar.jpg';

const Profile = () => {
  return (
    <main id={style.container}>

      <section id={style.avatar}>

        <img src={avatar} alt="avatar" />

      </section>

      <section id={style.description}>

        <p>Johnny West</p>

      </section>

    </main>
  )
}

export default Profile;
