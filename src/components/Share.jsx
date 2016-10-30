import S from './share.less';
import G from '../common.less';

class Share extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }

  render() {
    return (
      <div>
        <div className={`${G.btn} ${S.shareBtn}`} />
      </div>
    );
  }
}

export default Share;
