class Controller {
    constructor() {
        this.view = new View({
            changeFlatType: this._handlerChangeFlatType,
            changeFlatSize: this._handlerChangeFlatSize,
            addAdditService: this._handlerViewAddAdditService,
        });
        this.model = new Model();
    }

    init() {
        this.view.renderFlatSize(this.model.getFlatSize());
        this.view.renderPrice(
            this.model.getTotalPrice(),
            this.model.getMetrPrice()
        );
    }

    _handlerChangeFlatType = () => {
        this.model.changeFlatType(this._getFlatType());
        this.view.renderPrice(
            this.model.getTotalPrice(),
            this.model.getMetrPrice()
        );
    };
    

    _handlerChangeFlatSize = () => {
        document.getElementById("flatSizeValue").innerText =
            this._getFlatSize();
        this.model.changeFlatSize(this._getFlatSize());
        console.log(this.model.getTotalPrice())
        this.view.renderPrice(this.model.getTotalPrice(), this.model.getMetrPrice())
    };

    _handlerViewAddAdditService = (additPrice) => {
        this.model.increaseTotalPrice(additPrice);
        this.view.renderPrice(this.model.getTotalPrice(), this.model.getMetrPrice());
    };

    _getFlatType() {
        return document.getElementById("typeFlatSelector").value;
    }

    _getFlatSize() {
        return document.getElementById("flatSizeSlider").value;
    }
}
