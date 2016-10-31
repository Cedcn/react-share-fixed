import scrollTo from 'scroll-to';

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    const pageScroll = () => {
      if (window.scrollY >= 100) {
        this.setState({ isShow: true });
      } else {
        this.setState({ isShow: false });
      }
    };
    window.addEventListener('scroll', pageScroll);
  }

  render() {
    return (
      <div className={`${S.item} ${S.top} ${this.state.isShow ? S.show : S.hide}`}>
        <div className={`${S.shareBtn} ${S.btn}`} onClick={() => scrollTo(0, 0, { duration: 500 })}>
          <i className={`${S.iconTop}`} />
          <span className={`${S.text}`}>TOP</span>
        </div>
      </div>
    );
  }
}

export default Top;
