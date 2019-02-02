# FIZZ BUZZ JavaScript 

This is a webapplication built with HTML, JavaScript and Tailwind CSS<br>
The goal is to play the game of FizzBuzz <br>

## Game rules
User inputs a number<br>
<br>
For numbers divisble by 3 the application should answer 'Fizz' <br>
For numbers divislbe by 5 the application should answer 'Buzz' <br>
For number divisible by 15 the application should answer 'FizzBuzz'<br>

For any other number the application should return the number.

## Author
[Viktor Olsson](https://github.com/vick3d)

## Deployment



## Questions

deployment link


<strong>Question 1. In your README to the best of your knowledge please explain what the following lines of code do?</strong>

```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
``` 
Answer: The first line makes it possible to read our entire fizz-buzz.js file and the second lines evaluates the code and executes it. 

<strong>Question 2. In your README to the best of your knowledge please explain why we are placing the ```let fizzBuzz = new FizzBuzz ``` outside the it block?</strong>

Answer: If we had put it inside an it block we would only create one instance of FizzBuzz in that specific test case. If we do it outside we can use the same instance for every test without having to create new ones. 

<strong>Question 3. In your README to the best of your knowledge please explain the difference between using ```===``` and ```==``` in JS?</strong>

Answer: ```===``` means that we are looking for the same value but also the same type. ``` == ``` are looking for the same value. <br>
Eg. 
```
3 === '3'
//returns false

3 == '3'
//returns true

```

<strong>Question 4. In your README to the best of your knowledge please explain why we are moving ```(number % 5 === 0)``` to the top?</strong>

Answer: The if statement runs in a chronological order. That means that depending on what check we are doing first will affect the result of the function.

<strong>Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test</strong>

Answer: Unit test are just checking our code and see if the functionality of that works. Feature testing integrates the UI as well, meaning that it check our code and sees that it works along with the UI.

<strong>Question 6. In your README to the best of your knowledge please explain what this following code does</strong>

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

Answer: Opens a browser window, redirects to the path of the local host, reloads the page before each test, after testing close browser

<strong>Question 7. In your README to the best of your knowledge please explain what expectations in the context of testing are</strong>

Answer: Expectations are how we would assume that our program is working. It's a good tool to make sure that functions are returning what we expect. 

<strong>Question 8. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code</strong>

Answer:
``` JavaScript
// identifying our script source so that we can call our code
<script src="./js/fizz-buzz.js"></script>

//Adding  a script block so that we can write code directly in the index file
    <script>

//Add a listener so that we know when our HTML document has loaded. however, it's not waitin for stylesheetsand images
        document.addEventListener('DOMContentLoaded', () => {

//Declaring a variable which has the value of an Element found in the HTML document which has the Id of Button. So that we easily can call methods on that button.             
            let button = document.getElementById('button')

//Same as above but we're looking for a different Element.            
            let displayDiv = document.getElementById('display_answer')

//call a Listener for our button variable, the Listerner listens for a 'click' on the button           
            button.addEventListener('click', () =>{
//When button is clicked we declare a new variable called value wich is = to our input value                
                let value = document.getElementById('value').value

//We declare a variable and instantiate our FizzBuzz script 
                let fizzBuzz = new FizzBuzz

//We declare a variable which is = to the call of fizzBuzz.check method, and we pass in the user input value and the functions runs and return the result. 
                let result = fizzBuzz.check(value)
//We set our displayDiv content to show the result from the function.               
                displayDiv.innerHTML = result;
            })
        })
// close the script block        
    </script>
```

<strong>Question 9. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?</strong>

Answer: CDN works as a "Library" for end users. The CDN distributes text, graphics and scripts etc. For example the CDN for tailwind makes it possible to use Tailwind css code for styling our webapplication. 