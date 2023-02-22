let download_btn = document.querySelector(".convert-button"),
URL_input = document.querySelector(".URL-input");

download_btn.addEventListener("click", function(){
    console.log(`URL: ${URL_input.value}`);
    sendURL(URL_input.value);
})

function sendURL(URL){
    fetch(`http://localhost/4000/download?URL=${URL}`,{
        method: 'GET'
    }).then(res => res.json())
      .then(json => console.log(json))
};