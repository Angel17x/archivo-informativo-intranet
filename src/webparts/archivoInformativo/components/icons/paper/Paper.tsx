import * as React from "react";
import { IFilterProps } from "../../../interfaces/IFilterProps";

export const Paper: React.FC<IFilterProps> = ({ width, height, callback }: IFilterProps) => {
  return (
    <button onClick={callback} style={{
      border: 'none',
      backgroundColor: 'transparent',
    }}>
      <svg width={width} height={height} viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H11C11.2652 0 11.5196 0.105357 11.7071 0.292893L17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V19C18 19.7957 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7957 22 15 22H3C2.20435 22 1.44129 21.6839 0.87868 21.1213C0.31607 20.5587 0 19.7957 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868ZM3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V7.41421L10.5858 2H3Z" fill="url(#paint0_linear_2430_9638)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C11.5523 0 12 0.447715 12 1V6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7V1C10 0.447715 10.4477 0 11 0Z" fill="url(#paint1_linear_2430_9638)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H5C4.44772 13 4 12.5523 4 12Z" fill="url(#paint2_linear_2430_9638)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H13C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H5C4.44772 17 4 16.5523 4 16Z" fill="url(#paint3_linear_2430_9638)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7H7C7.55228 7 8 7.44772 8 8C8 8.55229 7.55228 9 7 9H5C4.44772 9 4 8.55229 4 8Z" fill="url(#paint4_linear_2430_9638)" />
        <defs>
          <linearGradient id="paint0_linear_2430_9638" x1="9" y1="0" x2="9" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
          <linearGradient id="paint1_linear_2430_9638" x1="9" y1="0" x2="9" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
          <linearGradient id="paint2_linear_2430_9638" x1="9" y1="0" x2="9" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
          <linearGradient id="paint3_linear_2430_9638" x1="9" y1="0" x2="9" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
          <linearGradient id="paint4_linear_2430_9638" x1="9" y1="0" x2="9" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor={"var(--themePrimary)"} />
            <stop offset="1" stopColor={"var(--themeDark)"} />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}