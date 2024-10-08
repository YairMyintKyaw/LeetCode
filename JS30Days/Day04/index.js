/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init
    const increment = ()=>{
        return ++num
    }
    const reset = ()=>{
        num = init
        return num
    }
    const decrement = ()=>{
        return --num
    }
    return {increment, reset, decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */