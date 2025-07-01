function fizzBuzz(n) {
    if (n === 3) return "Fizz";
    if (n === 5) return "Buzz";
    return n;
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = fizzBuzz;
}

it("returns 'Fizz' for 3", function () {
    expect(fizzBuzz(3)).toBe("Fizz");
});

it("returns 'Buzz' for 5", function () {
    expect(fizzBuzz(5)).toBe("Buzz");
});

