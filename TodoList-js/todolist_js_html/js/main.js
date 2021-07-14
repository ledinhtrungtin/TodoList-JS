
var taskService = new TaskService();
// var validator = new Validator();

var getEle = function (id) {
    return document.getElementById(id);
};

var renderList = function (list) {
    let todo = ''
    let complete = ''

    list.forEach(function (task) {
        /**
         * nv: đại diện cho 1 phần từ trong mảng (object nhân viên)
         * index: số chỉ mục của phần trong mảng
         */
        // ``: string template
        if (task.status == 'todo') {
            todo += `
                <li>
                    <span>${task.taskName}</span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteToDo(${task.id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" onclick="changeStatus(${task.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
        } else {
            complete += `
                <li>
                    <span>${task.taskName}</span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteToDo(${task.id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" onclick="changeStatus(${task.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
        }
        
    });
    getEle('todo').innerHTML = todo;
    getEle('completed').innerHTML = complete;
};

let deleteToDo = function(id){
    taskService.deleteTask(id)
        .then(() => {
            getLiskTask()
        })
        .catch((err) => console.log(err))
        
}

let changeStatus = async function(id){
    let task = await taskService.getTaskById(id)
    let taskUpdate
    if(task.data.status == 'todo'){
        taskUpdate = new Task(task.data.taskName, "complete")
    }else{
        taskUpdate = new Task(task.data.taskName, "todo")
    }
    taskService.updateTask(id, taskUpdate)
        .then(() => {
            getLiskTask()
        })
        .catch((err) => console.log(err))
};

var getLiskTask = function(){
    taskService.getTask()
        .then((list)=>{
            renderList(list.data)
        })
        .catch((err) => console.log(err))
}

getLiskTask()

getEle('addItem').addEventListener('click', function () {
    let value = getEle('newTask').value
    let task = new Task(value, 'todo')
    taskService.addTask(task)
        .then(() => {
            getLiskTask()
        })
        .catch((err) => console.log(err))
});


