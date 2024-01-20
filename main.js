let tasks = [];

 
function updateImage() {
        
        if (tasks.length > 0){
            document.getElementById("pixelGuy").style.display = "none";
            document.getElementById("speechBubble").style.display = "none";
        }
        else if(tasks.length == 0){
            document.getElementById("pixelGuy").style.display = "inline";
            document.getElementById("speechBubble").style.display = "inline";
        }
        
        //document.body.style.backgroundColor = isBackgroundColorToggled ? "#f0f0f0" : "#ffffff";      
 }

 function updateTasks(){
        
 }

 
window.addEventListener(`load`, () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
   
    updateImage();
    
   

    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        
        
        const task = {
            date: "",
            complete: false,
            taskText: input.value
        };

        console.log(task.taskText);
        if (!task.taskText) {
            alert("Please fill out the task");
            return;
        }  
       

        tasks.push(task);
        updateImage();
    
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //CheckBox stuff
        
        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox")
        checkbox.type = "checkbox";
        checkbox.checked = task.complete;
        if (task.complete) {
              task_el.classList.add("complete");
          } 
     

        task_el.appendChild(checkbox);


        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");


        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task.taskText;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = `Edit`;

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";
        
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
                    
        task_el.appendChild(task_actions_el);
        
        list_el.appendChild(task_el);

        input.value = "";
        
        

        checkbox.addEventListener("change", () => {
            task.complete = checkbox.checked;
    
            if (task.complete) {
                task_el.classList.add("complete");
            } else {
                task_el.classList.remove("complete");
            }
        }); 


        task_edit_el.addEventListener(`click`, () => {
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
                console.log("Save");
            }
        });

        task_delete_el.addEventListener(`click`, () => {
            list_el.removeChild(task_el);
            tasks.pop();
            updateImage(); 
            
        })
    })
})