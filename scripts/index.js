import './tests';

import TriangleType from './triangle/TriangleType';

// Example usage
console.log(new TriangleType(4, 5, 6).getType());

// Add a ui for this
let side1 = document.getElementById('triangle-side-1');
let side2 = document.getElementById('triangle-side-2');
let side3 = document.getElementById('triangle-side-3');
let result = document.querySelector('.triangle-type');

[side1, side2, side3].forEach(side => {
    ['input', 'change'].forEach(event => {
        side.addEventListener(event, e => {
            try {
                result.innerText = new TriangleType(
                    +side1.value,
                    +side2.value,
                    +side3.value
                ).getType();
                result.classList.remove('error');
            } catch(error) {
                result.innerText = error;
                result.classList.add('error');
            }
        });
    });
});
