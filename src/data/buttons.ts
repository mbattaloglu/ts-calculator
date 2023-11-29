type Button = {
  id: number;
  title: string;
  span: boolean;
  dataLabel: string;
};

const buttonData: Button[] = [
  { id: 1, title: "AC", span: true, dataLabel: "data-all-clear" },
  { id: 2, title: "DEL", span: false, dataLabel: "data-delete" },
  { id: 3, title: "÷", span: false, dataLabel: "data-operation" },
  { id: 4, title: "1", span: false, dataLabel: "data-number" },
  { id: 5, title: "2", span: false, dataLabel: "data-number" },
  { id: 6, title: "3", span: false, dataLabel: "data-number" },
  { id: 7, title: "*", span: false, dataLabel: "data-operation" },
  { id: 8, title: "4", span: false, dataLabel: "data-number" },
  { id: 9, title: "5", span: false, dataLabel: "data-number" },
  { id: 10, title: "6", span: false, dataLabel: "data-number" },
  { id: 11, title: "+", span: false, dataLabel: "data-operation" },
  { id: 12, title: "7", span: false, dataLabel: "data-number" },
  { id: 13, title: "8", span: false, dataLabel: "data-number" },
  { id: 14, title: "9", span: false, dataLabel: "data-number" },
  { id: 15, title: "-", span: false, dataLabel: "data-operation" },
  { id: 16, title: ".", span: false, dataLabel: "data-number" },
  { id: 17, title: "0", span: false, dataLabel: "data-number" },
  { id: 18, title: "=", span: true, dataLabel: "data-equals" },
];

export default buttonData;
