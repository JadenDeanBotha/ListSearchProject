const input = document.getElementById("search");

//The Search Function
const search = () => {
    const inputVal = input.value;
    //This variable targets the list items
    const li = document.getElementsByTagName('li');

    //The for loop loops through all of the list items
    for(let i = 0; i < li.length; i++){
        //The if statement then checks whether or not any of the list items contains
        //The value of the user input
        if(li[i].innerHTML.toLowerCase().includes(inputVal)){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}

//keyup event listener is used to get the value of the user input
//then uses the search function to determine whether that input value matches any
//of the items in the list
input.addEventListener("keyup", search);

