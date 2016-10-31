import Share from './components/Share';
import Official from './components/Official';
import Mobile from './components/Mobile';
import Top from './components/Top';

const ShareFixed = props => {
  const { iconbar, officialQrcode, appQrcode, share } = props;
  const isMount = type => iconbar.indexOf(type) >= 0;

  return (
    <div className={`${S.shareFixed}`}>
      {isMount('share') ? <Share options={share} /> : null}
      {isMount('app') ? <Mobile qrcode={appQrcode} /> : null}
      {isMount('official') ? <Official qrcode={officialQrcode} /> : null}
      {isMount('backtop') ? <Top /> : null}
    </div>
  );
};

ShareFixed.defaultProps = {
  iconbar: ['share', 'app', 'official', 'backtop'], // Need show Component
  share: {}, // share-action options
  officialQrcode: require('./images/official.jpg'),
  appQrcode: require('./images/app_qr.jpg')
};

ShareFixed.propTypes = {
  iconbar: React.PropTypes.array,
  share: React.PropTypes.object,
  officialQrcode: React.PropTypes.string,
  appQrcode: React.PropTypes.string
};

export default ShareFixed;
