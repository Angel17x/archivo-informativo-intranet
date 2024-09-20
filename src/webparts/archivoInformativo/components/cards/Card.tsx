import { Card, CardPreview } from "@fluentui/react-components";
import * as React from "react";
import styles from '../../styles/Card.module.scss';
import { ICardItem } from "../../interfaces/ICardItem";
import { MediaDisplay } from "../media/MediaDisplay";

export const CardComponent: React.FC<ICardItem> = ({ id, imageUrl, title, description, timestamp }: ICardItem) => {
  return (
    <Card key={id} className={styles.cardContainer}>
      <CardPreview className={styles.containerImage}>
        <MediaDisplay url={imageUrl} width='80' height="80" />
      </CardPreview>
      <div className={styles.containerBody}>
        <h2>{title}</h2>
        <div className={styles.dateContainer}>
          <p>{timestamp}</p>
        </div>
        <p>
          {description}
        </p>
      </div>
    </Card>
  );
}