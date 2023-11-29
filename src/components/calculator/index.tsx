import { useEffect, useRef } from "react";
import buttonData from "../../data/buttons";
import Button from "../button";
import styles from "./styles.module.css";
import { Calculator as CalculatorClass } from "../../data/calculator";

const Calculator: React.FC = () => {
  const buttonsContainer = useRef<HTMLDivElement>(null);
  const previousOperandTextElement = useRef<HTMLDivElement>(null);
  const currentOperandTextElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculator = new CalculatorClass(
      previousOperandTextElement.current,
      currentOperandTextElement.current,
    );

    const numberButtons = buttonsContainer.current?.querySelectorAll(
      "button[data-number]",
    );
    const operationButtons = buttonsContainer.current?.querySelectorAll(
      "button[data-operation]",
    );
    const equalsButton = buttonsContainer.current?.querySelector(
      "button[data-equals]",
    );
    const allClearButton = buttonsContainer.current?.querySelector(
      "button[data-all-clear]",
    );
    const deleteButton = buttonsContainer.current?.querySelector(
      "button[data-delete]",
    );

    numberButtons?.forEach((button) => {
      button.addEventListener("click", () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
      });
    });

    operationButtons?.forEach((button) => {
      button.addEventListener("click", () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
      });
    });

    equalsButton?.addEventListener("click", () => {
      calculator.compute();
      calculator.updateDisplay();
    });

    allClearButton?.addEventListener("click", () => {
      calculator.clear();
      calculator.updateDisplay();
    });

    deleteButton?.addEventListener("click", () => {
      calculator.delete();
      calculator.updateDisplay();
    });
  }, []);

  return (
    <div className={styles["calculator-grid"]} ref={buttonsContainer}>
      <div className={styles.output}>
        <div
          className={styles["previous-operand"]}
          ref={previousOperandTextElement}
        ></div>
        <div
          className={styles["current-operand"]}
          ref={currentOperandTextElement}
        ></div>
      </div>
      {buttonData.map((button) => (
        <Button
          key={button.id}
          title={button.title}
          span={button.span}
          dataLabel={button.dataLabel}
        />
      ))}
    </div>
  );
};

export default Calculator;
