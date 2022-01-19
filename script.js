//XML-HTTP
//Rest countries
//The output of this api is an Arry of JSON objects
// var student ={name:"siddharthan"}

// step1: create XHR object
// var variable
//req/request/any userdefined name
var request=new XMLHttpRequest();

//step2:create a connection/extracting teh info
//http METHOD:GET
//API url:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step3: sending a connection
request.send();
//step4: once the data successfully loaded(onload event) from the server
//data comming from the serve ris of string 
//we have to convert string to a JSON object

//q1: print all the countrynames in the console
//q2: print the country name along with the capital
//q3: latitude and longitude value along with countryname
//q4: country flag
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(`countryname:${data[i].name} 
            capital:${data[i].capital} 
            latitude:${data[i].latlng[0]} longitude:${data[i].latlng[1]} 
            flag:${data[i].flag}`);
    }
}
//print the details
//template literal
