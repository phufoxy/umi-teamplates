import React from 'react';
import { Layout } from 'antd';
import { connect, withRouter, Link } from 'umi';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const mapStateToProps = ({ settings }) => ({
  isBorderless: settings.isBorderless,
  isSquaredBorders: settings.isSquaredBorders,
  isFixedWidth: settings.isFixedWidth,
  isMenuShadow: settings.isMenuShadow,
  isMenuTop: settings.isMenuTop,
  isMenuCollapsed: settings.isMenuCollapsed,
});

@withRouter
@connect(mapStateToProps)
class MainLayout extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    setTimeout(() => {
      const header = document.getElementById('header-container');
      header.classList.remove('header-container-loader');
      const footer = document.getElementById('footer-container');
      footer.classList.remove('footer-container-loader');
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const header = document.getElementById('header-container');
    const sticky = header?.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('header-sticky');
      header.style.backgroundColor = `rgba(255,255,255,${window.pageYOffset / 100})`;
    } else {
      header.classList.remove('header-sticky');
      header.style.backgroundColor = `transparent`;
    }
  };

  render() {
    const {
      children,
      isBorderless,
      isSquaredBorders,
      isFixedWidth,
      isMenuShadow,
      isMenuTop,
    } = this.props;
    return (
      <Layout
        className={classnames({
          settings__borderLess: isBorderless,
          settings__squaredBorders: isSquaredBorders,
          settings__fixedWidth: isFixedWidth,
          settings__menuShadow: isMenuShadow,
          settings__menuTop: isMenuTop,
        })}
      >
        <Layout.Header
          id="header-container"
          className={classnames(
            styles['header-container'],
            'header-container-loader',
            'd-flex',
            'justify-content-between',
            'align-items-center',
          )}
        >
          <div className={classnames(styles['logo-container'], 'd-flex', 'align-items-center')}>
            <img alt="Logo" src="/images/home/logo.svg" className={styles.logo} />
            <h1 className={styles.title}>Yummy Profit</h1>
          </div>
          <div className="d-flex flex-row">
            <div className={classnames(styles['menu-container'], 'd-flex')}>
              <div className={styles['menu-item']}>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </div>
              <div className={styles['menu-item']}>
                <Link to="/" className={styles.link}>
                  Products
                </Link>
              </div>
              <div className={styles['menu-item']}>
                <Link to="/" className={styles.link}>
                  Blogs
                </Link>
              </div>
              <div className={styles['menu-item']}>
                <Link to="/" className={styles.link}>
                  ICO
                </Link>
              </div>
            </div>
            <div className={classnames(styles['social-container'], 'd-flex')}>
              <div className={styles['social-item']}>
                <a href="#">
                  <span className="icon-telegram" />
                </a>
              </div>
              <div className={styles['social-item']}>
                <a href="#">
                  <span className="icon-fb" />
                </a>
              </div>
              <div className={styles['social-item']}>
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </div>
              <div className={styles['social-item']}>
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </div>
              <div className={styles['social-item']}>
                <a href="#">
                  <span className="icon-medium" />
                </a>
              </div>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content className={styles.content}>{children}</Layout.Content>
        <Layout.Footer
          id="footer-container"
          className={classnames(
            styles['footer-container'],
            'footer-container-loader',
            'd-flex',
            'justify-content-between',
            'align-items-center',
          )}
        >
          <p className={styles.norm}>Made with ☕️ and 🤘🏼 in Vietnam</p>
          <p className={styles.copyright}>Copyright © 2021 Yummy Profit. All rights Reserved.</p>
        </Layout.Footer>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  isBorderless: PropTypes.bool,
  isSquaredBorders: PropTypes.bool,
  isFixedWidth: PropTypes.bool,
  isMenuShadow: PropTypes.bool,
  isMenuTop: PropTypes.bool,
};

MainLayout.defaultProps = {
  children: '',
  isBorderless: false,
  isSquaredBorders: false,
  isFixedWidth: false,
  isMenuShadow: false,
  isMenuTop: false,
};

export default MainLayout;
