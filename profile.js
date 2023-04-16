var sum=0;
var array=localStorage.getItem("array")
function addelement(){
    const exp=document.getElementById("ex").value 
    const amt=document.getElementById("am").value
    console.log(exp,amt)
    if(exp=="" || amt=="" ||isNaN(amt))
    {
        check.style.color="red"
        check.innerHTML="Enter Valid Details"
        setTimeout(function(){
            check.innerHTML=""
        },3000)
        ex.value=""
        am.value=""
        return
    }
    console.log(exp,amt)
    var num=Number(amt)
    sum+=num
    insert.innerHTML+=`<div class="in">
    <h5>${exp}</h5>
    <p>:</p>
    <h6>${amt}</h6>
</div>`
var ans=10000-sum
insert.innerHTML+=`<div class="in">
    <h5>Remaining 
    Amount</h5>
    <p>:</p>
    <h6>${ans}</h6>
</div>`
ex.value=""
am.value=""
}
function find()
    {
        var name=document.getElementById("Search").value
        console.log(array,name)
        for(var i=array.length;i>=0;i--)
        {
            if(name===array[i])
            {
                chk.style.color="green";
                chk.innerHTML="Found"
                setTimeout(function(){
                    chk.innerHTML=""
                },3000)
                Search.value=""
                return;
            }
        }
        chk.style.color="red";
        chk.innerHTML="NotFound"
        setTimeout(function(){
            chk.innerHTML=""
        },3000)
        Search.value=""
    }
function c()
{
    Search.value=""
}