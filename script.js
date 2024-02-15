function searchFruits(){
    let search=document.getElementById("search").value.toLowerCase();
    let data=document.getElementsByClassName("fruits");
   for(let i=0;i<data.length;i++){
        let p1=data[i].children[0].innerHTML.toLowerCase();
        
        // console.log(p1[0].innerText.toLowerCase());

        // console.log(data[i].children[0].innerHTML.toLowerCase().indexOf(search));

        console.log(p1.indexOf(search))
        
        if(p1.indexOf(search)!==-1){
            data[i].style.display = "block";
        }
        else{
            data[i].style.display="none";
        }
   }

}