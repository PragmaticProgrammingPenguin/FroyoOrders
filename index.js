/* Get user input, split to string array and create order object */
const userInput = prompt("Please enter your order in a comma separated list.", "coffee,coffee,coffee,coffee,donut,vanilla,vanilla,strawberry,strawberry");
const strArray = userInput.split(',');
const order = {
};

/* Get order function */

function getorder(order, strArray){
    for (let i = 0; i < strArray.length; i++){
        let str = strArray[i]
        if(order[str] > 0){
            order[str] +=1;
        }else{
            order[str] = 1;
        }
    };

    return order;
};

/* Calls function */
getorder(order, strArray);

/* Demonstrates functionality in console */

for(const key in order){
    console.log(key,order[key],);
};