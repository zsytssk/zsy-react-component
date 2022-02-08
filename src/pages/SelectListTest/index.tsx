import { useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SelectList from '@bitUI/SelectList';

const code = `import SelectList from '@bitUI/SelectList';

ReactDOM.render(
  <>
  <div className="code-box-line">
    pc:
    <SelectList
      className="select-list-demo"
      isMobile={false}
      dataSource={data}
      value={val}
      onChange={(val) => {
        setVal(val);
      }}
    >
      {data.find((item) => item.value === val)?.label}
    </SelectList>
  </div>
  <div className="code-box-line">
    h5:
    <SelectList
      className="select-list-demo"
      isMobile={true}
      dataSource={data}
      value={val1}
      onChange={(val) => {
        setVal1(val);
      }}
    >
      {data.find((item) => item.value === val1)?.label}
    </SelectList>
  </div>
  </>,
  mountNode,
);`;

export function SelectListTest() {
  const data = useMemo(() => {
    return [
      {
        value: '1',
        label: '选项1',
      },
      {
        value: '2',
        label: '选项2',
      },
      {
        value: '3',
        label: '选项3',
      },
    ];
  }, []);

  const [val, setVal] = useState<string>(data[0].value);
  const [val1, setVal1] = useState<string>(data[0].value);

  return (
    <div className="code-box">
      <h1>selectList 选择框</h1>
      <div className="code-box-demo">
        <div className="code-box-line">
          pc:
          <SelectList
            className="select-list-demo"
            isMobile={false}
            dataSource={data}
            value={val}
            onChange={(val) => {
              setVal(val);
            }}
          >
            {data.find((item) => item.value === val)?.label}
          </SelectList>
        </div>
        <div className="code-box-line">
          h5:
          <SelectList
            className="select-list-demo"
            isMobile={true}
            dataSource={data}
            value={val1}
            onChange={(val) => {
              setVal1(val);
            }}
          >
            {data.find((item) => item.value === val1)?.label}
          </SelectList>
        </div>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
