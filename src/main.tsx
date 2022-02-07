import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ButtonTest } from './pages/ButtonTest';
import { CheckboxTest } from './pages/CheckBoxTest';
import { DatePickerTest } from './pages/DatePickerTest';

import './style.less';

function App() {
  useEffect(() => {
    var setFontSize = function () {
      var width = document.documentElement.clientWidth;
      width = width > 768 ? 768 : width;
      var fontSize = (width / 768) * 100;
      document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
    };
    setFontSize();
    window.addEventListener('resize', setFontSize);
  }, []);

  return (
    <div>
      <ButtonTest />
      <CheckboxTest />
      <DatePickerTest />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
