window.onload = () => {
    
    const form = document.getElementById("inputForm")
    form.onsubmit = function(e){
        e.preventDefault()


        const taskInput = document.getElementsByTagName("input")

        const task = taskInput.value

        const container = document.getElementsByClassName("container")

        const main = document.getElementsByTagName("main")[0]

        const taskList = document.createElement("ul")

        const newTask = document.createElement("li")

        const addButton = document.getElementById("addBtn")
        addButton.onclick = function (e) {
            const clickedBtn = e.target;
            clickedBtn.parentNode.addItem(task)
        }

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        // <i class="fa-solid fa-trash"></i>
        deleteButton.onclick = function (e) {
            const clickedBtn = e.target;
            clickedBtn.parentNode.remove()
        }

        

        // const doneButton = document.createElement("button")
        // <i class="fa-solid fa-check"></i>
        // doneButton.onclick = function (e) {
        //     const clickedBtn = e.target;
        //     clickedBtn.parentNode.style.strike()
        // }

        taskList.appendChild(newTask)

        main.appendChild(taskList)
    }
}