import { PropTypes } from 'react';
import Share from './components/Share';
import Official from './components/Official';
import Mobile from './components/Mobile';
import Top from './components/Top';

class ShareFixed extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    const pageScroll = () => {
      if (window.scrollY >= 100) {
        this.setState({ isShow: true });
      } else {
        this.setState({ isShow: false });
      }
    };
    window.addEventListener('scroll', pageScroll);
  }
  render() {
    const { size = 14 } = this.props;
    return (
      <div className={`${S.shareFixed}`} style={{ fontSize: size }}>
        <Share />
        <Official />
        <Mobile />
        <Top isShow={this.state.isShow} />
      </div>
    );
  }
}

ShareFixed.propTypes = {
  size: PropTypes.number
};

export default ShareFixed;
