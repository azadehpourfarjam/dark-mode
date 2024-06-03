
    let body=document.getElementById('body');
    let one= document.getElementById('one');
    let two= document.getElementById('two');
    let title=document.getElementById('title');

    let slider=document.getElementById("slider");
    let check=document.getElementById("check");
    check.checked=false;
    check.addEventListener('change',()=>{
        if (check.checked){
                   body.classList = "dark";
     one.style.color="#fff"
     two.style.color="#fff"
     title.style.color="#fff"
        }else {
                 body.classList="light";
       one.style.color="#111"
       two.style.color="#111"
       title.style.color="#111"

        }
    })
