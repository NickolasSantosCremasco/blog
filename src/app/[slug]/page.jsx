

import Menu from "../components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis, repellendus soluta aspernatur accusantium necessitatibus voluptatum dicta architecto beatae excepturi reprehenderit quas aliquam veniam at alias rem ducimus asperiores commodi!</p>
                <h5> Lorem </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis, repellendus soluta aspernatur accusantium necessitatibus voluptatum dicta architecto beatae excepturi reprehenderit quas aliquam veniam at alias rem ducimus asperiores commodi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis, repellendus soluta aspernatur accusantium necessitatibus voluptatum dicta architecto beatae excepturi reprehenderit quas aliquam veniam at alias rem ducimus asperiores commodi!</p>
            </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;