function change(){
    var inp = document.getElementById('name').value;
    if(inp == "") 
        alert("Please enter a name")
    window.location.href = window.location.origin + window.location.pathname + `?name=${inp}`
}
var url_string = window.location.href
var viewContent = document.getElementById("user").textContent
var c = url_string.split('?')
if(c.length == 2){
   var d = c[1].split('=')
   if(d.length == 2 && d[1] != ''){
       viewContent =  `Happy Diwali ` + `from  ${d[1].replace("%20", " ")}`
   }
   else{
    viewContent =  `Happy Diwali `
   }
}  
else{
    viewContent = `Happy Diwali `
}
document.getElementById("user").textContent = viewContent
// (c.length == 2 ? ((c[1].split('=')).length == 2 ? viewContent =  `happy diwali ` + `from  ${c[1].split('=') [1]}` :  viewContent = `happy diwali `) :  viewContent = `happy diwali `) 