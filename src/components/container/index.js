import React from 'react';
import styles from './container.module.scss';
import Block from './../block';
import bank from './../../assets/bank.jpeg';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    margin: '10px auto 30px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: '20px',
    height: '29px',
    width: '29px',
  },
});
export default function Container({
  children,
  title = null,
  icon = false,
  style = null,
  bg = null,
  blockStyle = null,
}) {
  const classes = useStyle();

  return (
    <div className={styles.container} style={style}>
      {title && (
        <Typography className={classes.root} variant="h5">
          <span className={classes.flex}>
            {icon && <img alt="bank" src={bank} className={classes.icon} />}
            {title}
          </span>
        </Typography>
      )}
      {bg && (
        <img className={styles.container__img} src={bg} alt="background" />
      )}
      <div style={blockStyle}>
        <Block>{children}</Block>
      </div>
    </div>
  );
}
