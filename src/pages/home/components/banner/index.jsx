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
      <div className={styles['banner-container']}>
        <div className={classnames(styles['banner-desktop'], 'justify-content-center')} />
        <div
          className={classnames(styles['banner-top'], 'wow fadeInDown')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <div className={styles['tag-container']}>
            <span>Welcome to Yummy Profit</span>
          </div>

          <h2 className={classnames(styles.title, 'mt20')}>The Best App For Trader</h2>
          <p className={styles.norm}>
            Applications & Solutions for Finance service, Crypto wallet & Smart trading.
          </p>
          <div className={classnames(styles.social, 'mt50', 'd-flex')}>
            <a href="#" className={styles['social-item']}>
              <img alt="Logo" src="/images/home/banner/app-stores.png" className={styles.logo} />
            </a>
            <a href="#" className={styles['social-item']}>
              <img alt="Logo" src="/images/home/banner/gg-play.png" className={styles.logo} />
            </a>
          </div>
        </div>
        <div
          className={classnames(
            styles['banner-main'],
            'd-flex',
            'flex-column',
            'align-items-center',
            'justify-content-center',
            'wow fadeInUp',
          )}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <h2 className={styles.title}>Pre-ICO start in</h2>
          <p className={styles.norm}>
            Applications & Solutions for Finance service, Crypto wallet & Smart trading.
          </p>
          <div className={classnames(styles['timeline-container'], 'mt30', 'mb30', 'd-flex')}>
            <div
              className={classnames(
                styles['timeline-item'],
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'flex-column',
              )}
            >
              <h5 className={styles.time}>10</h5>
              <p className={styles.norm}>DAYS</p>
            </div>
            <div
              className={classnames(
                styles['timeline-item'],
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'flex-column',
              )}
            >
              <h5 className={styles.time}>6</h5>
              <p className={styles.norm}>HOURS</p>
            </div>
            <div
              className={classnames(
                styles['timeline-item'],
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'flex-column',
              )}
            >
              <h5 className={styles.time}>32</h5>
              <p className={styles.norm}>MINUTES</p>
            </div>
          </div>
          <Button type="button" className={styles.button}>
            Join the waitlist & get free 50 YUM now!
          </Button>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
