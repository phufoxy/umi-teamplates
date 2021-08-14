import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'umi';
import BannerComponent from './components/banner';
import ProfitComponent from './components/profit';
import JourneyComponent from './components/journey';
import FeatureComponent from './components/feature';
import AboutUsComponent from './components/about-us';
import OurTeamComponent from './components/our-team';
import TredingComponent from './components/treding';
import TalkingComponent from './components/talking';
import CommunityComponent from './components/community';
import FooterComponent from './components/footer';

@connect(({ user, loading }) => ({ user, loading }))
class Index extends PureComponent {
  render() {
    return (
      <>
        <Helmet title="Home" />
        <BannerComponent />
        <ProfitComponent />
        <JourneyComponent />
        <FeatureComponent />
        <AboutUsComponent />
        <OurTeamComponent />
        <TredingComponent />
        <TalkingComponent />
        <CommunityComponent />
        <FooterComponent />
      </>
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
