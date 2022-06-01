import { ReactNode, ComponentProps } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
  onClick?: ComponentProps<'button'>['onClick'];
  className?: string;
  submit?: boolean;
}

export function Button({ children, size, onClick, className, submit }: Props) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={cx(styles.button, styles[size], className)}
    >
      {children}
    </button>
  );
}
