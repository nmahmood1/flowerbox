// @ts-nocheck
import styles from "./Card.module.css";
export default function Card({flowerData}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img  src={flowerData.image} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <p className={styles.title}> {flowerData.name}</p>
          <span className={styles.price}>${flowerData.price}</span>
        </div>
        <div className={styles.content_bottom}>
          {
            flowerData.tags?.map(tag=>(
              <span>{tag}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}
