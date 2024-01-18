
/* Problem 1=Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number. */

for (let i = 1; i <= 100; i++)
{
    let num1=i%3;
    let num2 =i%5;
    if(num1==0 && num2==0)
    {
       console.log(i +" Fizz-Buzz");
    }
   else if(num1==0)
    {
       console.log(i +" Fizz");
    }
    else if(num2==0)
    {
       console.log(i +" Buzz");
    }
    else 
    {
            console.log(i);
      }
}

