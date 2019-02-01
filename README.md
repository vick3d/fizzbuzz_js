Question 1. In your README to the best of your knowledge please explain what the following lines of code do?

```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
``` 
Answer: 

Question 2. In your README to the best of your knowledge please explain why we are placing the ```let fizzBuzz = new FizzBuzz ``` outside the it block?

Answer:

Question 3. In your README to the best of your knowledge please explain the difference between using ```===``` and ```==``` in JS?

Answer: 

Question 4. In your README to the best of your knowledge please explain why we are moving ```(number % 5 === 0)``` to the top?

Answer:

Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test

Answer: 

Question 6. In your README to the best of your knowledge please explain what this following code does

```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```

Answer: 

Question 7. In your README to the best of your knowledge please explain what expectations in the context of testing are
