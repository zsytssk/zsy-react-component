import { useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SelectList from '@bitUI/SelectList';

const code = `import { Checkbox } from '@bitUI/Checkbox';

ReactDOM.render(
  <>
  <Input />
  <Input type={'password'} />
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

  return (
    <div className="code-box">
      <h1>selectList 选择框</h1>
      <div className="code-box-demo">
        <SelectList
          isMobile={true}
          dataSource={data}
          onChange={(val) => {
            setVal(val);
          }}
        >
          {data.find((item) => item.value === val)?.label}
        </SelectList>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
