import * as React from 'react';
import { IFilterProps } from "../../../interfaces/IFilterProps";
import styles from '../../../styles/Filter.module.scss'

export const CloseButton: React.FC<IFilterProps> = ({ width, height, callback }: IFilterProps) => {
  return (
    <button onClick={callback} className={styles.buttonFilter}>
      <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.22099 8.31105C6.39278 8.13926 6.39278 7.86074 6.22099 7.68895L0.733979 2.20194C0.328614 1.79657 0.328613 1.13934 0.733979 0.733979C1.13934 0.328613 1.79657 0.328614 2.20194 0.733979L7.68895 6.22099C7.86074 6.39278 8.13926 6.39278 8.31105 6.22099L13.7981 0.733979C14.2034 0.328614 14.8607 0.328614 15.266 0.733979C15.6714 1.13934 15.6714 1.79657 15.266 2.20194L9.77901 7.68895C9.60722 7.86074 9.60722 8.13926 9.77901 8.31105L15.266 13.7981C15.6714 14.2034 15.6714 14.8607 15.266 15.266C14.8607 15.6714 14.2034 15.6714 13.7981 15.266L8.31105 9.77901C8.13926 9.60722 7.86074 9.60722 7.68895 9.77901L2.20194 15.266C1.79657 15.6714 1.13934 15.6714 0.733979 15.266C0.328614 14.8607 0.328614 14.2034 0.733979 13.7981L6.22099 8.31105Z" fill="url(#paint0_linear_2694_3949)" />
        <defs>
          <linearGradient id="paint0_linear_2694_3949" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009FDA" />
            <stop offset="1" stopColor="#004E9B" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}