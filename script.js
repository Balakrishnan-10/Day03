var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
// Question No : 02
// Use the rest countries API URL ->"https://restcountries.com/v3.1/all" and display the all country flags in the console.
console.log(res);
for(var i =0;i<res.length;i++){
    // console.log("Flags:") command is the heading
     console.log("Flags:")
        console.log(res[i].flags)

 //Question No : 03
 //Use the same rest countries and print all countries names,region,subregion and populations.       
        // console.log("Names:") command is the heading.
        console.log("Names:")
        console.log(res[i].name)
        console.log("Regions:"+res[i].region)
        console.log("Sub-Region:"+res[i].subregion)
        console.log("Populations:"+res[i].population)
    }    
}
