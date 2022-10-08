import React from "react";

export const Weather = () => {
  return (
    <div>
      <h3>Weather</h3>
      <p>Hollywood</p>
      <p>85&deg;</p>
      <p> 76&deg; / 89&deg;</p>
      <p>Partly Cloudy</p>
      <svg
        width="111"
        height="84"
        viewBox="0 0 111 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_23_136)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M90.9607 55.2144C102.42 51.654 110.742 40.9706 110.742 28.3444C110.742 12.8069 98.1406 0.211267 82.5965 0.211267C67.0524 0.211267 54.4514 12.8069 54.4514 28.3444C54.4514 40.9706 62.7725 51.654 74.2322 55.2144H90.9607Z"
            fill="#FFE593"
          />
        </g>
        <g filter="url(#filter1_i_23_136)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.3795 83.5268C42.3795 83.495 42.3525 83.4699 42.3208 83.4723C41.3509 83.5446 40.3711 83.5814 39.3827 83.5814C17.8661 83.5814 0.423523 66.1462 0.423523 44.6388C0.423523 23.1313 17.8661 5.69614 39.3827 5.69614C56.4043 5.69614 70.8763 16.6076 76.18 31.8147C76.8552 33.7506 77.1928 34.7186 77.8499 35.1853C78.5069 35.652 79.437 35.652 81.2972 35.652H84.3457C97.581 35.652 108.31 46.3814 108.31 59.6167C108.31 72.852 97.581 83.5814 84.3457 83.5814H42.4341C42.404 83.5814 42.3795 83.557 42.3795 83.5268V83.5268Z"
            fill="#EBF3FC"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_23_136"
            x="54.4514"
            y="0.211267"
            width="56.2902"
            height="58.3716"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.36849" />
            <feGaussianBlur stdDeviation="21.0531" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.78 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_23_136"
            />
          </filter>
          <filter
            id="filter1_i_23_136"
            x="0.423523"
            y="5.69614"
            width="107.887"
            height="77.8853"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="21.0531" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.639216 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_23_136"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
