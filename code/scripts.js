
$(document).ready(function () {
  $(".side-menu-option").html(
    '<div class="sub-option-box">'+
                '<div class="box" id="pink"></div>'+
                '<span id="name">test</span>'+
            '</div>'
  );

  for (let index = 0; index < 5; index++) {
    $(".main-content").append(
    
      '<div class="sub-main-content">'+
        '<img src="assets/Image/casa1 1.png" alt="" class="image-house">'+
        '<div class="" style="display: flex; flex: 2; flex-direction: column;">'+
      '<div class="sub-title">'+
          '<h6>Casa Inteira</h6>'+
      '</div>'+
      '<div class="sub-description">'+
          '<div class="sub-first-description">'+
              '<h6>Casa em Salto</h6>'+
              '<h6>Ideal para Aniversario</h6>'+
              '<h6>8 Vagas na Garagem</h6>'+
              '<h6>Wi-fi</h6>'+
          '</div>'+
          '<div class="sub-second-description">'+
             ' <h6>Piscina</h6>'+
             ' <h6>Sauna</h6>'+
             ' <h6>Churrasqueira</h6>'+
         ' </div>'+
     ' </div>'+
  '</div>'+
  '</div>');
  }
  
});

