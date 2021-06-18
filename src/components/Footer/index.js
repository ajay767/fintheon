import { Typography } from '@material-ui/core';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import styles from './footer.module.scss';
import React from 'react';

export default function index() {
  return (
    <footer className={styles.footer}>
      <Typography variant="subtitle2">
        <span className={styles.copyright}>
          <CopyrightOutlinedIcon fontSize="small" /> 2021 Fintheon. All Rights
          Reserved
        </span>
      </Typography>
    </footer>
  );
}
