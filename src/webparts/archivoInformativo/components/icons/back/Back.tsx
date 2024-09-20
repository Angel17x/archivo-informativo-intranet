import * as React from 'react';
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem } from "@fluentui/react-components";
import { Arrow } from "../arrow/Arrow";
import styles from '../../../styles/Back.module.scss';

export const Back: React.FC = () => {

  const navigateToHome = (): void => {
    // window.location.href = context.pageContext.web.absoluteUrl;
  }

  return (
    <div className={styles.header}>
      <button className={styles.button} onClick={navigateToHome}>
        <Arrow direction='left' width={8} height={17} />
        <span>Regresar</span>
      </button>
      <Breadcrumb className={styles.breadcrumb}>
        <BreadcrumbItem onClick={navigateToHome}>
          <BreadcrumbButton>Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton>
            { /*context.pageContext.web.title*/}
            Centro de comunicaciones
          </BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
} 