import { render } from 'react-dom';
import ShareFixed from '../src/ShareFixed';
import S from './index.less';

const config = {

};

class Example extends React.Component {
  render() {
    return (
      <div className={S.example}>
        <ShareFixed {...config} />
      </div>
    );
  }
}

render(<Example />, document.getElementById('share-fixed'));
