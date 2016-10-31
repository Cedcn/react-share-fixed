const Mobile = props => {
  return (
    <div className={`${S.item} ${S.mobile}`}>
      <div className={`${S.mobileBtn} ${S.btn}`}>
        <i className={`${S.iconMobile}`} />
        <span className={`${S.text}`}>IOS</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="IOS下载" src={props.qrcode} />
      </div>
    </div>
  );
};

Mobile.propTypes = {
  qrcode: React.PropTypes.string.isRequired
};
export default Mobile;
