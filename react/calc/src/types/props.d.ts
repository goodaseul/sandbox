type ButtonConfigs = {
  // 버튼을 만들기 위한 옵션 묶음 = conifg[설정값으로 묶을 때]
  // ex/초기값 or 고정 옵션/동작 설명/배열로 많이 씀
  value: string;
  className: string;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

type CalculatorState = {
  // 현재 상태/시간에 따라 변함/UI,로직이 의존함 = state
  currentNumber: string;
  previousNumber: string;
  operation: null | string;
  isNewNumber: boolean;
};
