import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Checkbox } from '@bitUI/Checkbox';

const code = `import { Checkbox } from '@bitUI/Checkbox';

ReactDOM.render(
  <>
    <Checkbox
          onChange={(val) => {
            alert(val);
      }}
    >
      Checkbox
    </Checkbox>
  </>,
  mountNode,
);`;

export function CheckboxTest() {
  return (
    <div className="code-box">
      <h1>Checkbox 多选框</h1>
      <div className="code-box-demo">
        <Checkbox
          onChange={(val) => {
            alert(val);
          }}
        >
          Checkbox
        </Checkbox>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
