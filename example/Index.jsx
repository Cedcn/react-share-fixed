import { render } from 'react-dom';
import ShareFixed from '../src/ShareFixed';
import S from './index.less';

const config = {
  iconbar: ['share', 'app', 'official', 'backtop']
};

const Example = () => {
  return (
    <div className={S.example}>
      <ShareFixed {...config} />
    </div>
  );
};

render(<Example />, document.getElementById('share-fixed'));
