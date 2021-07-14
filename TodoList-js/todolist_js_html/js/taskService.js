
var TaskService = function(){
    this.url = "https://60eeda84eb4c0a0017bf4656.mockapi.io"
    this.addTask = function (task){
        return axios({
            url: this.url + "/task",
            method: "POST",
            data: task
        })
    }

    this.deleteTask = function(id){
        return axios({
            url: this.url + "/task/" + id,
            method: "DELETE"
        })
    }

    this.updateTask = function(id, taskUpdate){
        return axios({
            url: this.url + "/task/" + id,
            method: "PUT",
            data: taskUpdate
        })
    }

    this.getTaskById = function (id) {
        return axios({
            url: this.url + "/task/" + id,
            method: "GET"
        })
    }

    this.getTask = function(){
        return axios({
            url: this.url + "/task",
            method: "GET"
        })
    }
}