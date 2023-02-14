function parseCount(value) {
    if(Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else return Number.parseFloat(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error){
        return error;
    }
}

class Triangle {
    constructor(sideOne, sideTwo, sideThree) {
        if(sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
        }
    }

    get perimeter() {
        return this.sideOne + this.sideTwo + this.sideThree;
    }

    get area() {
        const semiPerimeter = (this.perimeter) * 0.5;
        return +Math.sqrt(semiPerimeter*(semiPerimeter-this.sideOne)*(semiPerimeter-this.sideTwo)*(semiPerimeter-this.sideThree)).toFixed(3);
    }
}

function getTriangle(sideOne, sideTwo, sideThree) {
    try {
       return new Triangle(sideOne, sideTwo, sideThree);
    } catch(error) {
        return {
            get area() {return "Ошибка! Треугольник не существует"},
            get perimeter() {return "Ошибка! Треугольник не существует"}
        }
    }
}