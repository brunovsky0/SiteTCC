$(function(){
  $(window).scroll(function(){
    var wscroll = $(window).scrollTop();
    if (wscroll > 0) {
      $('#navbar').addClass("navscroll");
    } else {
      $('#navbar').removeClass("navscroll");
    }
  });
});

//Função que altera a cor do input

function cor(){
  var NLetras = document.getElementById("txtNome").value;

if(NLetras.length < 6){
  document.getElementById("txtNome").className = "uk-form-danger uk-input";
};

if(NLetras.length > 6 ){
  document.getElementById("txtNome").className = "uk-form-success uk-input";
};
if(NLetras == ""){
  document.getElementById("txtNome").className = "form-golden uk-input";
}
  
}

