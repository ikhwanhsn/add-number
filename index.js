const addNumbers = (...nums) => {
    let sum = 0;

    for (let num of nums) {
        if (typeof num === 'number') {
            sum += num;
        } else {
            console.warn(`Warning: ${num} not a number`);
        }
    }

    return sum;
};