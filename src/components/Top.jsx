import scrollTo from 'scroll-to';

const Top = props => {
  return (
    <div className={`${S.item} ${S.top} ${props.isShow ? S.show : S.hide}`}>
      <div className={`${S.shareBtn} ${S.btn}`} onClick={() => scrollTo(0, 0, { duration: 500 })}>
        <i className={`${S.iconTop}`} />
        <span className={`${S.text}`}>TOP</span>
      </div>
    </div>
  );
};

export default Top;
