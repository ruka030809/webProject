var cnt = 0;

function showTodo() {
    

    if(typeof showTodo.cnt == 'undefined'){
        showTodo.cnt = 0;
    }

    showTodo.cnt++;

    document.getElementById("todo" + showTodo.cnt).style.display = "block";
}