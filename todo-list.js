let arr = [];
const form = document.getElementById('todoForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const div = document.querySelector('.js-item');
    let ul = document.createElement('ul');
    const item = document.getElementById('Ido');
    const date = document.getElementById('todoDate');
    let todoDate = new Date(date.value);
    arr.push({
        task: item.value,
        taskDate: todoDate.toDateString()
    });
    item.value = '';

    let i = 0;
    while (i < arr.length) {
        let listItem = arr[i];
        let li = document.createElement('li');
        li.textContent = i + " : " + arr[i].task + " in " + arr[i].taskDate;
        ul.appendChild(li);
        i++;
    }
    div.innerHTML = "";
    div.appendChild(ul);
});