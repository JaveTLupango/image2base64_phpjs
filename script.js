function img_base64(element) {
    //debugger;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        console.log('RESULT', reader.result)
            //$('#stringtypeImage').HTML(reader.result) // = reader.result;
        document.getElementById('base64').innerText = reader.result;
    }
    reader.readAsDataURL(file);
    document.getElementById('base64').innerText = reader.result;
}

function base64_displayImage() {
    //debugger;
    var vals = document.getElementById('base64').value;
    document.getElementById('idpic').setAttribute("src", vals);

}