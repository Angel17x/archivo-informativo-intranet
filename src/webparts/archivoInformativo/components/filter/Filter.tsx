import * as React from "react";
import styles from '../../styles/Filter.module.scss';
import { DrawerFilter } from "./DrawerFilter";
import { ButtonFilter } from "./ButtonFilter";
import { ICategoryItem } from "../../interfaces/ICategoryItem";

const { useState } = React;


export const Filter: React.FC<{
  categories: ICategoryItem[],
  onChagedCategorySelected: (category: string) => void
}> = ({ categories, onChagedCategorySelected }) => {

  const [show, setShow] = useState<boolean>(false);

  const showDrawer = (): void => {
    setShow(!show);
  }


  return (
    <div className={styles.container}>
      <DrawerFilter
        onChagedCategorySelected={onChagedCategorySelected}
        categories={categories}
        open={show}
        onchange={(open) => {
          setShow(open);
        }} />
      <ButtonFilter
        callback={showDrawer}
        width={20}
        height={20}
      />
    </div>
  );
}