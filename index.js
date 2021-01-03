let screen = document.getElementById('screen');
let buttons = document.querySelectorAll("button");
let screen_value = ''
for(button of buttons){
    button.addEventListener('click', (e)=>{
        button_text = e.target.innerText;
        // console.log(button_text)
        if(button_text == "X"){
            button_text = "*"
            screen_value += button_text;
            screen.value = screen_value
        }
        else if(button_text == "C"){
            screen_value = "";
            screen.value = screen_value
        }

        else if(button_text == "="){
            screen.value = eval(screen_value);
            screen_value = ""
        }

        else if(button_text == "<"){
            screen_value = screen_value.slice(0, -1)
            screen.value = screen_value
        }


        else{
            screen_value += button_text
            screen.value = screen_value
        }
    })
}