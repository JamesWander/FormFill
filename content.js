var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices lobortis congue. Etiam accumsan tortor scelerisque est pulvinar posuere. Donec a arcu rhoncus, hendrerit tellus vitae, tempor sapien. Sed vulputate arcu eget dictum semper. Donec sodales eros vitae interdum sagittis. Aliquam maximus sed nibh sit amet ultrices. Maecenas molestie erat sit amet luctus accumsan."
var nomes = ['Miguel','Sophia','Davi','Alice','Arthur','Julia','Pedro','Isabella','Gabriel','Manuela','Bernardo','Laura','Lucas',
'Luiza','Matheus','Valentina','Rafael','Giovanna','Heitor','Maria','Eduarda','Enzo','Helena','Guilherme','Beatriz',
'Nicolas','Maria','Luiza','Lorenzo','Lara','Gustavo','Mariana','Felipe','Nicole','Samuel','Rafaela','João','Pedro',
'Heloísa','Daniel','Isadora','Vitor','Lívia','Leonardo','Maria','Clara','Henrique','Ana','Clara','Theo','Lorena','Murilo',
'Gabriela','Eduardo','Yasmin','Pedro','Henrique','Isabelly','Pietro','Sarah','Cauã','Ana','Julia','Isaac','Letícia','Caio',
'Ana','Luiza','Vinicius','Melissa','Benjamin','Marina','João','Clara','Lucca','Cecília','João','Miguel','Esther','Bryan',
'Emanuelly','Joaquim','Rebeca','João','Vitor','Ana','Beatriz','Thiago','Lavínia','Antônio','Vitória','Davi','Lucas',
'Bianca','Francisco','Catarina','Enzo','Gabriel','Larissa','Bruno','Maria','Fernanda','Emanuel','Fernanda','João','Gabriel',
'Amanda','Ian','Alícia','Davi','Luiz','Carolina','Rodrigo','Agatha','Otávio','Gabrielly'];
var emails = ['@gmail.com','@hotmail.com','@outlook.com','@yahoo.com','@uol.com','@bol.com','@igg.com','@live.com','@mail.com','@ico.com','@bing.com'];


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {

        $("input[type=text]").val("Preenchido por formfill");
        $("input[type=number]").val(gera_random(100));
        $("input[type=radio]").click();
        $("textarea").val(lorem);
        $('select').prop('selectedIndex', 1);
        $('select').trigger('change');
        $('input[type=email]').val(nomes[gera_random(100)] + emails[gera_random(10)]);
        $('input[type=data]').val(`1${gera_random(9)}/0${gera_random(9)}/201${gera_random(9)}`);
        $('input[type=checkbox]').click();
        $('input[type=password]').val(nomes[gera_random(100)]+nNumeros(3));
        
        $("input").each(function(i,item){
            if(item.id.toUpperCase().includes("NOME") || item.id.toUpperCase().includes("NAME"))
                $(item).val(nomes[gera_random(100)]);

            if(item.id.toUpperCase().includes("CNPJ"))
                $(item).val(cnpj);

            if(item.id.toUpperCase().includes("CPF"))
                $(item).val(cpf);

            if(item.id.toUpperCase().includes("EMAIL"))
                $(item).val(nomes[gera_random(100)] + emails[gera_random(10)])

            if(item.id.toUpperCase().includes("TEL") || item.id.toUpperCase().includes("TELEFONE") || item.id.toUpperCase().includes("CEL") || item.id.toUpperCase().includes("CELULAR"))
                $(item).val(telefone);

            if(item.id.toUpperCase().includes("DATA"))
                $(item).val(`1${gera_random(9)}/0${gera_random(9)}/201${gera_random(9)}`);

            if(item.id.toUpperCase().includes("RG"))
                $(item).val(nNumeros(9));

            if(item.id.toUpperCase().includes("CEP"))
                $(item).val(nNumeros(8));

            if(item.id.toUpperCase().includes("SENHA") || item.id.toUpperCase().includes("PASS"))
                $(item).val(nomes[gera_random(100)]+nNumeros(3));
        });

      }
    }
  );

 function gera_random(n)
{
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor)
{
          return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function cpf()
{
          var n = 9;
          var n1 = gera_random(n);
           var n2 = gera_random(n);
           var n3 = gera_random(n);
           var n4 = gera_random(n);
           var n5 = gera_random(n);
           var n6 = gera_random(n);
           var n7 = gera_random(n);
           var n8 = gera_random(n);
           var n9 = gera_random(n);
           var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
           d1 = 11 - ( mod(d1,11) );
           if (d1>=10) d1 = 0;
           var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
           d2 = 11 - ( mod(d2,11) );
           if (d2>=10) d2 = 0;
           return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
}

function cnpj()
{
    var n = 9;
    var n1  = gera_random(n);
    var n2  = gera_random(n);
    var n3  = gera_random(n);
    var n4  = gera_random(n);
    var n5  = gera_random(n);
    var n6  = gera_random(n);
    var n7  = gera_random(n);
    var n8  = gera_random(n);
    var n9  = 0;//gera_random(n);
    var n10 = 0;//gera_random(n);
    var n11 = 0;//gera_random(n);
    var n12 = 1;//gera_random(n);
    var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
    d1 = 11 - ( mod(d1,11) );
    if (d1>=10) d1 = 0;
    var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
    d2 = 11 - ( mod(d2,11) );
    if (d2>=10) d2 = 0;
    return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
}

function telefone(){
    var n = 9;
    var n1 = gera_random(n);
     var n2 = gera_random(n);
     var n3 = gera_random(n);
     var n4 = gera_random(n);
     var n5 = gera_random(n);
     var n6 = gera_random(n);
     var n7 = gera_random(n);
     var n8 = gera_random(n);
     var n9 = gera_random(n);
     var n10 = gera_random(n);

     return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10;
}

function nNumeros(n){
    var numero = '';
    for(var i = 0; i < n; i++){
        numero += gera_random(9);
    }
    return numero;
}
