window.addEventListener('load',()=>{
document.querySelector("#searchbtn").addEventListener('click',(event)=>{
    //console.log(document.querySelector("#searchbtn"));
    event.preventDefault();
    /*let xhrrequest= new XMLHttpRequest();
    xhrrequest.open('GET',"superheroes.php");
    xhrrequest.send();
    xhrrequest.onreadystatechange=()=>{
        if(xhrrequest.readyState==XMLHttpRequest.DONE){
            if(xhrrequest.status==200){
                let res= xhrrequest.response;
                alert(res);
            }
        }
    }*/
    //fetch("superheroes.php").then()
    fetch('http://localhost/info2180-lab4/superheroes.php')
    .then(response=>response.text())
    .then(data=>{
        alert(data);
    })
    .catch(error=>{
        alert("error in retrieving data");
    })


});

});