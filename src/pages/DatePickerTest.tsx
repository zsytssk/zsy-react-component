import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import DatePicker from '@bitUI/DatePicker';

const code = `import { Checkbox } from '@bitUI/Checkbox';

ReactDOM.render(
  <>
    <DatePicker
        className="date-picker-pc"
        isMobile={false}
        value={value1}
        getPopupContainer={(parent) => parent}
        onChange={(date) => alert(date)}
    />
    <DatePicker className="date-picker-pc" value={value2} isMobile={true} onChange={(date) => alert(date)} />
  </>,
  mountNode,
);`;

export function DatePickerTest() {
  const [value1, setValue1] = useState<number>();
  const [value2, setValue2] = useState<number>();

  return (
    <div className="code-box">
      <h1>DatePicker 日期选择器 </h1>
      <div className="code-box-demo">
        <div className="code-box-line">
          pc:
          <DatePicker
            className="date-picker-pc"
            isMobile={false}
            value={value1}
            getPopupContainer={(parent) => parent}
            onChange={(date) => setValue1(date)}
          />
        </div>
        <div className="code-box-line">
          h5:
          <DatePicker className="date-picker-pc" value={value2} isMobile={true} onChange={(date) => setValue2(date)} />
        </div>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
