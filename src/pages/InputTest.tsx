import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Input } from '@bitUI/Input';

const code = `import { Checkbox } from '@bitUI/Checkbox';

ReactDOM.render(
  <>
  <Input />
  <Input type={'password'} />
  </>,
  mountNode,
);`;

export function InputTest() {
  return (
    <div className="code-box">
      <h1>Input 输入框</h1>
      <div className="code-box-demo">
        <Input />
        <Input type={'password'} />
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
