import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" className={styles.friendsImage} />
      <p>{name}</p>
      <p className={isOnline ? styles.statusOnline : styles.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
