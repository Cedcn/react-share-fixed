const Mobile = () => {
  return (
    <div className={`${S.item} ${S.mobile}`}>
      <div className={`${S.mobileBtn} ${S.btn}`}>
        <i className={`${S.iconMobile}`} />
        <span className={`${S.text}`}>公众号</span>
      </div>
      <div className={`${S.qrcode}`} >
        <img alt="微信公众平台" src="https://ocpk3ohd2.qnssl.com/assets/qrcodes/geekpark-1e9a66f8b62a8c80c1afce702a924b94.jpg" />
      </div>
    </div>
  );
};

export default Mobile;
