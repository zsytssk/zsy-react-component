import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Tooltip } from '@bitUI/Tooltip/Tooltip';

const code = `import { Tooltip } from '@bitUI/Tooltip/Tooltip';

ReactDOM.render(
  <>
    <Tooltip title="this is a tip">
        <button>show tip</button>
    </Tooltip>
  </>,
  mountNode,
);`;

export function TooltipTest() {
  return (
    <div className="code-box">
      <h1>Tooltip 小提示</h1>
      <div className="code-box-demo">
        <Tooltip title="this is a tip">
          <button>show tip</button>
        </Tooltip>
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
