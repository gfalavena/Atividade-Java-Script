const microondas = (function (){
    let resultado= 0;
 
    function calcConsumoEnergia (potencia, horas, dia){
        resultado = (potencia * horas * dia) / 1000
        }
 
        return{
            valorPago(potencia, horas, dia){
                calcConsumoEnergia(potencia, horas, dia)
                console.log(`\n\nFórmula: Potência x Horas x Dias / 1000`);
                console.log(`Potencia: ${potencia}, Horas Consumidas: ${horas}, Dias percorridos: ${dia}`);
                console.log(`Valor total: ${resultado}\n`)
            }
 
        }  
})();
 
microondas.valorPago(1200,2,30);
 
///////////////////////////////////////////////////
 
const triangulo = (function(){
    let area=0;
 
    function calcAreaTriangulo(base, altura){
      area = (base * altura)/2
    }
 
    return {
      AreaTotal(base, altura){
        calcAreaTriangulo(base, altura)
        console.log(`Base:${base}, Altura: ${altura}`)
        console.log(`Valor da Área Total do triângulo retângulo: ${area}\n`)
      }
 
    }
 
  })();
   
  triangulo.AreaTotal(30,20);
 
  ///////////////////////////////////////////////////

  const carro = (function(){
    let velocidade= 0;
    let velocidadeMax= 250;
    let aceleracao=200;
 
    function acelerarCarro(){
      if( velocidade<velocidadeMax){
        velocidade+= aceleracao;
        if (velocidade > velocidadeMax) {
          velocidade = velocidadeMax;
      }
        console.log(`Acelerando: ${velocidade} km/h\n`);
      }else{
        console.log(`Velocidade chegou ao máximo`);
      }

    }

    function frearCarro(){
      if(velocidade>0){
        velocidade -= aceleracao;
        if (velocidade < 0) {
          velocidade = 0;
      }
        console.log(`Freando: ${velocidade} km/h`);
      }else{
        console.log(`O carro está parando`);
      }

    }

    return {
      acelerar(){
        acelerarCarro();
      },

      frear(){
        frearCarro();

      }
    }
  })();

  carro.acelerar();
  carro.frear();
