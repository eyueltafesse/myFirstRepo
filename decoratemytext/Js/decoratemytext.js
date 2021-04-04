

window.onload=function() {
    var bigger = document.getElementById("bd");
    bigger.onclick = function changeSize() {
        // document.getElementById("txt1").style.fontSize="4em"; 
        let textArea=document.getElementById("txt1");
        var fontSize= window.getComputedStyle(textArea,null).fontSize;
        console.log(fontSize);
        
            var resized=parseInt(fontSize)+ 2;
        
           textArea.style.fontSize=resized+"px";
    }

        let bling=document.getElementById("bling");
        bling.onchange=modify;
        function modify(){
            
            let modified=document.getElementById("txt1");
            if(this.checked){
            modified.style.fontWeight="bold"
            modified.style.color="green"
            modified.style.textDecoration="underline"
            }else{
                modified.style="normal"
            }
        }
       
}