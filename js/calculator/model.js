class Model {
    constructor({ changeModelPrice }) {
        this.totalPrice = 30000;
        this.flatType = "flat";
        this.metrPrice = 1000;
        this.flatSize = 30;

        this.changeModelPrice = changeModelPrice;
    }

    getTotalPrice() {
        return this.typeFlat;
    }

    changeFlatType(flatType) {
        this.flatType = flatType;
        this.changeMetrPrice();
        this.changeModelPrice(this.totalPrice, this.metrPrice);
    }

    changeFlatSize(flatSize) {
        this.flatSize = flatSize;
        this.calculateTotalPrice();
        this.changeModelPrice(this.totalPrice, this.metrPrice)
    }

    changeMetrPrice() {
        if (this.typeFlat === "flat") {
            this.metrPrice = 1000;
        } else if (this.flatType === "house") {
            this.metrPrice = 2000;
        }
        this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        this.totalPrice = this.flatSize * this.metrPrice;

        this.changeModelPrice(this.totalPrice, this.metrPrice);
    }
}
