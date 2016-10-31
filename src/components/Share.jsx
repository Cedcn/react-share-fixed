import share from '@geekpark/share-action';
import QRCode from 'qrcode.react';

const Share = props => {
  const shareAction = type => {
    share.run({ type, ...props.options });
  };

  return (
    <div className={`${S.item} ${S.share}`}>
      <div className={`${S.shareBtn} ${S.btn}`}>
        <i className={`${S.iconShare}`} />
        <span className={`${S.text}`}>分享</span>
      </div>
      <div className={`${S.socialWrapper}`}>
        <div className={`${S.weiboBtn} ${S.socialBtn}`} onClick={() => shareAction('weibo')}>
          <i className={`${S.iconWeibo}`} />
        </div>
      </div>
      <div className={`${S.socialWrapper}`}>
        <div className={`${S.wechatBtn} ${S.socialBtn}`}>
          <i className={`${S.iconWechat}`} />
          <div className={`${S.qrcode}`} >
            <QRCode value={window.location.href} size={98} />
          </div>
        </div>
      </div>
      <div className={`${S.socialWrapper}`}>
        <div className={`${S.twitterBtn} ${S.socialBtn}`} onClick={() => shareAction('twitter')}>
          <i className={`${S.iconTwitter}`} />
        </div>
      </div>
    </div>
  );
};

Share.propTypes = {
  options: React.PropTypes.object
};

export default Share;
