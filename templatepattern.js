class Newbikepurchase{
    constructor(bikename, model, price, details, style){
        this._ = bikename;
        this._ = model;
        this._ = price;
        this._ = details;
        this._ = style;
    }
    lookfeatures() {
        return '${ this._name } handles ${ this.newlook() }';
    }

    getCashpayment(){
        return '${ this._name } got cashpayment${ this._price }';
    }
}

class Salesperson extends Newbikepurchase{
    constructor(bikename, price){
        super(bikename, price);
    }

    newlook(){
        return 'Super, awesome style features';
    }
}

class Bikeexplainer extends Newbikepurchase{
    constructor(model, style){
        super(model, style);
    }

    newlook(){
        return 'Excellent performance';
    }
}

const sale = new Salesperson('KTM', 2020, 250000, 'nice', 'different');
console.log(sale.getCashpayment());
console.log(sale.lookfeatures());

const explainer = new Bikeexplainer('Yamaha RX', 2020, 220000, 'Superb', 'brilliant');
console.log(explainer.getCashpayment());
console.log(explainer.lookfeatures());

