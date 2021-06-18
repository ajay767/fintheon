import { Button, Typography } from '@material-ui/core';
import React from 'react';
import styles from './header.module.scss';
import logo from './../../assets/logo.png';

export default function index() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* <Typography variant="h5">Fitheon</Typography> */}
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <a href="#4">
          <Typography variant="subtitle2">Company Details</Typography>
        </a>
        <a href="#4">
          <Typography variant="subtitle2">Transaction</Typography>
        </a>
        <Button variant="contained" color="primary" disableRipple>
          Logout
        </Button>
      </div>
    </header>
  );
}
