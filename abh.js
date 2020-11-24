function show(){
let abh1 =document.getElementById("abh1")
let abh2 =document.getElementById("abh2")
let result =document.getElementById("result") 

abh1 =parseInt(abh1.value)
abh2 =parseInt(abh2.value)
result.innerHTML=  abh1 + abh2;
}
function select(){
    let abh3 =document.getElementById("abh3")
    let abh4 =document.getElementById("abh4")
    let plz =document.getElementById("plz") 
    
    abh3 =parseInt(abh3.value)
    abh4 =parseInt(abh4.value)
    plz.innerHTML=  abh3 - abh4;
    }
    function dream(){
        let abh5 =document.getElementById("abh5")
        let abh6 =document.getElementById("abh6")
        let see =document.getElementById("see") 
        
        abh5 =parseInt(abh5.value)
        abh6 =parseInt(abh6.value)
        see.innerHTML=  abh5 * abh6;
        }
        function think(){
            let abh7 =document.getElementById("abh7")
            let abh8 =document.getElementById("abh8")
            let look =document.getElementById("look") 
            
            abh7 =parseInt(abh7.value)
            abh8 =parseInt(abh8.value)
            look.innerHTML=  abh7 / abh8;
            }
