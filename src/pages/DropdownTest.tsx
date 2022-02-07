export function DropdownTest() {
  return (
    <div className="code-box">
      <h1>DatePicker 日期选择器</h1>
      <div className="code-box-demo">
        <DatePicker isMobile={false} onChange={(date) => alert(date)} />
      </div>
    </div>
  );
}
