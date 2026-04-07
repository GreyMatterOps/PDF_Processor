let fileInput=document.getElementById("fileInput");
let runButton=document.querySelector(".RUN button");
let options =document.querySelectorAll("input[name='Option_Selector']");
console.log(fileInput);
console.log(runButton);
console.log(options);
let selectedFile;
fileInput.addEventListener("change",function(){
    let file=fileInput.files[0];
    if(file){
    selectedFile=file;
    
    console.log(selectedFile.name);
    }
    else{
        console.log("No File Selected")
    }
});

runButton.addEventListener("click",function(){
    console.log("Run clicked");
    console.log(selectedFile);
});
