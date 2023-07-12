class Controller {
    constructor() {
        this.view = new View({
            changeFlatType: this.handleViewChangePrice
        });
        this.model = new Model({
            changeModelPrice: this.handleModelChangePrice
        });

    }

    init() {
        this.model.typeFlat = this.view.getFlatType();
        this.model.roomArea = this.view.getFlatSize();
        this.view.renderFlatSize(this.model.roomArea);
        this.model.changeMetrPrice();
        this.view.render(this.model.totalPrice, this.model.metrPrice)
    }

    handleViewChangePrice = (typeFlat) => {
        this.model.setTypeFlat(typeFlat)
    }

    handleModelChangePrice = (total, metrPrice) => {
        this.view.render(total, metrPrice)
    }
}