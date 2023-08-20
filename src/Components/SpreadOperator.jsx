// ...The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

import React from 'react'


// let FirstArray = [1,2,3,4,5,6]
// let SecondArray =[...FirstArray,7,8,9,10]
// console.log(SecondArray)

const Object1 = {
    name:"Balram",
    lName:"kemar"
}
const Object2 = {
    ...Object1,
    address:"Madhubani"
}

console.log(Object2)
const SpreadOperator = () => {
    return (
        <>
       
        </>
    )
}
export default SpreadOperator;