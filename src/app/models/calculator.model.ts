export class CalculatorModel {
    private value: number;
    
    constructor(startFrom?: number) {
        this.value = startFrom || 0;
    }

    public add(...numbers: number[]): void {
        this.value = this.value + (numbers || []).reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    }

    public getValue(): number {
        return this.value;
    }
}