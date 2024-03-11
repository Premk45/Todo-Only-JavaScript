//to create input
let inp = document.createElement('input');
inp.setAttribute("placeholder","Add Task..");
let body = document.querySelector('body');

body.append(inp);

//to create btn
let btn = document.createElement("button");
btn.innerText = 'Add';
body.append(btn);



// //add btn functionality
function addTask(){
    btn.addEventListener('click' , (event) => {
        console.dir(event);

        let u = document.createElement('ul');
        let li = document.createElement('li');
         
        //adding input value as li
        li.innerText = inp.value + "  ";
        inp.value = "";

        //creating icon
        let icon = document.createElement("i");
        icon.classList.add("fa-trash-can");
        icon.classList.add("fa-solid");

        body.append(u);


        //adding icone infront of li
        li.appendChild(icon);
        u.appendChild(li);

        //deleting todo list by clicking on trash icon
        icon.addEventListener("click" , (event) => {
            if(event.target.nodeName == "I"){
                let listItem = event.target.parentElement;
                listItem.remove();
            }
        })

        // let icon = "<i class="fa-solid fa-trash-can"></i> ";
        
       
        // let ul = document.querySelector('body').append(u);
        // document.querySelector('ul').appendChild(li)
        // del= li.innerHTML=${a}  ,<i class="fa-solid fa-trash"></i>
    
      
    })
}

addTask();