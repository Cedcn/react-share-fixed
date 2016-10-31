const Official = props => {
  return (
    <div className={`${S.item} ${S.official}`}>
      <div className={`${S.officialBtn} ${S.btn}`}>
        <i className={`${S.iconOfficial}`} />
        <span className={`${S.text}`}>公众号</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="微信公众平台" src={props.qrcode} />
      </div>
    </div>
  );
};

Official.propTypes = {
  qrcode: React.PropTypes.string.isRequired
};

export default Official;
