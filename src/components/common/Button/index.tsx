import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
  type?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  size,
  type,
  onClick,
  className,
}: Props) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={cx(styles.button, styles[size], className)}
    >
      {children}
    </button>
  );
}
