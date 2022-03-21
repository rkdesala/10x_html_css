///////////
////////event listners
/*let button_object = document.getElementById("button");
let input_object = document.getElementById("input");
let div_object = document.getElementById("todos");
let count = 0;

button_object.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.setAttribute("key", count);
  paragraph.innerText = input_object.value;
  div_object.appendChild(paragraph);
  paragraph.addEventListener("click", () => {
    div_object.removeChild(paragraph);
  });
  count += 1;
});
*/
let content;
let thread_count = 1;
let text_box_event = document.getElementById("text_box");
let obj_number_of_characters = document.getElementById("character_value");
let obj_number_of_threads = document.getElementById("thread_value");
let thread_button = document.getElementById("thread_submission_button");
let thread_close_button1 = document.getElementById("thread_close_button");
let single_thread_window_close = document.querySelector(".sample");
let thread_250 = "";
let full_thread = [];
let number_of_threads = 0;
let current_thread;
let position;

text_box_event.addEventListener("input", () => {
  let no_characters = text_box_event.value.length;
  obj_number_of_characters.innerText = no_characters;
  number_of_threads = Math.ceil(no_characters / 275);
  obj_number_of_threads.innerText = number_of_threads;
  //let content = text_box_event.value;
  //document.querySelector(".sample").innerText = content;
});
thread_button.addEventListener("click", () => {
  let content_right_box = document.querySelector(".empty_box");
  content_right_box.innerHTML = "";
  current_thread = 0;
  content = text_box_event.value;
  let total_length_content = content.length;
  number_of_threads = Math.ceil(total_length_content / 275);
  console.log(number_of_threads);
  position = 0;
  for (let i = 0; i < number_of_threads; i++) {
    if (current_thread < number_of_threads - 1) {
      for (j = current_thread * 275; j < current_thread * 275 + 275; j++) {
        thread_250 += content[j];
      }
    }
    if (current_thread == number_of_threads - 1) {
      for (j = current_thread * 275; j < total_length_content; j++) {
        thread_250 += content[j];
      }
      console.log(thread_250);
    }
    content_right_box.innerHTML += `<div id="each_thread_box" style="height: 30vh;" >
      <h1 id="thread_number">
        Thread:${
          current_thread + 1
        }</h1><button id="thread_close_button">CLOSE.[✖]</button><div id="textarea_box_left">
      <textarea readonly
        id="sample"
        style="background: white"
        rows="25"
        cols="25"
        wrap="soft"
        name="fddfdf"
      >${thread_250}</textarea></div></div>
    `;
    thread_250 = "";
    current_thread += 1;
  }
  let array_tasks = document.querySelectorAll("#thread_close_button");
  for (let i = 0; i < array_tasks.length; i++) {
    array_tasks[i].onclick = function () {
      this.parentElement.remove();
    };
  }
});
/*
thread_close_button1.addEventListener("click", () => {
  alert("hai");
  single_thread_window_close.remove();
});*/

/*    if (thread_250.length == 275) {
      
    }
  }
  if (content.length >= 1) {
    for (let i = 0; i <= content.length; i++) {
      thread_250 += content[i];
      if (thread_250.length == 275) {
        content_right_box.innerHTML += `
        <h1 id="thread_number">
          Thread:${thread_count}<button id="thread_close_button">CLOSE</button>
        </h1>
        <textarea
          class="sample"
          style="background: white"
          rows="25"
          cols="25"
          wrap="soft"
          name="fddfdf"
        >${thread_250}</textarea>
      `;
        full_thread += thread_250;
        thread_250 = "";
        thread_count += 1;
        number_of_threads -= 1;
      }
    }
  }
  full_thread = {};
  content = "";
  // document.querySelector(".sample").innerText = content;
  //document.getElementById("thread_number").innerHTML = `Thread:${thread_count}`;
});*/
