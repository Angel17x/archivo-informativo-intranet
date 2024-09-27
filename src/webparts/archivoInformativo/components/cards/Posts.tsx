import * as React from "react";
import styles from '../../styles/Card.module.scss';
import { CardComponent } from "./Card";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";
import { IItem } from "../../interfaces/IItem";

export const Posts: React.FC<{ isLoading: boolean, items: IItem[] }> = ({ isLoading, items }: { isLoading: boolean, items: IItem[] }) => {

  const [state, setState] = React.useState({
    isLoading: isLoading,
    items: items,
  });

  React.useEffect(() => {
    // console.log('estado de los posts', { isLoading: isLoading, items: items });
    if (isLoading) {
      setState((oldState) => {
        return { ...oldState, items: items };
      });
    }
  }, [isLoading])

  return (
    <div className={styles.list}>
      {
        isLoading ?
          <Skeleton animation='pulse' aria-label="Loading Content">
            <SkeletonItem size={128} />
            <div style={{ marginBottom: "10px" }} />
            <SkeletonItem size={128} />
            <div style={{ marginBottom: "10px" }} />
            <SkeletonItem size={128} />
            <div style={{ marginBottom: "10px" }} />
            <SkeletonItem size={128} />
            <div style={{ marginBottom: "10px" }} />
            <SkeletonItem size={128} />
          </Skeleton>
          :
          !state.isLoading && items.length !== 0 ?
            items.length > 0 && items.map((item: IItem, index: number) => {
              // const categories = item.Categoria.length > 0 ? item.Categoria.map((x) => x.Title).join(' - ') : '';
              // const tags = item.Etiquetas.length > 0 ? item.Etiquetas.map((x) => x.Title).join(' - ') : '';
              return (<CardComponent
                id={`card-${index}`}
                fileUrl={item.FileRef}
                key={index}
                imageUrl={
                  item.BannerImageUrl.Url === null ||
                    item.BannerImageUrl.Url === undefined ?
                    require('../../assets/no-items.png') :
                    item.BannerImageUrl.Url
                }
                title={item.Title ?? ""}
                description={item.Description ?? ""}
                timestamp={new Date(item.Created).toLocaleDateString()}
                tags={item.Categoria}
              />)
            }
            )
            :
            <div className={styles.notFoundItems}>
              <img src={require('../../assets/no-items.png')} alt="image not found items" width={350} height={146} />
              <h4>¡Vaya! Parece que aún no hay noticias disponibles.</h4>
              <p>Mientras tanto puedes explorar otras categorías y mantenerte al día con todo lo que ocurre.</p>
            </div>
      }
    </div>
  );
}