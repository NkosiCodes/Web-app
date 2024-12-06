document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      let txt = document.getElementById('txt').value;
      let div = document.createElement('input');
      div.setAttribute('type', 'checkbox');
      let label = document.createElement('li');
      label.textContent = txt;
      let check = document.getElementById('check');
      check.appendChild(div);
      check.appendChild(label);
    }
    else {
      return;
    }
  }) 
  
  function sa() {
    let txt = document.getElementById('txt').value;
    let div = document.createElement('input');
    div.setAttribute('type', 'checkbox');
    let label = document.createElement('label');
    label.textContent = txt;
    let check = document.getElementById('check');
    check.appendChild(div);
    check.appendChild(label);
  }

/* 
   Know what I wanna build a social media app, using different frameworks and Libraries
   I want to make a social media app but I do not know what it will be about as of yet
*/