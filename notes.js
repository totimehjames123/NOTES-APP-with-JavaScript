const notesContainer = document.getElementById("notesContainer");
const titleInput = document.getElementById("titleInput");
const inputContainer = document.getElementById("inputContainer")
const main =  document.getElementById("main")
const mainNotes = document.getElementById("mainNotes");


alert("Welcome to my iNotes application.\nClick on the '+' button below to add new notes")

function createButton(){
    inputContainer.style.display = "block";
    document.getElementById("createButton").style.display = "none";
}

function closeContainer(){
    inputContainer.style.display = "none";
    titleInput.value = "";
    mainNotes.value = "";
    document.getElementById("createButton").style.display = "block"
}

function saveNotes(){
    if (titleInput.value == ""){
        alert("You must enter a title!")
        notesContainer.removeChild(paragraph)
        notesContainer.removeChild(div)
        
    }
    
    document.getElementById("createButton").style.display = "block"
    inputContainer.style.display = "none"
    var paragraph = document.createElement("P");
    paragraph.innerHTML = titleInput.value;
    notesContainer.insertBefore(paragraph, notesContainer.childNodes[0]);
    paragraph.classList.add("paragraph")
    titleInput.value = "";
    
    

    var dateCreated = new Date();
    var fullDate = "Created on " + dateCreated.toDateString() + 
                    " " + dateCreated.getHours() + 
                    ":" + dateCreated.getUTCMinutes() + 
                    ":" + dateCreated.getSeconds();

    paragraph.addEventListener("mouseover", ()=>{
        paragraph.setAttribute("title", fullDate)
    })

    var editButton = document.createElement("P")
    editButton.innerHTML = "EDIT"
    notesContainer.insertBefore(editButton, notesContainer.childNodes[1]);
    editButton.classList.add("editButton");
    editButton.addEventListener("click", ()=>{
        document.getElementById("createButton").style.display = "none";
        inputContainer.style.display = "block";
        titleInput.value = paragraph.innerHTML 
        mainNotes.value = div.innerHTML
        paragraph.style.display = "none";
        editButton.style.display = "none";
        deleteButton.style.display = "none";

        var closeButton = document.getElementById("closeButton");
        closeButton.addEventListener("click", ()=>{
            paragraph.style.display = "block";
            editButton.style.display = "block";
            deleteButton.style.display = "block";
            
        })

        

    })
    
    var deleteButton = document.createElement("P");
    deleteButton.innerHTML = "DELETE"
    notesContainer.insertBefore(deleteButton, notesContainer.childNodes[2]);
    deleteButton.classList.add("deleteButton")
    deleteButton.addEventListener("click", ()=>{
        paragraph.remove();
        editButton.remove()
        deleteButton.remove();

    })

    paragraph.addEventListener("click", ()=>{
        div.style.display = "block";
        
    })
    paragraph.addEventListener("dblclick", ()=>{
        div.style.display = "none";
    })

    if (mainNotes.value == ""){
        alert("Can't save empty notes!")
        notesContainer.removeChild(paragraph)
        deleteButton.remove();
        editButton.remove();
    }
    

    var div = document.createElement("PRE");
    div.setAttribute("title", "Please double click this to exit")
    div.innerHTML = mainNotes.value;
    notesContainer.appendChild(div);
    mainNotes.value = "";
    
    

    div.addEventListener("dblclick", ()=>{
        div.style.display = "none";
    })
    document.getElementById("header").addEventListener("click",()=>{
        div.style.display = "none";
    })   
    
    
}
