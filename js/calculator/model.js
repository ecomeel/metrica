class Model {
    constructor({
        changeModelPrice
    }) {
        this.totalPrice = 30000;
        this.typeFlat = 'flat';
        this.metrPrice = 1000;
        this.roomArea = 30;

        this.changeModelPrice = changeModelPrice;
    }

    

    getTotalPrice() {
        return this.typeFlat;
    }

    setTypeFlat(typeFlat) {
        this.typeFlat = typeFlat;
        this.changeMetrPrice();
        // this.calculateTotalPrice();

        this.changeModelPrice(this.totalPrice, this.metrPrice)
    }

    changeMetrPrice() {
        if (this.typeFlat === 'flat') {
            this.metrPrice = 1000
        } else if (this.typeFlat === 'house') {
            this.metrPrice = 2000;
        }
        this.calculateTotalPrice()
    }

    calculateTotalPrice() {
        this.totalPrice = this.roomArea * this.metrPrice;

        this.changeModelPrice(this.totalPrice, this.metrPrice)
    }

}