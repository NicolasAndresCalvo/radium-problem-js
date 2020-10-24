var words = ["firstWord", "secondWord", "thirdWord", "fourWord", "fifthWord"];

for (i = 0; i < words.length; i++) {

    console.log(words[i].charAt(0).toUpperCase() + words[i].slice(1));
}