function ObjectOriented(){
    let array = [
        {
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male"
        },
        {
            name: "C-3PO",
            height: 167,
            mass: 75,
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a"
        },
        {
            name: "R2-D2",
            height: 96,
            mass: 32,
            hair_color: "n/a",
            skin_color: "white, blue",
            eye_color: "red",
            birth_year: "33BBY",
            gender: "n/a"
        },
        {
            name: "Darth Vader",
            height: 202,
            mass: 136,
            hair_color: "none",
            skin_color: "white",
            eye_color: "yellow",
            birth_year: "41.9BBY",
            gender: "male"
        },
        {
            name: "Leia Organa",
            height: 150,
            mass: 49,
            hair_color: "brown",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "19BBY",
            gender: "female"
        }];


    let sortedArray = array.sort((left, right) => left.height - right.height);
    console.log(sortedArray);

    let averageHeight = 0;
    
    for(let i = 0; i < array.length; i++){
        averageHeight += array[i].height;
    }
    averageHeight /= array.length;
    console.log(averageHeight);
}
  

function Reverse(){
    let stringToReverse = prompt("What word/sentence would you like to reverse?");

    let reversed = "";

    for(let i = stringToReverse.length-1; i >= 0; i--){
        reversed += stringToReverse[i];
    }

    alert("Your reversed word/sentence is\n\n" +
        reversed);
}

function MostOccurrances(){
    let stringToGetOccurrances = prompt("Enter a word/sentence");

    let mostOccurring = stringToGetOccurrances[0];
    let maxOccurrances = 0;

    for(let i = 0; i < stringToGetOccurrances.length; i++){
        if(stringToGetOccurrances[i] === " "){
            continue;
        }

        let tmpOccurrances = 1;
        for(let j = i + 1; j < stringToGetOccurrances.length; j++){
            if(stringToGetOccurrances[i] === " "){
                continue;
            }

            if(stringToGetOccurrances[i] === stringToGetOccurrances[j]){
                tmpOccurrances++;
            }
        }

        if(tmpOccurrances > maxOccurrances){
            maxOccurrances = tmpOccurrances;
            mostOccurring = stringToGetOccurrances[i];
        }
    }

    alert("The most occurring letter is\n\n" +
        mostOccurring + "\n\n" + "Occurring " + maxOccurrances + " times");
}

function Capitalize(){
    let stringToCapitalize = prompt("What word/sentence would you like to capitalize?");
    let capitalized = stringToCapitalize[0].toUpperCase();

    for(let i = 1; i < stringToCapitalize.length; i++){
        if(stringToCapitalize[i-1] === " "){
            capitalized += stringToCapitalize[i].toUpperCase();
        }
        else{
            capitalized += stringToCapitalize[i].toLowerCase();
        }
    }

    alert("Your capitalized word/sentence is\n\n" +
        capitalized);
}

function ReverseEachWord(){
    let stringToReverse = prompt("What word/sentence would you like to reverse?").split(" ");
    let reversed = "";

    for(let i = 0; i < stringToReverse.length; i++){
        let tmpReversed = "";
        for(let j = stringToReverse[i].length-1; j >= 0; j--){
            tmpReversed += stringToReverse[i][j];
        }
        reversed += tmpReversed  + " ";
    }

    alert("Your reversed sentence is\n\n" +
    reversed);
}

let choice = "";
ObjectOriented();

do{
    choice = prompt("😍 Choose which algorithm you want to run 😍\n\n" + 
    "1 ⯈ Reverse a word/sentence\n" +
    "2 ⯈ Most occurring letter in a word/sentence\n" + 
    "3 ⯈ Capitalize all words in a sentence\n" + 
    "4 ⯈ Reverse each word in a sentence\n");

    switch(choice){
        case "1":
            Reverse();
            break;
        case "2":
            MostOccurrances();
            break;
        case "3":
            Capitalize();
            break;
        case "4":
            ReverseEachWord();
            break;
    }

}while(choice !== "KRAJ" && choice !== null);