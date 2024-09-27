import * as React from 'react';
import type { IArchivoInformativoProps } from '../interfaces/IArchivoInformativoProps';
import styles from '../styles/ContainerList.module.scss'
import { DialogOpenChangeEvent, FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Back } from './icons/back/Back';
import { Filter } from './filter/Filter';
import { Posts } from './cards';
import { IReducerState } from '../interfaces/IReducerState';
import { reducerDrawer } from '../reducers/reducerDrawer';
import { Drawer } from './drawer/Drawer';
import { StateActions } from '../enums';
import { SPHttpClient } from '@microsoft/sp-http';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { IItem } from '../interfaces/IItem';

const initialState: IReducerState = {
  loading: false,
  loadingPosts: false,
  categories: [
    {
      Title: "Todas las Categorías",
      Categor_x00ed_as: "Todas Las Categorías",
      ContentTypeId: "default_content_type_id",
    },
  ],
  error: undefined,
  selectedCategory: "Todas las Categorías",
  posts: [],
  selectedListId: undefined
}

const ArchivoInformativo: React.FC<IArchivoInformativoProps> = ({ context, categoryTitle, description, selectedListId }: IArchivoInformativoProps) => {

  const [state, dispatch] = React.useReducer(reducerDrawer, initialState);

  const extractImageUrlFromCanvasContent = (canvasContent: string): string | null => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(canvasContent, "text/html");
      const imageElement = doc.querySelector("img");
      return imageElement ? imageElement.src : null;
    } catch (error) {
      console.error("Error parsing CanvasContent1 for image URL:", error);
      return null;
    }
  };

  const fetchPosts = async (selectedCategory: string): Promise<void> => {
    dispatch({ type: StateActions.SEARCH_POSTS, payload: initialState });

    const selectFields = "Title,Description,FileRef,BannerImageUrl,CanvasContent1,Estatus,Created,Noticia,Categoria/Title,Etiquetas/Title";
    let filter = `Title ne null and FileDirRef eq '/sites/IntranetDev/SitePages' and Estatus eq 'Habilitado' and Noticia eq 'Si'`;

    if (selectedCategory !== initialState.selectedCategory) {
      filter = `Title ne null and Categoria/Title eq '${selectedCategory}' and FileDirRef eq '/sites/IntranetDev/SitePages' and Estatus eq 'Habilitado' and Noticia eq 'Si'`;
    }

    const url = `${context.pageContext.web.absoluteUrl}/_api/web/lists/getByTitle('Páginas del sitio')/items?$select=${encodeURIComponent(selectFields)}&$expand=Categoria,Etiquetas&$filter=${encodeURIComponent(filter)}`;

    try {
      const response = await context.spHttpClient.get(url, SPHttpClient.configurations.v1);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const postsWithThumbnails = data.value.map((post: IItem) => ({
        ...post,
        BannerImageUrl: {
          Url: extractImageUrlFromCanvasContent(post.CanvasContent1) || undefined
        }
      }));
      dispatch({ type: StateActions.SET_POSTS, payload: postsWithThumbnails || [] });
    } catch (error) {
      dispatch({ type: StateActions.ERROR_POSTS, payload: error.message });
    }
  };

  const onCategoryChange = async (_: DialogOpenChangeEvent, data: { value: string }): Promise<void> => {
    dispatch({ type: StateActions.SELECT_CATEGORY, payload: data.value });
    await fetchPosts(data.value);
  };

  const onCategoryChangeFilter = async (value: string): Promise<void> => {
    dispatch({ type: StateActions.SELECT_CATEGORY, payload: value });
    await fetchPosts(value);
  };

  const fetchData = async (): Promise<void> => {
    dispatch({ type: StateActions.LOADING, payload: initialState });
    try {
      const url = `${context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${selectedListId}')/items`;
      const response = await context.spHttpClient.get(url, SPHttpClient.configurations.v1, {
        headers: { 'Accept': 'application/json;odata=nometadata', 'odata-version': '' }
      });
      const data = await response.json();
      const list: ICategoryItem[] = [...initialState.categories, ...data.value]
      dispatch({ type: StateActions.SET_CATEGORIES, payload: list || [] });
      await fetchPosts(initialState.selectedCategory); // Consider fetching posts only if categories are successfully fetched
    } catch (error) {
      dispatch({ type: StateActions.ERROR, payload: error.message });
    }
  };


  React.useEffect(() => {
    if (selectedListId) {
      dispatch({ type: StateActions.SELECTED_LIST, payload: selectedListId });
      fetchData().catch(console.error);
    }
  }, [selectedListId]);

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.containerRoot}>
        <Back
          actualPath={description}
          context={context} />
        <div className={styles.containerHeader}>
          <h2>{description}</h2>
        </div>
        <Filter
          onChagedCategorySelected={onCategoryChangeFilter}
          categories={state.categories} />
        <div className={styles.containerBody}>
          <div className={styles.sidebar}>
            <Drawer
              title={categoryTitle}
              state={state}
              onCategoryChange={onCategoryChange}
            />
          </div>
          <div className={styles.body}>
            {/* <Tabs
              key={'tab_key'}
              items={[]}
            /> */}
            <Posts
              items={state.posts ?? []}
              isLoading={state.loadingPosts}
            />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default ArchivoInformativo;
