import { CalculatorModel } from "./calculator.model";

describe('CalculatorModel', () => {

    describe('constructor', () => {
        it('без параметров => 0', () => {
            expect(new CalculatorModel().getValue()).toBe(0);
        });

        it('указано число => указанное число', () => {
            expect(new CalculatorModel(2).getValue()).toBe(2);
        });
    });

    it('add', () => {
        const calculator = new CalculatorModel(2)
        calculator.add()
        expect(calculator.getValue()).toBe(2);
        calculator.add(1)
        expect(calculator.getValue()).toBe(3);
        calculator.add(1,2,3,4)
        expect(calculator.getValue()).toBe(13);
        calculator.add(-10)
        expect(calculator.getValue()).toBe(3);
        calculator.add(-1, -2)
        expect(calculator.getValue()).toBe(0);
        calculator.add(-1, 2, -3)
        expect(calculator.getValue()).toBe(-2);
   });
});