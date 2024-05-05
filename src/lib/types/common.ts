import type { SVGProps } from 'react';

export type IconProp = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};
