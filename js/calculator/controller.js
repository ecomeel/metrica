class Controller {
    constructor() {
        this.view = new View({
            changeFlatType: this._handlerChangeFlatType,
            changeFlatSize: this._handlerViewChangeSize,
            addAdditService: this._handlerViewAddAdditService
        });
        this.model = new Model({
            changeModelPrice: this._handleModelChangePrice,
        });
    }

    init() {
        this.view.renderFlatSize(this.model.getFlatSize());
        this.view.renderPrice(this.model.getTotalPrice(), this.model.getMetrPrice());
    }

    _handlerChangeFlatType = () => {
        this.model.changeFlatType(this._getFlatType());
        this.view.renderPrice(this.model.getTotalPrice(), this.model.getMetrPrice())
    }

    // _handleViewChangeType = (flatType) => {
    //     this.model.changeFlatType(flatType);
    // };

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


    _getFlatType() {
        return document.getElementById('typeFlatSelector').value;
    }
}
