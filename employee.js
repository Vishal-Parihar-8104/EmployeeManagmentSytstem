  let employees = [];
    let editIndex = null;

    const form = document.getElementById("employee-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const roleInput = document.getElementById("role");
    const tableBody = document.getElementById("employee-id");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const role = roleInput.value.trim();

      if (!name || !email || !role) return;

      const employeeData = { name, email, role };

      if (editIndex === null) {
        employees.push(employeeData);
      } else {
        employees[editIndex] = employeeData;
        editIndex = null;
        form.querySelector("button").innerText = "Add Employee";
      }

      form.reset();
      renderTable();
    });

    function renderTable() {
      tableBody.innerHTML = "";

      employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.role}</td>
          <td>
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    window.editEmployee = function (index) {
      const emp = employees[index];
      nameInput.value = emp.name;
      emailInput.value = emp.email;
      roleInput.value = emp.role;
      editIndex = index;
      form.querySelector("button").innerText = "Update Employee";
    };

    window.deleteEmployee = function (index) {
      if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        renderTable();
      }
    };
// let employee=[];
// let editindex=null;
// const form=document.getElementById("employee-form");
// const name=document.getElementById("name");
// const email=document.getElementById("email");
// const role=document.getElementById("role");
// const tablebody=document.querySelector("#employee-id");
// //event listener for upadi=ting and adding 
// form.addEventListener("submit" ,function(e){
//     e.preventDefault();
//     const name=nameInput.value.trim();
//      const role=nameInput.value.trim();
//       const email=nameInput.value.trim();

//       //for any 
//       if(!name || !email || !role)return;
//       const employeeData={name,email,role};
//       if(editindex === null){
//         employee.push(employeeData);
//       }else{
//         employee[editindex]=employeeData;
//         editindex=null;
//         form.querySelector("button").innerHTML="Add Emplyee";
//       }
//       form.reset();
//       renderTable();
// })
// function renderTable(){
//     tablebody.innerHTML="";
//     employee.forEach((emp,index)=>{
//         const row=document.createElement("tr");
//         row.innerHTML=
//         ' <td>${emp.name} </td>
//          <td>${emp.email} </td>
//           <td>${emp.role} </td>
//           <td class="action-btns">
//             <button onClick="editEmployee($(index))">Edit</button>
//              <button onClick="deleteEmployee($(index))">Delete</button>
//           </td>
//         tablebody.appendChild(row);
//     })
// }
// function editEmployee(index){
//     const emp=employee[index];
//     nameInput.value=emp.name;
//     emailInput.value=emp.email;
//     roleInput.value=emp.role;
//     editIndex=index;
//     form.querySelector('button').innerText="update employee";
// }
// function deleteEmployee(index){
//     if(confirm("are you ok boss want to delte it"){
//         employee.splice(index,1);
//     })
// }