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
          className={classnames(styles['wrapper-content'], 'wow fadeInLeft')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <h3 className={classnames(styles.title)}>Being a part of our journey</h3>
          <p className={styles.description}>If you are an investor, Being a part of our journey</p>
          <div className="mt25 mb40">
            <p className={styles.norm}>
              We will have good project development plans and build a strong community to bring the
              greatest value to you, as well as bring profits if you trust and invest in us.
            </p>
            <p className={styles.norm}>
              If you are an investor, you want to participate in investing in potential projects
              with a passionate and passionate team.
            </p>
            <p className={styles.norm}>Join the YummyProfit`s ICO waitlist.</p>
          </div>
          <Button className={styles.button}>Join waitlist now</Button>
        </div>
        <div
          className={classnames(styles['wrapper-image'], 'wow fadeInRight')}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <img alt="journey" src="/images/home/journey/image.png" className={styles.image} />
          <img
            alt="journey"
            src="/images/home/journey/image-yellow.png"
            className={classnames(styles.image, styles['image-yellow'])}
          />
          <img
            alt="journey"
            src="/images/home/journey/image-primary.png"
            className={classnames(styles.image, styles['image-primary'])}
          />
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
