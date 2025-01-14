import * as React from "react";
import { IFilterProps } from "../../../interfaces/IFilterProps";

export const Vectors: React.FC<IFilterProps> = ({ width, height, callback }: IFilterProps) => {
  return (
    <button onClick={callback} style={{
      border: 'none',
      backgroundColor: 'transparent',
    }}>
      <svg width={width} height={height} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 9L9 0L14.5 9H3.5ZM14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 16.75 18.5625 17.8125 17.6875 18.6875C16.8125 19.5625 15.75 20 14.5 20ZM0 19.5V11.5H8V19.5H0ZM14.5 18C15.2 18 15.7917 17.7583 16.275 17.275C16.7583 16.7917 17 16.2 17 15.5C17 14.8 16.7583 14.2083 16.275 13.725C15.7917 13.2417 15.2 13 14.5 13C13.8 13 13.2083 13.2417 12.725 13.725C12.2417 14.2083 12 14.8 12 15.5C12 16.2 12.2417 16.7917 12.725 17.275C13.2083 17.7583 13.8 18 14.5 18ZM2 17.5H6V13.5H2V17.5ZM7.05 7H10.95L9 3.85L7.05 7Z" fill="url(#paint0_linear_2450_9017)" />
        <defs>
          <linearGradient id="paint0_linear_2450_9017" x1="9.5" y1="0" x2="9.5" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
} 