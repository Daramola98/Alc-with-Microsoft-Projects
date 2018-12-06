var storageInputText =  [];
var valNotepad = {
    init: function(){
        console.log("document is ready");
        $('#clear').click(valNotepad.clear);
        $('#save').click(valNotepad.save);

    },

    clear: function(){
        $('#inputText').val("");
        $('#panel-textarea').val("");
    },
    save: function(){
        var inputText = $('#inputText').val();
        var bodyText = $('#panel-textarea').val();
        storageInputText.push(inputText)
        window.localStorage.setItem('Input', JSON.stringify(storageInputText));
        window.localStorage.setItem('Message',bodyText);
        valNotepad.clear();
    },
    display: function(){
        window.localStorage.getItem('Input');
    }
}

$(document).ready(valNotepad.init());