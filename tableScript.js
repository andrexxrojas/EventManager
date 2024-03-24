let groups = document.querySelectorAll(".group")
let tableContainer = document.querySelector(".tableExtraContainer")

//For adding new group
let groupContainer = document.querySelector(".groupTask")
let groupTitle = document.querySelector("#groupTitleText")
let addGroupBtn = document.querySelector(".addGroupBtn")

addGroupBtn.addEventListener("click", function(){
    let newGroupTitle = groupTitle.value;

    if(newGroupTitle === ""){
        return
    }else{

        //For entire Group
        let group = document.createElement("div")
        group.classList = "group"

        //For Group Box
        let groupTitleDiv = document.createElement("div")
        groupTitleDiv.classList = "groupTitle"

        let icon = document.createElement("i")
        icon.classList = "fa-solid fa-angle-right"

        let title = document.createElement("p")
        title.innerHTML = newGroupTitle

        groupTitleDiv.appendChild(icon)
        groupTitleDiv.appendChild(title)
        
        group.appendChild(groupTitleDiv)
        
        groupContainer.appendChild(group)

        updateGroupsArray();
        createTable(newGroupTitle);

    }

    console.log(groups);
})

function updateGroupsArray(){
    groups = document.querySelectorAll(".group")
}

function createTable(tableTitle){
    let table = document.createElement("div")
    table.classList = "table"

    let titleContainer = document.createElement("div")
    titleContainer.classList = "titleContainer"
    let title = document.createElement("p")
    title.innerHTML = tableTitle

    titleContainer.appendChild(title)
    table.appendChild(titleContainer)

    let contentTable = document.createElement("table")
    contentTable.classList = "contentTable"

    let tbody = document.createElement("tbody")
    contentTable.appendChild(tbody)

    table.appendChild(contentTable)

    let createNewTask = document.createElement("div")
    createNewTask.classList = "createNewTask"

    let icon = document.createElement("i")
    icon.classList = "fa-solid fa-plus"

    let createTaskP = document.createElement("p")
    createTaskP.innerHTML = "Create task"
    
    let newBox = document.createElement("div")
    newBox.classList = "newBox"

    //For adding new rows
    createNewTask.addEventListener("click", function(){
        if(createNewTask.classList != "active"){
            newBox.style.display = "block";
            createNewTask.classList.add("active")
        }
    })

    newBox.addEventListener("keyup", function(event){
        let textInput = newBox.querySelector("input").value;

        if(event.keyCode == 13){
            if(textInput == ""){
                newBox.style.display = "none"
                createNewTask.classList.remove("active")
            }else{
                //Add new row function
                let row = document.createElement("tr")

                let taskTitle = document.createElement("td")
                taskTitle.classList = "taskTitle"
                taskTitle.innerHTML = textInput

                let taskProgress = document.createElement("td")
                taskProgress.classList = "taskProgress"

                let customSelect = document.createElement("div")
                customSelect.classList = "custom-select"

                let select = document.createElement("select")
                let optionOne = document.createElement("option")
                optionOne.value = "todo"
                optionOne.innerHTML = "TO DO"
                let optionTwo = document.createElement("option")
                optionTwo.value = "inprogress"
                optionTwo.innerHTML = "IN PROGRESS"
                let optionThree = document.createElement("option")
                optionThree.value = "done"
                optionThree.innerHTML = "DONE"

                select.appendChild(optionOne)
                select.appendChild(optionTwo)
                select.appendChild(optionThree)

                customSelect.appendChild(select)
                taskProgress.appendChild(customSelect)

                row.appendChild(taskTitle)
                row.appendChild(taskProgress)

                tbody.appendChild(row)
                //Add new row function
            }

        }
    })
    //For adding new rows

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "What is the task you want to add?")

    newBox.appendChild(input)

    createNewTask.appendChild(icon)
    createNewTask.appendChild(createTaskP)
    createNewTask.appendChild(newBox)

    table.appendChild(createNewTask)
    
    tableContainer.appendChild(table)
}

