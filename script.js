// Employee data with 25 employees (same data as before)
const employees = [
  { id: 1, name: "John Doe", email: "john@example.com", position: "Software Engineer", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Product Manager", status: "inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", position: "Designer", status: "on-leave" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", position: "QA Tester", status: "active" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com", position: "HR Manager", status: "inactive" },
  { id: 6, name: "David Black", email: "david@example.com", position: "Software Engineer", status: "active" },
  { id: 7, name: "Eva White", email: "eva@example.com", position: "UX/UI Designer", status: "on-leave" },
  { id: 8, name: "Frank Wright", email: "frank@example.com", position: "Product Designer", status: "inactive" },
  { id: 9, name: "Grace Hill", email: "grace@example.com", position: "Marketing Manager", status: "active" },
  { id: 10, name: "Hannah Lee", email: "hannah@example.com", position: "Sales Manager", status: "inactive" },
  { id: 11, name: "Ian King", email: "ian@example.com", position: "Developer", status: "active" },
  { id: 12, name: "Jack Queen", email: "jack@example.com", position: "Product Manager", status: "on-leave" },
  { id: 13, name: "Karen Adams", email: "karen@example.com", position: "Finance Manager", status: "inactive" },
  { id: 14, name: "Louis Baker", email: "louis@example.com", position: "Operations Head", status: "active" },
  { id: 15, name: "Mona Scott", email: "mona@example.com", position: "Developer", status: "on-leave" },
  { id: 16, name: "Nina Taylor", email: "nina@example.com", position: "Marketing Specialist", status: "inactive" },
  { id: 17, name: "Oliver King", email: "oliver@example.com", position: "Data Analyst", status: "active" },
  { id: 18, name: "Paul Walker", email: "paul@example.com", position: "System Admin", status: "inactive" },
  { id: 19, name: "Quincy Clark", email: "quincy@example.com", position: "HR Specialist", status: "on-leave" },
  { id: 20, name: "Rachel Adams", email: "rachel@example.com", position: "Software Engineer", status: "active" },
  { id: 21, name: "Sam Davis", email: "sam@example.com", position: "Backend Developer", status: "inactive" },
  { id: 22, name: "Tina Moore", email: "tina@example.com", position: "Frontend Developer", status: "on-leave" },
  { id: 23, name: "Ursula Bell", email: "ursula@example.com", position: "Content Manager", status: "inactive" },
  { id: 24, name: "Victor Cruz", email: "victor@example.com", position: "Product Lead", status: "active" },
  { id: 25, name: "Wendy Scott", email: "wendy@example.com", position: "Business Analyst", status: "on-leave" }
];

// DOM Elements
const employeeTableBody = document.getElementById("employeeTableBody");
const statusFilter = document.getElementById("statusFilter");
const employeeDetails = document.getElementById("employeeDetails");
const employeeInfo = document.getElementById("employeeInfo");
const employeeListing = document.getElementById("employeeListing");
const addEmployeeScreen = document.getElementById("addEmployeeScreen");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const addEmployeeForm = document.getElementById("addEmployeeForm");

// Render Employee List
function renderEmployees(filterStatus = "all") {
  const filteredEmployees = employees.filter(employee =>
    filterStatus === "all" || employee.status === filterStatus
  );

  employeeTableBody.innerHTML = filteredEmployees.map(employee => `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.email}</td>
      <td>${employee.position}</td>
      <td>${employee.status}</td>
      <td class="actions">
        <button class="view" onclick="viewEmployee(${employee.id})">View</button>
        <button class="delete" onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// View Employee Details
function viewEmployee(id) {
  const employee = employees.find(emp => emp.id === id);
  employeeInfo.innerHTML = `
    <h2>Employee Details</h2>
    <p><strong>Name:</strong> ${employee.name}</p>
    <p><strong>Email:</strong> ${employee.email}</p>
    <p><strong>Position:</strong> ${employee.position}</p>
    <p><strong>Status:</strong> ${employee.status}</p>
  `;
  employeeListing.classList.add("hidden");
  employeeDetails.classList.remove("hidden");
}

// Go back to employee listing
function goBackToListing() {
  employeeListing.classList.remove("hidden");
  employeeDetails.classList.add("hidden");
}

// Add Employee
function addEmployee(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const position = document.getElementById("position").value;
  const status = document.getElementById("status").value;

  const newEmployee = {
    id: employees.length + 1,
    name,
    email,
    position,
    status
  };

  employees.push(newEmployee);
  renderEmployees(statusFilter.value);

  addEmployeeScreen.classList.add("hidden");
  employeeListing.classList.remove("hidden");
}

// Filter employees based on status
statusFilter.addEventListener("change", (e) => {
  renderEmployees(e.target.value);
});

// Show Add Employee form
addEmployeeBtn.addEventListener("click", () => {
  employeeListing.classList.add("hidden");
  addEmployeeScreen.classList.remove("hidden");
});

// Form submission to add employee
addEmployeeForm.addEventListener("submit", addEmployee);

// Initial render
renderEmployees();
