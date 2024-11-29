let todoList=[
  {
    item:'Buy Milk', 
    dueDate:' 2024-11-19'
  },
   {
    item:'Go To College', 
    dueDate:' 2024-11-19'
  }
  ];
display();

function addTodo(){
  let inputElement=document.querySelector("#todo-work");
  let dateElement=document.querySelector("#todo-date");
  let todoitem=inputElement.value;
  let tododate=dateElement.value;
  todoList.push({item:todoitem,dueDate:tododate});
  inputElement.value='';
  dateElement.value='';

  display();
}

function display(){
  let containerelement=document.querySelector(".todocontainer");
  let newHtml='';

  for(let i=0;i<todoList.length;i++){
    // let item=todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let {item, dueDate}=todoList[i];
    newHtml+=`
    <div class="task-container">
        <!-- Task Name -->
        <div class="task-name">${item}</div>

        <!-- Task Date -->
        <div class="task-date">${dueDate.trim()}</div>

        <!-- Delete Button -->
        <button class="delete-btn" onclick="todoList.splice(${i}, 1); display();">Delete</button>
      </div>
  `}
  containerelement.innerHTML=newHtml;
}