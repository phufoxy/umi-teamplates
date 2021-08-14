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
          className={classnames(styles['heading-container'], 'd-flex', 'wow fadeInUp')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <h3 className={classnames(styles.title, 'mb20')}>About us</h3>
        </div>
        <div
          className={classnames(styles['wrapper-content'], 'mt80', 'wow fadeIn')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <div className={styles['about-container']}>
            <span className="icon-project-management" />
            <h3 className={classnames(styles.title, 'mt20', 'mb20')}>
              We! Warriors looking for solutions
            </h3>
            <p className={styles.norm}>
              Gathering people who are passionate about technology, have a lot of experience in the
              field of cryptocurrency, blockchain and trading. We who always want to find and
              implement solutions for you. Bringing lean, optimized but most effective products.
            </p>
          </div>
          <div className={styles['about-container']}>
            <span className="icon-target" />
            <h3 className={classnames(styles.title, 'mt20', 'mb20')}>When you win, we win.</h3>
            <p className={styles.norm}>
              Our beliefs start with you, the people. Without you, our platform would be nothing,
              and that is why we believe in wealth sharing. From our company culture to our mission,
              we’re aligned with our vision and set of core values. We’re committed to sharing our
              platform and all of its successes with you.
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
