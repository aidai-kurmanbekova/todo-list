const addTodo = () => {
    //value from text input
    let newTask = textIn.value
    //value from date input
    let date = setDate.value
    //checking for empty string
    if (newTask != '') {
       todosArray.push({
           title: newTask,
           checked: false,
           date,
       })

       localStorage.setItem('todos', JSON.stringify(todosArray))

        renderTodoItems()

    //    renderTodoItems()
        // clear inputs
        textIn.value = ''
        setDate.value = ''
    }

}

const deleteTodo = (e) => {
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItems()
}

const completeTodo = (e) => {
    let todosTemporary = [...todosArray]
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    let objElement = todosTemporary[index].checked
    todosTemporary[index].checked = !objElement

    localStorage.setItem('todos', JSON.stringify(todosTemporary))
    
    let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')

    if (isDone) {
        e.currentTarget.parentNode.classList.remove('taskItem-done')
        e.currentTarget.parentNode.classList.add('taskItem')
    } else {
        e.currentTarget.parentNode.classList.add('taskItem-done')
        e.currentTarget.parentNode.classList.remove('taskItem')
    }
}

// const getTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
//     .then(response => response.json())
//     .then(array => {
//         console.log(array)
//         localStorage.setItem('todos', JSON.stringify(array))
//     })
// }

// getTodos()