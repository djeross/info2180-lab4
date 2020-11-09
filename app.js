window.addEventListener('load',()=>{
    document.querySelector("#searchbtn").addEventListener('click',(event)=>{
        let unsanitizedtext=document.getElementById("searchtf").value; 
        let txt=unsanitizedtext.replace( /(<([^>]+)>)/ig, '');  
        let resultarea=document.querySelector("#result");
        event.preventDefault();
        console.log(document.getElementById("searchtf").value);
        fetch('http://localhost/info2180-lab4/superheroes.php'+'?query='+txt)

        .then(function(response){
            if(response.ok){
                return response.text();
            }
            else{
                Promise.reject("Error in retrieving data");
            }
        })
        .then(function(data){
                console.log(data.length);
                if(data.length==22){
                    resultarea.classList.remove("blackstyle");
                    resultarea.classList.add("redstyle");
                    resultarea.innerHTML=data;
                }
                else{   
                    resultarea.classList.remove("redstyle");
                    resultarea.classList.add("blackstyle");
                    resultarea.innerHTML=data;
                }
        })
        .catch(error=>{
            alert("error in retrieving data");
        })
    });
});


/*<ul>
<?php foreach ($superheroes as $superhero): ?>
  <li><?= $superhero['alias']; ?></li>
<?php endforeach; ?>
</ul>*/

 /*let xhrrequest= new XMLHttpRequest();
        xhrrequest.onreadystatechange=()=>{
            if(xhrrequest.readyState==XMLHttpRequest.DONE){
                if(xhrrequest.status==200){
                    let res= JSON.parse(xhrrequest.response);
                    alert(res);
                    if(txt.length==0){
                    }
                    else{
                    }
                }
                else{
                    alert("Error in retrieving data");
                }
            }
        }
        xhrrequest.open('GET',"superheroes.php");
        xhrrequest.send();*/