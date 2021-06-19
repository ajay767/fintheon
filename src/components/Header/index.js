import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styles from './header.module.scss';
import logo from './../../assets/logo.png';
import square from './../../assets/square.jpeg';

const useStyle = makeStyles({
  root: {
    textTransform: 'none',
    fontFamily: ['Open Sans', 'sans-serif'],
    fontWeight: 'bold',
    zIndex: '10',
  },
});

export default function Header() {
  const classes = useStyle();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <a href="#4">
          <Typography variant="subtitle2">Company Details</Typography>
        </a>
        <a href="#4">
          <Typography variant="subtitle2">Transaction</Typography>
        </a>
        <Button
          className={classes.root}
          variant="contained"
          color="primary"
          disableRipple
        >
          Logout
        </Button>
      </div>
      <img className={styles.headerImg} alt="header" src={square} />
    </header>
  );
}
