class View {
    constructor({changeFlatType}) {
        this.flatSizeSliderNode = document.getElementById('flatSizeSlider');
        this.typeFlatSelectorNode = document.getElementById('typeFlatSelector');
        this.totalPriceNode = document.getElementById('totalPrice');
        this.metrPriceNode = document.getElementById('metrPrice');
        this.flatSizeSliderNode = document.getElementById('flatSizeSlider');
        this.flatSizeValueNode = document.getElementById('flatSizeValue');

        this.typeFlatSelectorNode.addEventListener('change', this._handlerChangeFlatType);

        this.changeFlatType = changeFlatType;


    }

    render(total, metrPrice) {
        this.totalPriceNode.innerText = total;
        this.metrPriceNode.innerText = metrPrice;
    }

    renderFlatSize(value) {
        this.flatSizeValueNode.innerText = value;
    }

    

    getFlatSize() {
        return this.flatSizeSliderNode.value;
    }

    getFlatType() {
        return this.typeFlatSelectorNode.value;
    }

    getRoomAreaValue() {
        return this.flatSizeSliderNode.value;
    }

    _handlerChangeFlatType = () => {
        // this.changeFlatType(this.getFlatType(this.typeFlatSelectorNode))
        this.changeFlatType(this.getFlatType());
    }
}