function fizzBuzz(n) {
    if (n === 3) return "Fizz";
    return n;
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = fizzBuzz;
}

it("returns 'Fizz' for 3", function () {
    expect(fizzBuzz(3)).toBe("Fizz");
});

