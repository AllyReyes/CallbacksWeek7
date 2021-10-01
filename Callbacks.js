var pets = [a= "Pepper", b= "Boobear"];
// console.log(a, b);

function getPets() {
    setTimeout(() => {
    var dog = '';
    pets.forEach((pet) => {
       dog +=  `${pets}`
    });
    document.getElementById = dog;
    }, 1000);
}


function addPet(pet, callback) {
     setTimeout(() => {
    pets.push(pet);
    callback();
     }, 2000);
 }

 //getPets();

 addPet("Stormy", getPets);

 console.log(pets)