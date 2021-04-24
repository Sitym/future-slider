export const none = 'none';
// import React from 'react';

// interface ControllerProps {
//   arrow?:
//     | 'angel'
//     | 'angel-circle'
//     | 'angel-outlined'
//     | 'arrow'
//     | 'arrow-circle';
//   color?: string;
//   size?: 1 | 2 | 3 | 4 | 5;
// }
// export const Controller = (props: ControllerProps) => {
//   const { arrow, size, color } = props;

//   const getSvgArrow = (
//     svgSize_p?: 1 | 2 | 3 | 4 | 5,
//     svgColor_p?: string,
//   ) => {
//     interface arrowSvgProps {
//       left: React.ReactNode;
//       right: React.ReactNode;
//     }
//     let arrowSvg: arrowSvgProps = {
//       left: null,
//       right: null,
//     };
//     const svgColor: string = svgColor_p || '#fff';
//     let svgSize: string;
//     switch (svgSize_p) {
//       case 1:
//         svgSize = '20px';
//         break;
//       case 2:
//         svgSize = '30px';
//         break;
//       case 3:
//         svgSize = '40px';
//         break;
//       case 4:
//         svgSize = '50px';
//         break;
//       case 5:
//         svgSize = '60px';
//         break;

//       default:
//         svgSize = '35px';
//         break;
//     }
//     switch (arrow) {
//       case 'angel':
//         arrowSvg.right = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
//           </svg>
//         );
//         arrowSvg.left = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//           </svg>
//         );
//         break;
//       case 'angel-outlined':
//         arrowSvg.left = (
//           <svg
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             xmlns="http://www.w3.org/2000/svg"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           >
//             <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
//           </svg>
//         );
//         arrowSvg.right = (
//           <svg
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             xmlns="http://www.w3.org/2000/svg"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           >
//             <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
//           </svg>
//         );
//         break;
//       case 'angel-circle':
//         arrowSvg.left = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
//           </svg>
//         );
//         arrowSvg.right = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
//           </svg>
//         );
//         break;
//       case 'arrow-circle':
//         arrowSvg.left = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" />
//           </svg>
//         );
//         arrowSvg.right = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z" />
//           </svg>
//         );
//         break;
//       case 'arrow':
//         arrowSvg.right = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M24 12l-9-8v6h-15v4h15v6z" />
//           </svg>
//         );
//         arrowSvg.left = (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             viewBox="0 0 24 24"
//           >
//             <path d="M0 12l9-8v6h15v4h-15v6z" />
//           </svg>
//         );
//         break;
//       default:
//         arrowSvg.left = (
//           <svg
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             xmlns="http://www.w3.org/2000/svg"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           >
//             <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
//           </svg>
//         );
//         arrowSvg.right = (
//           <svg
//             width={svgSize}
//             height={svgSize}
//             fill={svgColor}
//             xmlns="http://www.w3.org/2000/svg"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           >
//             <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
//           </svg>
//         );
//         break;
//     }
//     return arrowSvg;
//   };
//   return getSvgArrow(size, color);
// };
