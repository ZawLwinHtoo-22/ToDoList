import React from "react";

// const MainTitle = (props) => {
//   const title=props.title;
//   return (
//     <div>

//       <h2>{title}</h2>

//     </div>
//   )
// }

export const MainTitle = ({ title }) => {
  return (
    <div>
      <h2> Hello{title}</h2>
    </div>
  );
};
