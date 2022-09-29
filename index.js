var pos=0;
var taskInput=document.getElementsByClassName("input");
var addTaskBtn=document.getElementsByClassName("addButton")[0];
var taskscontainer=document.getElementsByClassName("container")[0];

addTaskBtn.addEventListener("click",addTask)

function createNewTaskElement(inputs){


	var listItem=document.createElement("li");
    listItem.className="item"
    

    var divcontainer=document.createElement("div");
    divcontainer.className="itemDetails";

    var labeltitle=document.createElement("h5");//h3
    var labeldesc=document.createElement("label");//label
    var modedesc=document.createElement("label");//label
    var labeldate=document.createElement("label");//label
    var labelamount=document.createElement("label");//label

	var deleteButton=document.createElement("button");//delete button

	deleteButton.innerText="Delete";
	deleteButton.className="delete";
    
    labeltitle.innerText=""+inputs[0];
    labeldesc.innerText="Description:"+inputs[1];
    labeldate.innerText="Date:"+inputs[2];
    labelamount.innerText="Amount:"+inputs[3];
    modedesc.innerText="Payment Mode:"+inputs[4];
    
   

    divcontainer.appendChild(labeltitle);
    divcontainer.appendChild(labeldesc);
    divcontainer.appendChild(modedesc);
    divcontainer.appendChild(labeldate);
    divcontainer.appendChild(labelamount);

	listItem.appendChild(divcontainer);

	listItem.appendChild(deleteButton);
	return listItem;
}

function addTask(){
	console.log("Add Expense...");
    let inputarray=[...taskInput]
    let inputValuesArray=   inputarray.map(element=>element.value);

	var listItem=createNewTaskElement(inputValuesArray);

	taskscontainer.appendChild(listItem);
	bindTaskEvents(listItem);
    inputarray.map(element=>{element.value=""});

}
function resetData() {
    
}


function bindTaskEvents(taskListItem){
	console.log("bind list item events");
	var deleteButton=taskListItem.querySelector("button.delete");
    deleteButton.onclick=deleteTask;

}

   
function deleteTask(){
    console.log("Delete Expense...");
    var listItem=this.parentNode;

    taskscontainer.removeChild(listItem);
    
}