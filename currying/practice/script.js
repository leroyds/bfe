// const buildSammy = ing1 => ing2 => ing3 => `${ing1}, ${ing2}, ${ing3}`

// const sandwich = buildSammy('cheese');
// console.log(sandwich);

// const curry = (fn) => {
//     console.log(fn.length)
//     return curried = (...args) => {
//         debugger
//         if(fn.length != args.length) {
//             const bind = curried.bind(null, ...args);
//             return bind;
//         }
//         return fn(...args);
//     }
// }

// multiply = (x, y, z) => x * y * z;


// const curryM = curry(multiply);
// const j = curryM(10)(20)(30)
// console.log(j);

let name = {
    firstName: 'Leroy',
    lastName: 'Saldanha',
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

name.printFullName();

let person2 = {
    firstName: 'Virat',
    lastName: 'Kohli'
}

name.printFullName.call(person2)