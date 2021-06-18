import React from 'react';
import styles from './block.module.scss';

export default function Block({ children }) {
  return <div className={styles.block}>{children}</div>;
}
