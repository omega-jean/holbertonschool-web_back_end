export default class Building {
    constructor (sqft) {

        this.sqft = sqft;
        if (new.target === Building) {
            throw new TypeError('Cannot construct Building instances directly');
        }

        if (this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(value) {
        if (typeof value !== 'Number') {
            throw new TypeError('Sqft must be a number');
        }
        this._sqft = value;
    }

    
}