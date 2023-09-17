import React, { PropsWithChildren, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './Breakpoint.css';

export interface BreakpointProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  start?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  end?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  children?: React.ReactNode | React.ReactNode[];
}

export function Breakpoint(props: BreakpointProps) {
  const { children, className, start, end, ...otherProps } = props;

  let customClassName = `content `;
  switch (start) {
    case 'md':
      customClassName += `max-sm:hidden `;
      break;
    case 'lg':
      customClassName += `max-md:hidden `;
      break;
    case 'xl':
      customClassName += `max-lg:hidden `;
      break;
    case '2xl':
      customClassName += `max-xl:hidden `;
      break;
    default:
      customClassName += '';
      break;
  }
  switch (end) {
    case 'sm':
      customClassName += `sm:hidden `;
      break;
    case 'md':
      customClassName += `md:hidden `;
      break;
    case 'lg':
      customClassName += `lg:hidden `;
      break;
    case 'xl':
      customClassName += `xl:hidden `;
      break;
    case '2xl':
      customClassName += `2xl:hidden `;
      break;
    default:
      customClassName += '';
      break;
  }

  return (
    <div className={classNames(customClassName, className)} {...otherProps}>
      {children}
    </div>
  );
}
