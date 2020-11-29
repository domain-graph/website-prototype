import './base.less';

import React, { ReactNode } from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export interface IconFactory {
  (displayName: string, children: ReactNode): React.FC<IconProps>;
}

export const icon: IconFactory = (displayName: string, children: ReactNode) => {
  const component: React.FC<IconProps> = ({
    size = 24,
    color = '#000000',
    strokeWidth = 2,
  }) => (
    <svg
      className={`c-icon c-icon-${displayName.toLowerCase()}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={(strokeWidth * 24) / size}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );

  component.displayName = displayName;

  return component;
};
