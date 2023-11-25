class Model {
    constructor() {
        this.totalPrice = 30000;
        this.flatType = "flat";
        this.metrPrice = 1000;
        this.flatSize = 30;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    getMetrPrice() {
        return this.metrPrice;
    }

    getFlatSize() {
        return this.flatSize;
    }

    changeFlatType(flatType) {
        this.flatType = flatType;

        if (flatType == "flat") {
            this.metrPrice = 1000;
        } else if (flatType == "house") {
            this.metrPrice = 2000;
        }

        this._calculateTotalPrice();
    }

    changeFlatSize(flatSize) {
        this.flatSize = flatSize;
        this._calculateTotalPrice();
    }

    _calculateTotalPrice() {
        this.totalPrice = this.flatSize * this.metrPrice;
    }
}
