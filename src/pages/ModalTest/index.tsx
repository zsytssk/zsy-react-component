import classnames from 'classnames';
import { useCallback, useState } from 'react';
import SVG from 'react-inlinesvg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Modal, { ModalProps } from '@bitUI/Modal';
import { Button } from '@bitUI/button';

import iconClose from './icon-close.svg';
import style from './style.module.less';

const code = `
import classnames from 'classnames';
import { useCallback, useState } from 'react';
import SVG from 'react-inlinesvg';

import Modal, { ModalProps } from '@bitUI/Modal';
import { Button } from '@bitUI/button';

import iconClose from './icon-close.svg';
import style from './style.module.less';

export function ModalTest() {
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div className="code-box">
      <h1>Modal 弹框</h1>
      <div className="code-box-demo">
        <Button onClick={() => setVisible(true)}>打开弹框</Button>
      </div>

      <Modal visible={visible} onCancel={onClose} className={classnames({ [style.seModal]: true })}>
        <div className="header">
          {'标题'}
          <div className="close" onClick={onClose}>
            <SVG src={iconClose} />
          </div>
        </div>
        <div className="con">这里是弹框内容</div>
      </Modal>
    </div>
  );
}

ReactDOM.render(
  <>
    <ModalTest/>
  </>,
  mountNode,
);`;

export function ModalTest() {
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div className="code-box">
      <h1>Modal 弹框</h1>
      <div className="code-box-demo">
        <Button onClick={() => setVisible(true)}>打开弹框</Button>
      </div>

      <Modal visible={visible} onCancel={onClose} className={classnames({ [style.seModal]: true })}>
        <div className="header">
          {'标题'}
          <div className="close" onClick={onClose}>
            <SVG src={iconClose} />
          </div>
        </div>
        <div className="con">这里是弹框内容</div>
      </Modal>
      <SyntaxHighlighter language="typescript" style={atomOneLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
