import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('The amount must be a number');
        }
        this._amount = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('The currency must be an instance of Currency');
        }
        this._currency = value;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('The amount and conversion rate should be numbers');
        }
        return amount * conversionRate;
    }
}
