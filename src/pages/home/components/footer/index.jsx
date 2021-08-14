import React, { PureComponent } from 'react';
import { connect, Link } from 'umi';
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
      <div
        className={classnames(styles['wrapper-container'], 'wow fadeIn')}
        data-wow-duration="2.5s"
        data-wow-delay="0.5s"
      >
        <div className={classnames(styles['wrapper-item'], styles['wrapper-info'])}>
          <div className={classnames(styles['logo-container'], 'd-flex', 'align-items-center')}>
            <img alt="Logo" src="/images/home/logo.svg" className={styles.logo} />
            <h2 className={styles.title}>Yummy Profit</h2>
          </div>
          <p className={classnames(styles.norm, 'mt20')}>
            Yummy Profit - All in one useful applications & solutions for finance service, crypto
            wallet & smart trading.
          </p>
        </div>
        <div className={styles['wrapper-item']}>
          <div className={styles['list-link']}>
            <Link to="/" className={styles.link}>
              About Us
            </Link>
            <Link to="/" className={styles.link}>
              Blogs
            </Link>
            <Link to="/" className={styles.link}>
              FAQ
            </Link>
            <Link to="/" className={styles.link}>
              Term of Service
            </Link>
            <Link to="/" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className={styles['wrapper-item']}>
          <div className={styles['list-link']}>
            <Link to="/" className={styles.link}>
              Yummy Trading Signal
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Crypto Wallet
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Airdrop & Bounty
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Earning
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Staking
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Token (YMP)
            </Link>
            <Link to="/" className={styles.link}>
              Yummy Ideas
            </Link>
          </div>
        </div>
        <div className={styles['list-link']}>
          <p className={styles.label}>Follow us</p>
          <Link to="/" className={styles.link}>
            <span className="icon-telegram" /> Telegram
          </Link>
          <Link to="/" className={styles.link}>
            <span className="icon-twitter" /> Twitter
          </Link>
          <Link to="/" className={styles.link}>
            <span className="icon-fb" /> Facebook
          </Link>
          <Link to="/" className={styles.link}>
            <span className="icon-instagram" /> Instagram
          </Link>
          <Link to="/" className={styles.link}>
            <span className="icon-medium" /> Medium
          </Link>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
