//Zadanie 2

const json = '{"name":"Mango","age":3,"isHappy":true}'; 

// Konwersja ciągu JSON na obiekt JavaScript za pomocą metody JSON.parse() 
const obiektJS = JSON.parse(json); 


// Wydrukowanie obiektu w konsoli 
console.log(obiektJS); 


// Weryfikacja właściwości obiektu 
console.log("Nazwa:", obiektJS.name); 
console.log("Wiek:", obiektJS.age); 
console.log("Czy szczęśliwy:", obiektJS.isHappy);


//Zadanie 3

const nieprawidlowyJSON = '{"name":"Mango","age":3,"isHappy":"true"}'; // Błąd: wartość "true" jest łańcuchem znaków, a nie wartością logiczną 

try { 

// Konwersja nieprawidłowego ciągu JSON na obiekt JavaScript 
const obiektJS = JSON.parse(nieprawidlowyJSON); 
console.log(obiektJS); // Ten wiersz nie zostanie wykonany, ponieważ wystąpi błąd 
} catch (error) { 

// Obsługa błędu 
console.error("Wystąpił błąd podczas parsowania JSON:"); 
console.error("Nazwa błędu:", error.name); 
console.error("Wiadomość błędu:", error.message); 
} 

// Dalsza część skryptu 
console.log("Kontynuowanie skryptu...");
