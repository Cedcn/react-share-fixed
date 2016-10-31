import Share from './components/Share';
import Official from './components/Official';
import Mobile from './components/Mobile';
import Top from './components/Top';

const ShareFixed = props => {
  const { size = 14 } = props;

  return (
    <div className={`${S.shareFixed}`} style={{ fontSize: size }}>
      <Share />
      <Official />
      <Mobile />
      <Top />
    </div>
  );
};

ShareFixed.propTypes = {
  size: React.PropTypes.number
};

export default ShareFixed;
