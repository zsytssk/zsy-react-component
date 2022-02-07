import { useEffect, useRef } from 'react';

import BtListView from '@bitUI/BtListView';

export function BtListViewTest() {
  const actionRef = useRef<{ reload: () => void }>();

  useEffect(() => {
    actionRef.current?.reload();
  });

  return (
    <BtListView
      // actionRef.current.reload() 重置数据
      actionRef={actionRef}
      pagination={true}
      // 渲染item
      itemRender={(item: any) => {
        return <div>{item}</div>;
      }}
      // end 是否停止请求 list 是新请求的数据
      request={async (params) => {
        console.log('params', params);
        if (params.pageNum > 6) {
          return { end: true, total: 100 };
        }
        return { end: false, total: 100, list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
      }}
    />
  );
}
