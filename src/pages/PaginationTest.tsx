import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Pagination from '@bitUI/Pagination';

const code = `
import { useState } from 'react';
import Pagination from '@bitUI/Pagination';

export function PaginationTest() {
    const [current, setCurrent] = useState(1);

    return (
      <div className="code-box">
        <h1>Pagination 分页</h1>
        <div className="code-box-demo">
          <Pagination current={current} total={500} pageSize={10} onChange={(val) => setCurrent(val)} />
        </div>
      </div>
    );
  }

ReactDOM.render(
  <>
  <PaginationTest />
  </>,
  mountNode,
);`;

export function PaginationTest() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="code-box">
      <h1>Pagination 分页</h1>
      <div className="code-box-demo">
        <Pagination current={current} total={500} pageSize={10} onChange={(val) => setCurrent(val)} />
      </div>

      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
