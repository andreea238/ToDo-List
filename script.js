document.querySelector('#add').onclick= function(){
    if(document.querySelector('#tasktodo input').value.length==0){
        alert("Write a Task");
    }
    else{
        document.querySelector('#listtasks').innerHTML+=
        `
            <div class="task">
            <span id="taskname">
                ${document.querySelector('#tasktodo input').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash-alt"></i>
            </button>
            `;

            let current=document.querySelectorAll(".delete");
            for(let i=0;i<current.length; i++){
                current[i].onclick=function(){
                    this.parentNode.remove();
                }
            }

            let tasks=document.querySelectorAll(".task");
            for (let i=0; i<tasks.length; i++){
                tasks[i].onclick=function(){
                    this.classList.toggle('completed');
                }
            }

            document.querySelector("#tasktodo input").value="";
    }
}