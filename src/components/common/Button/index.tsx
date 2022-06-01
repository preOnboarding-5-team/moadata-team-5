import type { ReactNode, MouseEventHandler } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function Button({ children, size, onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.button, styles[size], className)}
    >
      {children}
    </button>
  );
}
