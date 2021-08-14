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
          className={classnames(styles['heading-container'], 'd-flex', 'wow fadeInLeft')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <h3 className={classnames(styles.title)}>Our team</h3>
        </div>
        <div
          className={classnames(styles['wrapper-content'], 'mt50', 'wow fadeIn')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <div
            className={classnames(
              styles['card-container'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <div className={styles['image-container']}>
              <img
                alt="journey"
                src="/images/home/our-team/avatar_01.png"
                className={styles.image}
              />
            </div>
            <h3 className={classnames(styles.title, 'mt30')}>Tran Long Nam</h3>
            <p className={classnames(styles.norm, 'mt20')}>CEO & Co-Founder</p>
          </div>
          <div
            className={classnames(
              styles['card-container'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <div className={styles['image-container']}>
              <img
                alt="journey"
                src="/images/home/our-team/avatar_01.png"
                className={styles.image}
              />
            </div>
            <h3 className={classnames(styles.title, 'mt30')}>Le Quang Hiep</h3>
            <p className={classnames(styles.norm, 'mt20')}>CTO & Co-Founder</p>
          </div>
          <div
            className={classnames(
              styles['card-container'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <div className={styles['image-container']}>
              <img
                alt="journey"
                src="/images/home/our-team/avatar_01.png"
                className={styles.image}
              />
            </div>
            <h3 className={classnames(styles.title, 'mt30')}>Tran Long Nam</h3>
            <p className={classnames(styles.norm, 'mt20')}>Marketing Leader & Community Manager</p>
          </div>
          <div
            className={classnames(
              styles['card-container'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <div className={styles['image-container']}>
              <img
                alt="journey"
                src="/images/home/our-team/avatar_03.png"
                className={styles.image}
              />
            </div>
            <h3 className={classnames(styles.title, 'mt30')}>Tran Ba Duyen</h3>
            <p className={classnames(styles.norm, 'mt20')}>Technical Leader & Mobile Developer</p>
          </div>
          <div
            className={classnames(
              styles['card-container'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <div className={styles['image-container']}>
              <img
                alt="journey"
                src="/images/home/our-team/avatar_04.png"
                className={styles.image}
              />
            </div>
            <h3 className={classnames(styles.title, 'mt30')}>Tran Ba Duyen</h3>
            <p className={classnames(styles.norm, 'mt20')}>Technical Leader & Mobile Developer</p>
          </div>
          <div
            className={classnames(
              styles['card-container'],
              styles['card-container-last'],
              'd-flex',
              'flex-column',
              'align-items-center',
              'justify-content-center',
            )}
          >
            <h3 className={classnames(styles.title, 'mt30')}>Meet our Team</h3>
            <p className={classnames(styles.norm, 'mt20')}>
              We have big dreams, and start from the smallest things.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
