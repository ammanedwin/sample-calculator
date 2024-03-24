#! /usr/bin/env node
import inquirer from "inquirer";



const answer = await inquirer.prompt([
    {message: "Enter your first number", type:"number", name:"firstnumber"},
    {message:"Enter your second number", type:"number", name:"secondnumber"},
    {message:"select one of operatorsto perform action",
     type:"list", 
	name:"operator",
	choices:["ADDITION","SUBTRACTION", "MULTIPLICATION", "DIVISION"]
},
]);
    //  conditional statement
if (answer.operator === "ADDITION"){
console.log(answer.firstnumber + answer.secondnumber);

}else if(answer.operator === "SUBTRACTION"){
console.log(answer.firstnumber - answer.secondnumber);

}else if(answer.operator === "MULTIPLICATION"){
        console.log(answer.firstnumber * answer.secondnumber); 
    }

        else if(answer.operator === "DIVISION"){
            console.log(answer.firstnumber / answer.secondnumber); 
        }
            else{("please select valid operator")}

