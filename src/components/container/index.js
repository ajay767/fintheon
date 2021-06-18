import React from 'react';
import styles from './container.module.scss';
import Block from './../block';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    margin: '10px auto',
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
});
export default function Container({
  children,
  title = null,
  icon = null,
  style = null,
  bg = null,
  blockStyle = null,
}) {
  const classes = useStyle();
  const Icon = icon;
  return (
    <div className={styles.container} style={style}>
      {title && (
        <Typography className={classes.root} variant="h5">
          <span className={classes.flex}>
            {icon && <Icon className={classes.icon} />}
            {title}
          </span>
        </Typography>
      )}
      {bg && <img src={bg} alt="background" />}
      <div style={blockStyle}>
        <Block>{children}</Block>
      </div>
    </div>
  );
}
