import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
  type?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
}

export default function Button({
  children,
  size,
  type,
  onClick,
  className,
  disabled,
  primary,
}: Props) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={cx(styles.button, styles[size], className, {
        [styles.primary]: primary,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
