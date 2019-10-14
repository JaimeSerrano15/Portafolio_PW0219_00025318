var rows = [];
var counterId = 0;

var parseLateSwitch = (value) => {
    if(value){
        return "Tarde :(";
    }
    return "A tiempo :)";
}

function addRow(carnet, schedule,late, tbody){
    var newRow = document.createElement("tr");
    var date = new Date();
    var confirmRegex = new RegExp('[0-9]{8}');


    rows.push({
        "id": counterId,
        "carnet": carnet,
        "schedule": schedule,
        "late": late
    });

    console.log(rows);

    newRow.innerHTML =
    `<td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

    var cellContainer = document.createElement("td");
    var cellContainer2 = document.createElement("td")
    var deleteButton = document.createElement("button");
    var inputSpace = document.createElement("input");

    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");


    deleteButton.innerText = "Eliminar";
    deleteButton.value = counterId;
    inputSpace.id = "input-"+counterId;


    deleteButton.addEventListener("click",(event)=>{
        var idElement =  event.srcElement.value;
        var inputConfirm = document.querySelector(`input[id='input-${idElement}']`);
        var confirm = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement.firstChild;
        var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;
        //console.log(trToDelete);

        if(confirm.textContent == inputConfirm.value){
        tbody.removeChild(trToDelete);

        rows.forEach((item,index)=>{
            if(item.id == idElement){
                rows.splice(index,1);
            }
        });
    }
    });


    //inputSpace.addEventListener("")

    cellContainer.appendChild(deleteButton);
    cellContainer2.appendChild(inputSpace);
    newRow.appendChild(cellContainer);
    newRow.appendChild(inputSpace);

    tbody.appendChild(newRow);
    counterId++;
};

window.onload = function(){
    
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');

    submit_btn.addEventListener("click", ()=>{
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addRow(carnet, schedule, late, tBody);
        }
        else{
            alert("Formato no válido");
        }
        
    });

    carnet_field.addEventListener("keyup", (event)=>{
        var carnet = carnet_field.value;
        //console.log(event.keyCode);
        if(carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }
        else{
            submit_btn.disabled = true;
        }
    });
}