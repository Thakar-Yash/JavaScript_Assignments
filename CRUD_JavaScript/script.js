let users = [];
let idx = -1;

document.getElementById('crud-form').addEventListener('submit', (e)=> {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if(idx === -1){
        users.push({id:users.length+1, name, age, email});
    }
    else {
        users[idx] = {id: users[idx].id, name, age, email};
        idx=-1;
    }

    document.getElementById('crud-form').reset();
    renderTable();
})

function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    users.forEach((user,idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>
            <button class="btn btn-success btn-sm me-2" onclick="editUser(${idx})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteUser(${idx})">Delete</button>
        </td>
        ` 
        tbody.appendChild(row);
    })
}

function editUser(index) {
    const user = users[index];

    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('email').value = user.email;

    idx = index;
}

function deleteUser(index) {
    users.splice(index, 1);
    renderTable();
}