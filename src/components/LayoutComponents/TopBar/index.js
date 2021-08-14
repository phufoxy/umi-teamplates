import React from 'react';
import Notification from './Notification';
import ProfileMenu from './ProfileMenu';
import Settings from './Settings';
import styles from './style.module.scss';

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="mr-4"></div>
        <div className="mr-auto" />
        <div className="mr-4">
          <Settings />
        </div>
        <div className="mr-4">
          <Notification />
        </div>
        <ProfileMenu />
      </div>
    );
  }
}

export default TopBar;
