var array=[]
const link=`https://randomuser.me/api/?results=10`
fetch(link)
.then(res=> res.json())
.then(data =>{
    for(var i=0;i<10;i++)
    {
        add.innerHTML+= (add.innerHTML=`<a href="profile.html" onclick="get()"><div class="box">
        <img src="${data["results"][i]["picture"]["large"]}">
        <h5>${data["results"][i]["name"]["first"]}</h5>
        <ul>
          <li>
            ${data["results"][i]["email"]}
          </li>
          <li>
            ${data["results"][i]["location"]["country"]}
          </li>
          <li>
            ₹ 10000
          </li>
        </ul>
      </div> </a> `)
      array.push(data["results"][i]["name"]["first"])
    }
    localStorage.setItem('array',array)
})
function find()
    {
        var name=document.getElementById("Search").value
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
