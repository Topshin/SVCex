var get_sentence = function() {
    var firstSentence = "Hello, Everyone!"
    var secondSentence = "How are you?"
    var thirdSentence = "Gooooooooood!!"
    var some = Math.random();

    if (some <= 0.4) {
        return firstSentence;
    } else if (0.4 <= some <= 0.8) {
        return secondSentence;
    } else {
        return thirdSentence;
    }

    var new_sentence = get_sentence();

    $('.new-sentence').html(get_sentence());
    var i = 1;

    while (i <= 10) {

        get_sentence();
        alert(get_sentence());
        i++
    }

}
