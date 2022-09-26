window.onload = function () {
    const newID = document.getElementById("new")
    const pressButton = document.getElementById("add");

    pressButton.addEventListener("click", addTask);

    newID.addEventListener("keyup", function(eve){
        eve.preventDefault();
        if(eve.keyCode === 13) addTask();
    });

    function addTask() {
        const ulID = document.getElementById("ul1");
        newID.value = newID.value.trim();
        if(!newID.value) alert("Please write your task first!!!");
        else{
            ulID.innerHTML = ulID.innerHTML + "<li>" + newID.value + '<i class="bi bi-eraser-fill"></i>' + "</li"
            newID.value = "";
        }

        ulID.addEventListener("click", function(eve){
            if(eve.target.tagName === "LI"){
                eve.target.classList.toggle("done");
            }
        });

        ulID.addEventListener("click", function(eve){
            if(eve.target.nodeName == "I"){
                eve.target.parentNode.style.display = "none";
            }
        });
    }
};