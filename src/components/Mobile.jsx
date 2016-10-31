const Mobile = props => {
  const { qrcode = require('../images/app_qr.jpg') } = props;

  return (
    <div className={`${S.item} ${S.mobile}`}>
      <div className={`${S.mobileBtn} ${S.btn}`}>
        <i className={`${S.iconMobile}`} />
        <span className={`${S.text}`}>公众号</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="微信公众平台" src={qrcode} />
      </div>
    </div>
  );
};


Mobile.propTypes = {
  qrcode: React.PropTypes.string
};
export default Mobile;
