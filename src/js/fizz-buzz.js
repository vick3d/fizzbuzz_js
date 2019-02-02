function FizzBuzz() {
    this.check = (number) => {
        if(number >= 0) {    
            if(has_zero_remainder(number, 15)) {
                return 'FizzBuzz'
            } else if (has_zero_remainder(number, 5)) {
                return 'Buzz';
            } else if(has_zero_remainder(number, 3)) {
                return 'Fizz';
            } else {
                return number;
            }
        } else {
            return 'invalid input'
        }    
    }
}

function has_zero_remainder(number,divider) {
    if(number % divider === 0) {
        return true;
    } else return false;
    
}