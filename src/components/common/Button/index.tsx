import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface Props {
  children: ReactNode;
  size: 'long' | 'short';
}

export function Button({ children, size }: Props) {
  return (
    <button type="button" className={cx(styles.button, styles[size])}>
      {children}
    </button>
  );
}
