import {assert} from '../chai';
import TriangleType from '../../triangle/TriangleType';

// Valid triangles data provider
export const triangles = [
    {
        triangle: [5, 5, 5],
        expected: 'equilateral'
    },
    {
        triangle: [6, 6, 5],
        expected: 'isosceles'
    },
    {
        triangle: [7, 6, 5],
        expected: 'scalene'
    },
    {
        triangle: [5.5, 5.5, 5.5],
        expected: 'equilateral'
    },
    {
        triangle: [6.3, 6.3, 5.5],
        expected: 'isosceles'
    },
    {
        triangle: [7.9, 6.3, 5.6],
        expected: 'scalene'
    }
];

// Invalid triangles data provider
export const trianglesInvalid = [
    {
        triangle: [1, 1, 10],
        expected: 'Invalid Triangle: Third side is too large'
    },
    {
        triangle: [1, 10, 1],
        expected: 'Invalid Triangle: Second side is too large'
    },
    {
        triangle: [10, 1, 1],
        expected: 'Invalid Triangle: First side is too large'
    },
    {
        triangle: ['not', 'a', 'number'],
        expected: 'Invalid Sides: All sides must be a number'
    },
    {
        triangle: [5, 'one', 'number'],
        expected: 'Invalid Sides: All sides must be a number'
    },
    {
        triangle: [5, 5, 'string'],
        expected: 'Invalid Sides: All sides must be a number'
    },
    {
        triangle: [5, 5],
        expected: 'Invalid Sides: All sides must be a defined'
    },
    {
        triangle: [-5, 5, 5],
        expected: 'Invalid Sides: All sides must be a positive number'
    }
];

export default function triangleTypeTests(){
    triangles.forEach(({triangle, expected}) => {
        describe(`When TriangleType is called using "${triangle.join(', ')}" as sides`, () => {
            it(`should return ${expected}`, () => {
                assert.equal(expected, new TriangleType(...triangle).getType());
            });
        });
    });
    
    trianglesInvalid.forEach(({triangle, expected}) => {
        describe(`When triangleType is called using "${triangle.join(', ')}" as sides`, () => {
            it(`should return throw "${expected}"`, () => {
                assert.throws(() => {new TriangleType(...triangle).getType()}, Error, expected);
            });
        });
    });
}
