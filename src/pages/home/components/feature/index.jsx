import React, { PureComponent } from 'react';
import { connect } from 'umi';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import WOW from 'wowjs';
import styles from './styles.module.scss';

// Import Swiper styles

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
                <h3 className={classnames(styles.title, 'mb20')}>
                  Going global with our feature-rich
                </h3>
                <h3 className={classnames(styles['sub-title'], 'mb20')}>Roadmap</h3>
                <p className={styles.norm}>
                  We have a proven track record and a feature-rich roadmap to fulfil our aspirations
                  of becoming a global brand that operates at the bleeding-edge of crypto wallet &
                  trading.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(
            styles['slider-container'],
            'mt100',
            'justify-content-center',
            'wow fadeIn',
          )}
          data-wow-duration="2.5s"
          data-wow-delay="0.5s"
        >
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            loop
            centeredSlides
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1444: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 3,
              },
              1555: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles['slider-item']}>
                <h5 className={classnames(styles.time, 'text-center')}>December, 2020</h5>
                <div className={classnames(styles['slider-card'], 'mt20', 'text-center')}>
                  <div className={classnames(styles.icon, 'mb20')}>
                    <span className="icon-light-bulb" />
                  </div>
                  <h3 className={classnames(styles.title, 'mt20', 'mb20')}>White Paper v1.0</h3>
                  <div className={classnames(styles.tag, styles.success, 'mt20', 'mb30')}>
                    <span>DONE</span>
                  </div>
                  <p className={styles.norm}>
                    The white paper will present the business model, useful and convincing research
                    and information about the products and services in the yummy profit ecosystem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['slider-item']}>
                <h5 className={classnames(styles.time, 'text-center')}>December, 2020</h5>
                <div className={classnames(styles['slider-card'], 'mt20', 'text-center')}>
                  <div className={classnames(styles.icon, 'mb20')}>
                    <span className="icon-increase" />
                  </div>
                  <h3 className={classnames(styles.title, 'mt20', 'mb20')}>
                    Indicator Trading Signal
                  </h3>
                  <div className={classnames(styles.tag, styles.danger, 'mt20', 'mb30')}>
                    <span>LIVE</span>
                  </div>
                  <p className={styles.norm}>
                    Indicator Trading Signal app beta launch on iOS & Android store
                  </p>
                  <p className={styles.norm}>
                    Integrates 15 popular indicators and 14 price action types for 5 markets:
                    cryptocurrency, forex, stocks, indies, and commodities.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['slider-item']}>
                <h5 className={classnames(styles.time, 'text-center')}>December, 2020</h5>
                <div className={classnames(styles['slider-card'], 'mt20', 'text-center')}>
                  <div className={classnames(styles.icon, 'mb20')}>
                    <span className="icon-light-bulb" />
                  </div>
                  <h3 className={classnames(styles.title, 'mt20', 'mb20')}>White Paper v1.1</h3>
                  <div className={classnames(styles.tag, styles.primary, 'mt20', 'mb30')}>
                    <span>IN PROGRESS</span>
                  </div>
                  <p className={styles.norm}>
                    The white paper will present the business model, useful and convincing research
                    and information about the products and services in the yummy profit ecosystem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classnames(styles['timeline-container'], 'mt100')}>
          <div className={styles['timeline-main']}>
            <div className={styles['dot-start']}>
              <span className="icon-back" />
              <span className="icon-next" />
            </div>
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
          <p className={styles.norm}>3/16</p>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
