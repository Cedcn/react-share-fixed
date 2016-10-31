import { render } from 'react-dom';
import ShareFixed from '../src/ShareFixed';
import S from './index.less';

const config = {
  size: 14
};

const Example = () => {
  return (
    <div className={S.example}>
      <ShareFixed {...config} />
    </div>
  );
};

render(<Example />, document.getElementById('share-fixed'));
