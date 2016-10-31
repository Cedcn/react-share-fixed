const Official = () => {
  return (
    <div className={`${S.item} ${S.official}`}>
      <div className={`${S.officialBtn} ${S.btn}`}>
        <i className={`${S.iconOfficial}`} />
        <span className={`${S.text}`}>IOS</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="微信公众平台" src="https://ocpk3ohd2.qnssl.com/assets/qrcodes/geekpark-1e9a66f8b62a8c80c1afce702a924b94.jpg" />
      </div>
    </div>
  );
};

export default Official;
