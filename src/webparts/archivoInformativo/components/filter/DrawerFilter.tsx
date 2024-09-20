import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  useRestoreFocusSource,
  Divider,
  ToggleButton,
  DrawerFooter,
} from "@fluentui/react-components";
import { ButtonFilter } from "./ButtonFilter";
import { CloseButton } from "../icons/close/close";
import styles from '../../styles/ToggleButton.module.scss';
import { Vectors } from "../icons/vectors/vectors";
import { DialogOpenChangeEvent } from '@fluentui/react-components';
import { ICategoryItem } from "../../interfaces/ICategoryItem";

export interface DrawerFilterProps {
  open: boolean;
  onchange: (open: boolean) => void;
  categories: ICategoryItem[],
  onChagedCategorySelected: (category: string) => void
}

export interface IItemDrawer {
  name: string,
  active: boolean
}

export interface DrawerFiltersState {
  categories: IItemDrawer[];
  selectedCategory?: IItemDrawer;
}

const initialState: DrawerFiltersState = {
  categories: [],
  selectedCategory: undefined
}

export const DrawerFilter: React.FC<DrawerFilterProps> = ({ open, onchange, onChagedCategorySelected, categories }: DrawerFilterProps) => {

  const restoreFocusSourceAttributes = useRestoreFocusSource();
  const [state, setState] = React.useState<DrawerFiltersState>(initialState);

  React.useEffect(() => {
    const items: IItemDrawer[] = categories.map((x) => ({ name: x.Title ?? "", active: false }))
    setState({ categories: items, selectedCategory: items[0] });
  }, [categories]);

  const applyFilter = (): void => {
    onChagedCategorySelected(state.selectedCategory?.name ?? "")
    onchange(false);
  }

  return (
    <Drawer
      {...restoreFocusSourceAttributes}
      type={'overlay'}
      separator
      open={open}
      onOpenChange={(_: DialogOpenChangeEvent, { open }: { open: boolean }) => {
        return onchange(open ?? false);
      }}
    >
      <DrawerHeader style={{ padding: '24px 12px' }}>
        <DrawerHeaderTitle
          action={
            <CloseButton
              width={16}
              height={16}
              callback={() => onchange(false)}
            />
          }
        >
          <ButtonFilter
            callback={() => undefined}
            width={20}
            height={20}
          />
        </DrawerHeaderTitle>
      </DrawerHeader>
      <DrawerBody style={{ padding: 0 }}>
        <Divider style={{ height: '2px' }} />
        <div style={{ padding: '0px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
            <Vectors width={24} height={24} callback={() => undefined} />
            <p style={{ color: 'var(--themeDark)', fontWeight: '700' }}>Tipo de categorías</p>
          </div>
        </div>
        <div>
          {state.categories.length > 0 && state.categories.map((x) => {
            return (
              <span onClick={() => {
                setState((oldState) => {
                  const newState = { ...oldState };
                  newState.categories.forEach((y) => {
                    if (y.name === x.name) {
                      y.active = !y.active;
                      newState.selectedCategory = y;
                    } else {
                      y.active = false;
                    }
                  });
                  console.log(newState);
                  return newState;
                })
              }} key={`${x.name}`} className={styles.toggleButtonFullWidth}><ToggleButton checked={x.active} value={x.name} appearance="outline">{x.name}</ToggleButton></span>
            );
          })}
        </div>
      </DrawerBody>
      <DrawerFooter>
        <button onClick={applyFilter} className={styles.primaryDarkButton}>Aplicar</button>
      </DrawerFooter>
    </Drawer>
  );
};