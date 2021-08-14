import React from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';

const Loader = () => (
    <div
      className={classnames(
        styles.loader,
        'd-flex',
        'justify-content-center',
        'align-items-center',
      )}
    >
      <div className={styles['lds-spinner']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

export default Loader;
