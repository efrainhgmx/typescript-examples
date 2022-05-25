(() => {
    const number: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];

    number.push(true);

    console.log(number);

    const letters: string[] = ['A', 'B', 'C', 'D'];
    const viilian = ['Omega', 'Dormamu', 'Duende Verde'];

    viilian.forEach( v => console.log(v.toUpperCase()))
    letters.push('E');
    console.log(letters)
})();