/* ARRAY METHODS */

//Question 1 : Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all) :


// a. Get all the countries from Asia continent /region using Filter function :

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var Asia_Reg = Result.filter((country) => country.region === "Asia");
    Asia_Reg.map((country) => console.log(country.name));
}

/*-----------------------------------------------------------------------------*/

// b. Get all the countries with a population of less than 2 lakhs using Filter function : 

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var population_Res = Result.filter((x)=>x.population<200000);
    population_Res.map((ele)=>console.log(ele.name.common));
}

/*-----------------------------------------------------------------------------*/

// c. Print the following details name, capital, flag, using forEach function :

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var Details = Result.forEach((element) =>console.log(`Name : ${element.name.common}, Capital : ${element.capital}, Flag : ${element.flag}`));
}

/*-----------------------------------------------------------------------------*/

// d. Print the total population of countries using reduce function :

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var TotalPopulation = Result.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(TotalPopulation);
}
    

/*-----------------------------------------------------------------------------*/

// e. Print the country that uses US dollars as currency.

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    const countriesWithUSD = Result.filter(country =>
        country.currencies && country.currencies.USD
      ).map(country => country.name.common);
    
      if (countriesWithUSD.length > 0) {
        console.log("Countries that use US dollars as currency: " + countriesWithUSD.join(", "));
      } else {
        console.log("No countries found that use US dollars as currency.");
      }
}