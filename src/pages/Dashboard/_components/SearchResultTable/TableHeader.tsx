import { useMemo } from 'react';
import type { MouseEventHandler } from 'react';
import cx from 'classnames';
import { ExpandMoreIcon, ExpandLessIcon } from 'assets/svgs';
import styles from './searchResult.module.scss';

interface TableHeaderProps {
  dataKey: keyof UserInfo;
  title: string;
  sortKey: keyof UserInfo | null;
  sortDir: number;
  onClick: MouseEventHandler<HTMLElement>;
}

export default function TableHeader({
  dataKey,
  title,
  sortKey,
  sortDir,
  onClick,
}: TableHeaderProps) {
  const sortDirIcon = useMemo(() => {
    if (sortKey !== dataKey) return null;
    if (sortDir === 1) return '👇';
    return '👆';
  }, [sortKey, sortDir, dataKey]);

  return (
    <th
      className={cx(styles[dataKey], { [styles.sortKey]: sortKey === dataKey })}
      data-key={dataKey}
      onClick={onClick}
    >
      {title} {sortDirIcon}
    </th>
  );
}
