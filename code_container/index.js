const lines = document.getElementsByClassName("line");
const list = document.getElementsByClassName("nav-bar-list");


if (window.innerWidth < 600) {
for(let i = 0; i < lines.length; i++){
    lines[i].addEventListener('click', function() {
        for(let i=0; i < lines.length; i++){
            lines[i].style.zIndex = "3";
            lines[i].style.background = "red"
        }

        for(let i = 0; i < list.length; i++){
            list[i].style.display = "block";
        }
    });
};
};

//taking input of both the forms and changing the color of border of the input tag
const border = document.getElementsByClassName('input-tag');

// for(let i = 0; i < border.length; i++){
//     border[i].addEventListener('click', function() {
//         border[i].style.border = "2px solid #687EFF";
//     })
// }

