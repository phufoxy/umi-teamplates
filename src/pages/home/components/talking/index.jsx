import React, { PureComponent } from 'react';
import { connect } from 'umi';
import classnames from 'classnames';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
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
          )}
        >
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-8 offset-lg-2 text-center wow fadeInUp"
                data-wow-duration="2.5s"
                data-wow-delay="0.5s"
              >
                <h3 className={classnames(styles.title, 'mb20')}>Talking numbers</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(styles['counter-container'], 'mt100', 'wow fadeIn')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <div className={styles['counter-item']}>
            <span className="icon-cloud-computing" />
            <h5 className={classnames(styles.number, 'mt30')}>
              <CountUp start={0} end={500000} duration={5} separator="," redraw suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h5>
            <p className={classnames(styles.norm, 'mt15')}>Downloads</p>
          </div>
          <div className={styles['counter-item']}>
            <span className="icon-customer" />
            <h5 className={classnames(styles.number, 'mt30')}>
              <CountUp start={0} end={10000} duration={3} separator="," redraw suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h5>
            <p className={classnames(styles.norm, 'mt15')}>Users</p>
          </div>
          <div className={styles['counter-item']}>
            <span className="icon-coronavirus" />
            <h5 className={classnames(styles.number, 'mt30')}>
              <CountUp start={0} end={10} duration={5} separator="," redraw suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h5>
            <p className={classnames(styles.norm, 'mt15')}>Countries</p>
          </div>
          <div className={styles['counter-item']}>
            <span className="icon-community" />
            <h5 className={classnames(styles.number, 'mt30')}>
              <CountUp start={0} end={2000} duration={5} redraw suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h5>
            <p className={classnames(styles.norm, 'mt15')}>Community Members</p>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
