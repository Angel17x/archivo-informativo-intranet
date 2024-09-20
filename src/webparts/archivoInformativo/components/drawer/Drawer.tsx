import * as React from 'react';
import styles from '../../styles/DrawerNoticias.module.scss';
import type { ICategoryItem } from '../../interfaces/ICategoryItem';
import type { IDrawerProps } from '../../interfaces/IDrawerProps';
import { MessageBar, MessageBarBody, MessageBarTitle, Skeleton, SkeletonItem } from "@fluentui/react-components";
import {
  AppItem,
  NavDrawer,
  NavDrawerBody,
  NavItem,
} from "@fluentui/react-nav-preview";


export const Drawer: React.FC<IDrawerProps> = ({ state, onCategoryChange }) => {

  return (
    <>
      <div className={styles.root}>
        {!state.selectedListId && !state.error ?
          <MessageBar key={"warning"} intent={"warning"}>
            <MessageBarBody >
              <MessageBarTitle>Alerta</MessageBarTitle>
              <p>Por favor seleccione la lista de las categorías</p>
            </MessageBarBody>
          </MessageBar>
          : state.loading ?
            <Skeleton animation='pulse' aria-label="Loading Content">
              <SkeletonItem size={32} />
              <div style={{ marginBottom: "10px" }} />
              <SkeletonItem size={32} />
              <div style={{ marginBottom: "10px" }} />
              <SkeletonItem size={32} />
              <div style={{ marginBottom: "10px" }} />
              <SkeletonItem size={32} />
              <div style={{ marginBottom: "10px" }} />
              <SkeletonItem size={32} />
            </Skeleton>
            : state.error ?
              <MessageBar key={"error"} intent={"error"}>
                <MessageBarBody >
                  <MessageBarTitle>Error</MessageBarTitle>
                  <p>{state.error}</p>
                </MessageBarBody>
              </MessageBar> :
              state.categories.length !== 0 &&
              <NavDrawer
                defaultSelectedValue={state.selectedCategory}
                onNavItemSelect={onCategoryChange}
                open={true}
                type={"inline"}
                className={styles.navDrawer} // Aplicando estilos personalizados
              >
                <NavDrawerBody>
                  <AppItem as="a" className={styles.titleItem}>Categorías</AppItem>
                  {(!state.error && state.categories.length > 0) && state.categories.map((x: ICategoryItem) => (
                    <NavItem
                      className={styles.navItem}
                      key={x.ContentTypeId}
                      value={x.Title}
                      as="a"
                    >{x.Title}</NavItem>
                  ))}
                </NavDrawerBody>
              </NavDrawer>
        }
      </div>
    </>
  );
}
