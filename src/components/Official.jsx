const Official = props => {
  const { qrcode = require('../images/official.jpg') } = props;
  return (
    <div className={`${S.item} ${S.official}`}>
      <div className={`${S.officialBtn} ${S.btn}`}>
        <i className={`${S.iconOfficial}`} />
        <span className={`${S.text}`}>IOS</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="ios下载" src={qrcode} />
      </div>
    </div>
  );
};

Official.propTypes = {
  qrcode: React.PropTypes.string
};

export default Official;
