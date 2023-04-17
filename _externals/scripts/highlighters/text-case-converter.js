//Text case converter
var stringbox = document.getElementById('textarea3')

function convertstring(textarea, action){
var selectedText = '';

        if (window.getSelection) {
            selectedText = window.getSelection();
        }
        else if (document.getSelection) {
            selectedText = document.getSelection();
        }
        else if (document.selection) {
            selectedText =
            document.selection.createRange().text;
        } else return;

    if (action == 'sentencecase'){
        alteredText = sentenceCase(selectedText.toString())
        document.execCommand('insertText', false, alteredText)
    }
    else if (action == 'titlecase'){
        alteredText = toTitleCase(selectedText.toString())
        document.execCommand('insertText', false, alteredText)
    }
    else if (action == 'capitalcase'){
        alteredText = CapitalCase(selectedText.toString())
        document.execCommand('insertText', false, alteredText)
    }
    else if (action == 'lowercase'){
        alteredText = lowerCase(selectedText.toString())
        document.execCommand('insertText', false, alteredText)
    }
    else if (action == 'uppercase'){
        alteredText = upperCase(selectedText.toString())
        document.execCommand('insertText', false, alteredText)
    }
    return false
}

function sentenceCase(str){
    var str = str.toLowerCase().replace(/\si\s/g, ' I ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str
}

function toTitleCase(str){
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    var str = str.toLowerCase()
    return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
        match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
        (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
        title.charAt(index - 1).search(/[^\s-]/) < 0) {
        return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
        return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
    });
};

function CapitalCase(str){
    return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function lowerCase(str){
    return str.toLowerCase();
}

function upperCase(str){
    return str.toUpperCase();
}