import React from 'react';

// export interface IGapHeight {
//   lg?: number;
//   md?: number;
//   sm?: number;
//   xs?: number;
// }

interface IProps {
  defaultHeight: string;
}

export const Gap: React.FC<IProps> = ({ defaultHeight}) => {
  // const { lg = defaultHeight, md = lg, sm = md, xs = sm } = height;
  return <div style={{ height: defaultHeight}} />;
};
