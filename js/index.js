//find the element 
const taskCreateArea = document.getElementById("task-create-area");

const taskForm = document.getElementById("taskForm");

const taskBoard = document.getElementById("taskBoard")

// console.log(taskCreateArea);


let tasks = []

document.getElementById('taskForm').addEventListener('submit', (e) => {
   e.preventDefault()

    
    const taskName = document.getElementById('taskName').value;
    // console.log(taskName);
    const task = {
        taskName: taskName,
        taskStatus: "InCompleted"
    }
    tasks.push(task);
    tasks.map(task => {
      
        taskBoard.innerHTML += `
        <tr class="table-row">
        <td>${task.taskName}</td>
        <td>${task.taskStatus}</td>
        <td><input type="checkbox" name="" id=""></td>
</tr>

<tr>
    <td colspan="3" >
       <div class="btn-td">
        <button id="dlt-btn" class="edit-delete-btn">D</button>
        <button  id="edit-btn" class="edit-delete-btn">E</button>
       </div>
    </td>
</tr>

        `        
    })
    
  

});