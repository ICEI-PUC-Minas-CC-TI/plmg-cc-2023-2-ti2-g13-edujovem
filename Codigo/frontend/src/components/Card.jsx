import styles from './Card.module.css'

const Card = ({ title, content, imageUrl, children }) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.card_image} />}
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_text}>{content}</p>
      </div>
        {children}
    </div>
  );
};

export default Card;
