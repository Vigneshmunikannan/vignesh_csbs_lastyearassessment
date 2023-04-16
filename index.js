const link=`https://randomuser.me/api/?results=10`
/* stored locally 
fetch(link)
.then(res=> res.json())
.then(data=> {
    console.log(data["results"][0]["login"]["username"],data["results"][0]["login"]["password"])
    localStorage.setItem('username',data["results"][0]["login"]["username"])
    localStorage.setItem('password',data["results"][0]["login"]["password"])
})
*/
function load(){
/*var u=localStorage.getItem('username');
var p=localStorage.getItem('password');
*/
const user=document.getElementById("userid").value
const pass=document.getElementById("pass").value
console.log(user,pass)
console.log(u,p)
var u="tinypeacock535"
var p="makaveli"
if(u==user && p==pass)
{
    alert("LogIn success");
    window.open("home.html","_self")
        return
}
else{
    var btn=document.getElementById("chk")
    btn.innerHTML="Invalid Credentials"
}
}
