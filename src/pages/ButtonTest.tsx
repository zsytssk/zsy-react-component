import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Button } from '@bitUI/button';

const code = `import { Button } from "@bitUI/button"

ReactDOM.render(
  <>
  <Button>Button</Button>
  <Button loading={true}>test</Button>
  </>,
  mountNode,
);`;

export function ButtonTest() {
  return (
    <div className="code-box">
      <h1>Button 按钮</h1>
      <div className="code-box-demo">
        <Button>Button</Button>
        <Button loading={true}>test</Button>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
