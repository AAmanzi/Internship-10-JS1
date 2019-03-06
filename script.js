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

let choice = "";

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

            break;
    }

}while(choice !== "KRAJ" && choice !== null);