import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import { initailData, preformCalculation } from "../utils/calculatorUtils";

export default function Calculator() {
  // 관련된 값들을 하나의 객체로 묶어 사용 = state를 여러개로 쪼개지 않고 사용
  const [calculatorState, setCalculatorState] =
    useState<CalculatorState>(initailData);
  const handleClear = () => {
    //이전 state 값을 쓸 필요가 없으면 함수형 업데이트 ((prev)=>...) 를 안 써도 된다.
    setCalculatorState(initailData);
  };
  const handleOperator = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const operator = event.currentTarget.value;
    setCalculatorState((calculatorState) => {
      if (calculatorState.currentNumber === "" && operator)
        return calculatorState;
      const current = parseFloat(calculatorState.currentNumber);

      if (calculatorState.previousNumber && calculatorState.operation) {
        const prev = parseFloat(calculatorState.previousNumber);
        const result = preformCalculation(
          prev,
          current,
          calculatorState.operation
        );
        return operator === "="
          ? {
              currentNumber: result.toString(),
              previousNumber: "",
              operation: null,
              isNewNumber: true,
            }
          : {
              currentNumber: "",
              previousNumber: result.toString(),
              operation: operator,
              isNewNumber: true,
            };
      } else if (operator === "=") {
        return { ...calculatorState, isNewNumber: true };
      } else {
        return {
          currentNumber: "",
          previousNumber: current.toString(),
          operation: operator,
          isNewNumber: true,
        };
      }
    });
  };
  const handleNum = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const value = event.currentTarget.value;
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.isNewNumber
        ? value
        : calculatorState.currentNumber + value,
      isNewNumber: false,
    }));
  };
  const handleDot = () => {
    setCalculatorState((calculatorState) => {
      if (calculatorState.currentNumber.includes(".")) return calculatorState;
      return {
        ...calculatorState,
        currentNumber: calculatorState.currentNumber + ".",
        isNewNumber: false,
      };
    });
  };
  const buttonConfigs: ButtonConfigs[] = [
    {
      value: "C",
      className: "calc-clear",
      onClick: handleClear,
    },
    {
      value: "/",
      className: "calc-operator",
      onClick: handleOperator,
    },
    {
      value: "1",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "2",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "3",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "*",
      className: "calc-operator",
      onClick: handleOperator,
    },
    {
      value: "4",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "5",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "6",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "+",
      className: "calc-operator",
      onClick: handleOperator,
    },
    {
      value: "7",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "8",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "9",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "-",
      className: "calc-operator",
      onClick: handleOperator,
    },
    {
      value: ".",
      className: "calc-dot",
      onClick: handleDot,
    },
    {
      value: "0",
      className: "calc-num",
      onClick: handleNum,
    },
    {
      value: "=",
      className: "calc-result",
      onClick: handleOperator,
    },
  ];
  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-1">
          <form
            className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1"
            name="forms"
          >
            <input
              type="text"
              value={calculatorState.currentNumber}
              className="calc-input"
              name="output"
              readOnly
            />
            {buttonConfigs.map((buttonConfig) => (
              <CalculatorButton key={buttonConfig.value} {...buttonConfig} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
