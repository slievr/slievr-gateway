import { FC, useId } from 'react';

interface SlievrLogoProps {
  className?: string;
  isAnimating?: boolean;
}

export const SlievrLogo: FC<SlievrLogoProps> = ({ className = '', isAnimating = false }) => {
  const gradientId = useId();
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180.91332 286.68533"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="var(--color-tufts-blue)">
            <animate
              attributeName="offset"
              values="-1;1"
              dur="3s"
              repeatCount="indefinite"
              begin={isAnimating ? "0s" : "indefinite"}
            />
          </stop>
          <stop offset="50%" stopColor="var(--color-spring-green)">
            <animate
              attributeName="offset"
              values="-0.5;1.5"
              dur="3s"
              repeatCount="indefinite"
              begin={isAnimating ? "0s" : "indefinite"}
            />
          </stop>
          <stop offset="100%" stopColor="var(--color-salmon)">
            <animate
              attributeName="offset"
              values="0;2"
              dur="3s"
              repeatCount="indefinite"
              begin={isAnimating ? "0s" : "indefinite"}
            />
          </stop>
        </linearGradient>
      </defs>
      <g transform="matrix(1.3333333,0,0,-1.3333333,-193.64501,654.31396)">
        <g transform="translate(-187.96824,38.138483)">
          <path
            className="transition-all duration-300"
            style={{
              fill: isAnimating ? `url(#${gradientId})` : 'var(--color-alabaster)',
              transition: 'fill 0.3s ease'
            }}
            d="m 438.181,434.34 h -74.75 c -13.462,0 -24.832,7.036 -30.187,18.234 v 0 -2.838 c 0,-15.563 8.104,-29.754 23.259,-35.374 v 0 c 7.262,-2.693 14.952,-2.763 22.155,-5.806 v 0 c 6.383,-2.697 12.234,-6.962 15.575,-13.161 v 0 h -0.041 c -5.358,6.009 -12.798,9.312 -20.576,10.931 v 0 c -8.132,1.694 -16.346,1.291 -24.158,4.61 v 0 c -7.075,3.008 -12.028,7.784 -16.192,13.641 v 0 l -0.022,0.003 v -6.153 -9.278 -35.955 -0.056 c 21.313,-9.283 35.987,-33.198 35.987,-61.309 v 0 c 0,-22.249 -9.6,-41.894 -24.132,-53.727 v 0 c 11.596,11.996 18.872,29.501 18.872,49.009 v 0 c 0,25.795 -12.195,46.49 -30.769,56.299 v 0 l 0.042,-125.827 117.118,0.074 c 9.82,0 18.525,7.96 18.525,17.78 v 0 107.955 h -0.335 c -18.448,-9.86 -31.291,-30.594 -31.291,-56.281 v 0 c 0,-19.508 7.234,-37.013 18.83,-49.009 v 0 C 441.558,269.935 432,289.58 432,311.829 v 0 c 0,28.008 15.383,51.905 36.572,61.261 v 0 h 0.315 v 36.059 9.278 6.166 h -0.335 c -4.165,-5.863 -9.86,-10.647 -16.942,-13.657 v 0 c -7.811,-3.319 -16,-2.916 -24.132,-4.61 v 0 c -7.778,-1.619 -15.245,-4.922 -20.602,-10.931 v 0 h -0.021 c 3.342,6.199 9.237,10.464 15.619,13.161 v 0 c 7.203,3.043 15.328,3.113 22.589,5.806 v 0 c 15.25,5.655 22.468,19.988 23.824,35.665 v 0 2.57 C 463.462,441.399 451.642,434.34 438.181,434.34 M 411.33,388.062 c 4.761,7.637 23.145,15.178 40.915,7.508 v 0 -10e-4 c -6.786,0.509 -10.952,0.234 -14.582,-0.132 v 0 c 2.655,-7.636 -5.341,-13.008 -13.707,-13.009 v 0 c -4.7,0 -9.514,1.694 -12.626,5.634 m -21.872,0 c -8.651,-10.954 -30.48,-4.55 -26.332,7.375 v 0 c -3.631,0.366 -7.796,0.641 -14.583,0.132 v 0 c -0.001,0 -0.001,0 -0.001,0 v 0 c 17.772,7.671 36.156,0.13 40.916,-7.507 m 2.706,-13.711 8.23,8.23 8.229,-8.23 -8.229,-18.167 z m -58.92,78.223 v 0.023 z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SlievrLogo; 