function pal() {
    // console.log(ad);
    // input text
    let input = document.querySelector("input").value;
    let lv = [];
    let ad = "";

    let p = document.querySelector("p");

    for (let i = 0; i < input.length; i++) {
        // get each character
        lv.unshift(input[i]);
        // console.log(lv)
    }

    for (let i = 0; i < lv.length; i++) {
        ad += lv[i];
    }
    
    for (let i = 0; i < input.length; i++){
      if (ad[i] !== input[i]) {

        p.innerHTML = input + "<br>" + "This is not a palindrome";
        return;
        
      }
    }
      
    // output text
    p.innerHTML = ad + "<br>" + "This is a palindrome";
}