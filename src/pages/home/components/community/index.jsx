import React, { PureComponent } from 'react';
import { connect } from 'umi';
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h3 className={classnames(styles.title, 'mb20')}>Join our global community</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames(styles['social-container'], 'mt50')}>
          <div
            className={classnames(styles['social-item'], 'wow wobble')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <div className={styles.icon}>
              <span className="icon-telegram" />
            </div>
            <div className={styles['social-content']}>
              <h3 className={styles.title}>Telegram</h3>
              <p className={styles.norm}>7062 Followers</p>
            </div>
            <span className="icon-arrow-next" />
          </div>
          <div
            className={classnames(styles['social-item'], 'wow wobble')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <div className={styles.icon}>
              <span className="icon-twitter" />
            </div>
            <div className={styles['social-content']}>
              <h3 className={styles.title}>Twitter</h3>
              <p className={styles.norm}>11,7K Followers</p>
            </div>
            <span className="icon-arrow-next" />
          </div>
          <div
            className={classnames(styles['social-item'], 'wow wobble')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <div className={styles.icon}>
              <span className="icon-fb" />
            </div>
            <div className={styles['social-content']}>
              <h3 className={styles.title}>Facebook</h3>
              <p className={styles.norm}>7062 Followers</p>
            </div>
            <span className="icon-arrow-next" />
          </div>
          <div
            className={classnames(styles['social-item'], 'wow wobble')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <div className={styles.icon}>
              <span className="icon-instagram" />
            </div>
            <div className={styles['social-content']}>
              <h3 className={styles.title}>Instagram</h3>
              <p className={styles.norm}>11,7K Followers</p>
            </div>
            <span className="icon-arrow-next" />
          </div>
          <div
            className={classnames(styles['social-item'], 'wow wobble')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <div className={styles.icon}>
              <span className="icon-medium" />
            </div>
            <div className={styles['social-content']}>
              <h3 className={styles.title}>Medium</h3>
              <p className={styles.norm}>711,7K Followers</p>
            </div>
            <span className="icon-arrow-next" />
          </div>
        </div>
        <div className={classnames(styles['donors-container'], 'mt100')}>
          <div
            className={classnames(styles['doners-item'], 'wow swing')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="journey" src="/images/home/app-store.png" className={styles.image} />
          </div>
          <div
            className={classnames(styles['doners-item'], 'wow swing')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="journey" src="/images/home/gg-play.png" className={styles.image} />
          </div>
          <div
            className={classnames(styles['doners-item'], 'wow swing')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="journey" src="/images/home/visa.png" className={styles.image} />
          </div>
          <div
            className={classnames(styles['doners-item'], 'wow swing')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="journey" src="/images/home/master-card.png" className={styles.image} />
          </div>
          <div
            className={classnames(styles['doners-item'], 'wow swing')}
            data-wow-duration="2.5s"
            data-wow-delay="0.5s"
          >
            <img alt="journey" src="/images/home/paypal.png" className={styles.image} />
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
