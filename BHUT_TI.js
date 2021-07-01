class Range {
    constructor(limit) {
        this.values = [...Array(limit).keys()].map(i => i + 1)
    }

    get list() {
        return this.values
    }
}

class FiltersByMultiple {
    constructor(...NumbersNTexts) {
        this.NumberToText = {}
        NumbersNTexts.map(x => this.NumberToText[Object.keys(x)[0]] = Object.values(x)[0])
    }

    get numberTextRelation() {
        return this.NumberToText
    }
}

class FilterApplier {
    constructor(range, filter) {
        range.list.map(x => console.log(this.applyFilter(x, filter.numberTextRelation)))
    }

    applyFilter(number, filter) {
        let divisibleCheck = [];
        let value;
        for (let [key, values] of Object.entries(filter)) {
            divisibleCheck.push((number%key == 0)*key)
        }
        divisibleCheck.forEach(element => {
            value = filter[element] || value || number
        });
        return value
    }
}

let range = new Range(100)
let filters = new FiltersByMultiple({3: 'BHUT'}, {5: 'IT'}, {15: 'BHUT TI'})
let applier = new FilterApplier(range, filters)
