export default class TriangleType {
    constructor(sideA, sideB, sideC){
        this.triangle = [sideA, sideB, sideC];
    }

    /**
     * Validate the triangle made from the parameters passed into the
     * constructor
     */
    validateTriangle(){
        if(this.triangle.indexOf(undefined) > -1){
            throw new Error('Invalid Sides: All sides must be a defined');
        }

        if(this.triangle.some(side => isNaN(side))){
            throw new Error('Invalid Sides: All sides must be a number');
        }

        if(this.triangle.some(side => Math.sign(side) !== 1)){
            throw new Error('Invalid Sides: All sides must be a positive number');
        }

        if(this.triangle[0] + this.triangle[1] < this.triangle[2]){
            throw new Error('Invalid Triangle: Third side is too large');
        }

        if(this.triangle[1] + this.triangle[2] < this.triangle[0]){
            throw new Error('Invalid Triangle: First side is too large');
        }

        if(this.triangle[0] + this.triangle[2] < this.triangle[1]){
            throw new Error('Invalid Triangle: Second side is too large');
        }
    }

    /**
     * Get the type of the triangle by testing against the sides of the triangle
     * 
     * @returns {string}
     */
    getType(){
        this.validateTriangle();

        // Set in javascript returns unique array items, including
        // floating point calculations, so checking the number of
        // items in the set version of the triangle will show
        // how many sides are the different

        // All sides of a triangle must be the same length
        // for it to be an equilateral triangle
        if(new Set(this.triangle).size === 1){
            return 'equilateral';
        }

        // Only two sides of a triangle must be the same length
        // for it to be an isosceles triangle
        if(new Set(this.triangle).size === 2){
            return 'isosceles';
        }

        // None of the sides of a triangle must be the same length
        // for it to be an scalene triangle
        if(new Set(this.triangle).size === 3){
            return 'scalene';
        }
    }
}
