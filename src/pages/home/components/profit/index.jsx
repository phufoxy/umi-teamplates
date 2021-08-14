import React, { PureComponent } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import classnames from 'classnames';
import WOW from 'wowjs';
import styles from './styles.module.scss';

@connect(({ user, loading }) => ({ user, loading }))
class Index extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <div className={styles['wrapper-container']}>
        <div
          className={classnames(
            styles['heading-container'],
            'd-flex',
            'flex-column',
            'align-items-center',
            'justify-content-center',
            'wow fadeInUp',
          )}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <h3 className={classnames(styles.title, 'mb20')}>Yummy Profit EcoSystem</h3>
          <p className={styles.norm}>
            Applications & Solutions for Finance service, Crypto wallet & Smart trading.
          </p>
        </div>
        <div
          className={classnames(styles['tab-container'], 'mt60', 'wow fadeIn')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <div className={styles['tab-content']}>
            <div className={classnames(styles['tab-item'], styles.active)}>Trading Signals</div>
            <div className={styles['tab-item']}>Crypto Wallet</div>
            <div className={styles['tab-item']}>Ideas</div>
            <div className={styles['tab-item']}>Airdrop & Bounty</div>
            <div className={styles['tab-item']}>Earning</div>
            <div className={styles['tab-item']}>Staking</div>
          </div>
        </div>
        <div className={classnames(styles['profit-container'], 'mt80')}>
          <div
            className={classnames(styles['profit-image'], 'wow fadeInLeft')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="Logo" src="/images/home/profit/desktop.png" className={styles.img} />
          </div>
          <div
            className={classnames(styles['profit-content'], 'wow fadeInRight')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <h3 className={styles.title}>Yummy Trading Signals</h3>
            <p className={classnames(styles.norm, 'mb30')}>
              Follow market signals even during sleep, don`t miss good profitable trading
              opportunities
            </p>
            <Button className={styles.button}>
              See more <span className="icon-arrow-next" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
