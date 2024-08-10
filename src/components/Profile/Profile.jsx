import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileData}>
        <img src={image} alt={name} className={styles.profileImage} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.profileListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.profileListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
