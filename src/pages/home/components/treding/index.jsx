import React, { PureComponent } from 'react';
import { connect } from 'umi';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                <h3 className={classnames(styles.title, 'mb20')}>Trending topics</h3>
                <p className={styles.norm}>
                  The best articles for you to learn and read which are currently trending topics
                  especially for you
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(styles['slider-container'], 'mt50', 'wow fadeIn')}
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
                <div className={classnames(styles['slider-card'], 'mt20')}>
                  <div className={styles['image-container']}>
                    <img
                      alt="Logo"
                      src="/images/home/trending/image_01.png"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles['slider-cọntent']}>
                    <div className={styles['info-container']}>
                      <h3 className={styles['sub-title']}>BITCOIN REGULATION</h3>
                      <p className={styles.norm}>168 views</p>
                    </div>
                    <h3 className={classnames(styles.title, 'mt20')}>
                      Iceland Lawmaker Proposes Tax on Incoming Cryptocurrency Minners
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['slider-item']}>
                <div className={classnames(styles['slider-card'], 'mt20')}>
                  <div className={styles['image-container']}>
                    <img
                      alt="Logo"
                      src="/images/home/trending/image_02.png"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles['slider-cọntent']}>
                    <div className={styles['info-container']}>
                      <h3 className={styles['sub-title']}>BITCOIN REGULATION</h3>
                      <p className={styles.norm}>168 views</p>
                    </div>
                    <h3 className={classnames(styles.title, 'mt20')}>
                      Cryptocurrency Regulation ‘Inevitable,’ Says IMF Chief Christine Lagarde
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['slider-item']}>
                <div className={classnames(styles['slider-card'], 'mt20')}>
                  <div className={styles['image-container']}>
                    <img
                      alt="Logo"
                      src="/images/home/trending/image_03.png"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles['slider-cọntent']}>
                    <div className={styles['info-container']}>
                      <h3 className={styles['sub-title']}>BANKING</h3>
                      <p className={styles.norm}>168 views</p>
                    </div>
                    <h3 className={classnames(styles.title, 'mt20')}>
                      20 Organizations File Amicus Briefs in Support of Silk Road Founder Ross
                      Ulbricht
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
