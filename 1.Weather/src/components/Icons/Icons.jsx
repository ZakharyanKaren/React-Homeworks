export function RainyWeather() {
    return (
      <svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="a">
          <path d="M0 0h32v32H0z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path
            d="M13.932 29.433c.282 1.088-.341 2.206-1.39 2.497-1.05.291-2.129-.354-2.41-1.442-.281-1.087-.168-4.174.882-4.466 1.05-.29 2.637 2.324 2.919 3.411zM21.933 29.433c.28 1.088-.342 2.206-1.392 2.497s-2.128-.354-2.41-1.442-.167-4.174.883-4.466 2.637 2.324 2.919 3.411z"
            fill="#5399fc"
          />
          <path
            d="M24.27 16.835a.304.304 0 01-.54 0 4.255 4.255 0 00-5.08-2.104.304.304 0 01-.381-.382 4.255 4.255 0 00-2.104-5.079.304.304 0 010-.54 4.255 4.255 0 002.104-5.08.304.304 0 01.382-.381 4.255 4.255 0 005.079-2.104.304.304 0 01.54 0 4.255 4.255 0 005.08 2.104.304.304 0 01.381.382 4.255 4.255 0 002.104 5.079c.22.113.22.427 0 .54a4.255 4.255 0 00-2.104 5.08.304.304 0 01-.382.381 4.255 4.255 0 00-5.079 2.104z"
            fill="#ffa756"
          />
          <path d="M24 14a5 5 0 110-10 5 5 0 010 10z" fill="#ffdc55" />
          <path
            d="M23.945 12a9.001 9.001 0 00-17.492-1.829A7 7 0 008 24h17a6 6 0 000-12z"
            fill="#dae1ec"
          />
        </g>
      </svg>
    );
  }
  
  export function SunnyWeather() {
    return (
      <svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
        <filter
          id="b"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="36"
          width="32"
          x="0"
          y="0"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <clipPath id="a">
          <path d="M0 0h32v32H0z" />
        </clipPath>
        <g clipPath="url(#a)">
          <g filter="url(#b)">
            <path
              d="M16.54 31.67a.608.608 0 01-1.08 0A8.51 8.51 0 005.3 27.463a.608.608 0 01-.764-.764A8.51 8.51 0 00.33 16.54a.608.608 0 010-1.08A8.51 8.51 0 004.537 5.3a.608.608 0 01.764-.764A8.51 8.51 0 0015.46.33a.608.608 0 011.08 0A8.51 8.51 0 0026.7 4.537c.47-.15.914.294.764.764A8.51 8.51 0 0031.67 15.46c.439.226.439.854 0 1.08A8.51 8.51 0 0027.462 26.7a.608.608 0 01-.764.764A8.51 8.51 0 0016.54 31.67z"
              fill="#ffa048"
            />
          </g>
          <path
            d="M16 26c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10z"
            fill="#ffdc55"
          />
        </g>
      </svg>
    );
  }
  
  export function CloudyWeather() {
    return (
      <svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.27 16.835a.304.304 0 01-.54 0 4.255 4.255 0 00-5.08-2.104.304.304 0 01-.381-.382 4.255 4.255 0 00-2.104-5.079.304.304 0 010-.54 4.255 4.255 0 002.104-5.08.304.304 0 01.382-.381 4.255 4.255 0 005.079-2.104.304.304 0 01.54 0 4.255 4.255 0 005.08 2.104.304.304 0 01.381.382 4.255 4.255 0 002.104 5.079c.22.113.22.427 0 .54a4.255 4.255 0 00-2.104 5.08.304.304 0 01-.382.381 4.255 4.255 0 00-5.079 2.104z"
          fill="#ffa756"
        />
        <path d="M24 14a5 5 0 110-10 5 5 0 010 10z" fill="#ffdc55" />
        <path
          d="M23.945 12a9.001 9.001 0 00-17.492-1.829A7 7 0 008 24h17a6 6 0 000-12z"
          fill="#fff"
        />
      </svg>
    );
  }
  