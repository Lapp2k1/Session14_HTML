const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];

let luachon = "";
do {
  luachon = prompt("Nhap lua chon");
  switch (luachon) {
    case "C":
      let todo = prompt("Nhap cong viec moi");
      todoList.push(todo);
      break;
    case "R":
      console.log(todoList);
      break;
    case "U":
      let indexUpdate = "";
      do {
        indexUpdate = +prompt("Nhap vi tri can update");
      } while (indexUpdate < 0 || indexUpdate >= todoList.length);

      let updateTodo = prompt("Nhap cong viec duoc update");
      todoList.splice(indexUpdate - 1, 1, updateTodo);
      break;
    case "D":
      let indexDel = "";
      do {
        indexDel = +prompt("Nhap vi tri can xoa");
      } while (indexDel < 0 || indexDel >= todoList.length);
      todoList.splice(indexDel - 1, 1);
      break;
    default:
      console.log("Ban can nhap dung: C/R/U/D");
      break;
  }
  console.clear();
} while (luachon != "0");
