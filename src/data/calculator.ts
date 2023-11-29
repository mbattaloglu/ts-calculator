export class Calculator {
  private previousOperandTextElement: HTMLDivElement | null;
  private currentOperandTextElement: HTMLDivElement | null;
  private currentOperand: string;
  private previousOperand: string;
  private operation: string | undefined;

  public constructor(
    previousOperandTextElement: HTMLDivElement | null,
    currentOperandTextElement: HTMLDivElement | null,
  ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = "";
    this.previousOperand = "";
    this.clear();
  }

  public clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  public delete(): void {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  public appendNumber(number: string | null): void {
    if (!number) return;
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  public chooseOperation(operation: string | null): void {
    if (!operation) return;
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";

    this.updateDisplay();
  }

  public compute(): void {
    let computation: number = 0;

    const prev: number = parseFloat(this.previousOperand);
    const current: number = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  private getDisplayNumber(number: string): string {
    const stringNumber: string = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay: string = "";
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  public updateDisplay(): void {
    if (this.currentOperandTextElement)
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand,
      );
    if (this.operation != null) {
      if (this.previousOperandTextElement)
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand,
        )} ${this.operation}`;
    } else {
      if (this.previousOperandTextElement)
        this.previousOperandTextElement!.innerText = "";
    }
  }
}
