import ReactDOM from 'react-dom';

import { ButtonTest } from './pages/ButtonTest';

import './style.less';

function App() {
  return (
    <div>
      <ButtonTest />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
