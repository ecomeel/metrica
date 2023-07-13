class Controller {
    constructor() {
        this.view = new View({
            changeFlatType: this._handleViewChangeType,
            changeFlatSize: this._handlerViewChangeSize,
            addAdditService: this._handlerViewAddAdditService
        });
        this.model = new Model({
            changeModelPrice: this._handleModelChangePrice,
        });
    }

    init() {
        this.model.flatType = this.view.getFlatType();
        this.model.flatSize = this.view.getFlatSize();
        this.view.renderFlatSize(this.model.flatSize);
        this.model.changeMetrPrice();
        this.view.render(this.model.totalPrice, this.model.metrPrice);
    }

    _handleViewChangeType = (flatType) => {
        this.model.changeFlatType(flatType);
    };

    _handlerViewChangeSize = (flatSize) => {
        this.model.changeFlatSize(flatSize)
    };

    _handleModelChangePrice = (total, metrPrice) => {
        this.view.render(total, metrPrice);
    };

    _handlerViewAddAdditService = (additPrice) => {
        this.model.totalPrice += additPrice;
        this.view.render(this.model.totalPrice, this.model.metrPrice)
    }
}
