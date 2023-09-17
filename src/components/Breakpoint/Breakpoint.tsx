import React, { PropsWithChildren, HTMLAttributes } from 'react';
import classNames from 'classnames';
import style from './index.module.scss';

export interface BreakpointProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  start?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  end?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  children?: React.ReactNode | React.ReactNode[];
}

export function Breakpoint(props: BreakpointProps) {
  const { children, className, ...otherProps } = props;

  let customClassName = `${style.contents} `;
  switch (props.start) {
    case 'md':
      customClassName += `${style['max-sm:hidden']} `;
      break;
    case 'lg':
      customClassName += `${style['max-md:hidden']} `;
      break;
    case 'xl':
      customClassName += `${style['max-lg:hidden']} `;
      break;
    case '2xl':
      customClassName += `${style['max-xl:hidden']} `;
      break;
    default:
      customClassName += '';
      break;
  }
  switch (props.end) {
    case 'sm':
      customClassName += `${style['sm:hidden']} `;
      break;
    case 'md':
      customClassName += `${style['md:hidden']} `;
      break;
    case 'lg':
      customClassName += `${style['lg:hidden']} `;
      break;
    case 'xl':
      customClassName += `${style['xl:hidden']} `;
      break;
    case '2xl':
      customClassName += `${style['2xl:hidden']} `;
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
