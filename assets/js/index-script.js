// when user clicks chill button, console log a return quote var
var chillBtn = document.querySelector(".btn-chill");
var stokedBtn = document.querySelector(".btn-stoked");
var stressedBtn = document.querySelector(".btn-stressed");
var heavyBtn = document.querySelector(".btn-heavy");





//create a function

function getData(event) {
console.log(event.target)


        // Return an inspirational quote from the API and log it to the console.
        fetch("https://favqs.com/api/quotes", {
            headers: {
                Authorization: `Token token="64434f7c59af706181286bb959dd3084"`,
              },
        }).then(function(response){
            return response.json()


        }).then(function(data) {
           // console.log(data);
           // console.log(data.quotes[0].body); 
           // console.log(data.quotes[0].author); 
            var quoteData = data.quotes[0].body;
            var quoteAuthor = data.quotes[0].author;
            console.log(quoteData);
            console.log(quoteAuthor);




        })
    

}



//create an event listener on the chill button. 

chillBtn.addEventListener("click", getData)
stokedBtn.addEventListener("click", getData)
stressedBtn.addEventListener("click", getData)
heavyBtn.addEventListener("click", getData)
