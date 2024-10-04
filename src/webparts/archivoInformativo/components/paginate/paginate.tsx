import * as React from 'react';
import ReactPaginate from 'react-paginate';
import './style.scss'
import { Arrow } from '../icons/arrow/Arrow';
import styles from '../../styles/Paginate.module.scss';

// Example items, to simulate fetching from another resources.
const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];

interface PaginatedItemsProps {
  itemsPerPage: number;
}

export const Paginated: React.FC<PaginatedItemsProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = React.useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.containerPaginate}
      nextLabel={<Arrow width={16} height={16} direction='right' />}
      containerClassName=''
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      onPageActive={(selected) => {
        console.log('Page active ' + selected);
      }}
      previousLabel={<Arrow width={16} height={16} direction='left' />}
      renderOnZeroPageCount={null}
    />
  );
};

