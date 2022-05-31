import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
  type?: string;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function Button({
  children,
  size,
  type,
  ariaLabel,
  onClick,
  className,
}: Props) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cx(styles.button, styles[size], className)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
