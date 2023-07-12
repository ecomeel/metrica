class Controller {
    constructor() {
        this.view = new View({
            changeFlatType: this.handleViewChangeType,
            changeFlatSize: this.handlerViewChangeSize,
        });
        this.model = new Model({
            changeModelPrice: this.handleModelChangePrice,
        });
    }

    init() {
        this.model.flatType = this.view.getFlatType();
        this.model.flatSize = this.view.getFlatSize();
        this.view.renderFlatSize(this.model.flatSize);
        this.model.changeMetrPrice();
        this.view.render(this.model.totalPrice, this.model.metrPrice);
    }

    handleViewChangeType = (flatType) => {
        this.model.changeFlatType(flatType);
    };

    handlerViewChangeSize = (flatSize) => {
        this.model.changeFlatSize(flatSize)
    };

    handleModelChangePrice = (total, metrPrice) => {
        this.view.render(total, metrPrice);
    };
}
