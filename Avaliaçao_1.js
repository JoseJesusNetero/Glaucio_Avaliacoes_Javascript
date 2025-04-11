let  A =  80000 ;
let  B =  200000 ;
let  anos  =  0;


while (  A  <  B  )  {

	A  +=  0.03  *  A ;
	B  +=  0.015 *  B ;
  anos++; 
  
}

console.log( anos )  ;
//////////////

///// 2  Questao

let  Vetor  =  [] ;
let  numero  =  0 ;


for ( let i = 0; i  <  10; i++)  {

	numero  =   parseInt( prompt( "Digite um numero \n ") ) ;
  
  if( !isNaN( numero ) ) 
		
    Vetor.push( numero ) ;

}

for ( let i = 0;  i  <  10; i++)

	console.log( Vetor[ i ] ) ;


////////  Questao  3

function  Maior_Menor_Media( vetor )  {

	var  maior  =  vetor[ 0 ] ;
  var  menor  =  vetor[ 0 ] ;
  
  let  soma = 0 ;

for( let  i  = 0 ;  i  <   vetor.length;  i++ )  {

	 
   if( maior  <  vetor[ i ])   {
  
  	maior   =   vetor[ i ] ;
    
    														}
                                
   if( menor >  vetor[ i ] )    {
   
   		menor  =  vetor[ i ] ;
    
   														  }
   soma +=  vetor[ i ] ;
    
   ////////////////

}

var media = soma / vetor.length;

console.log( "O maior numero deste vetor e "  +  maior  +  ", o menor " + menor +  " a media e "  +  media  + "\n") ;
////////

}

let  vetor  =  [ 123, 1345, 1, 234, 6540, 45 ] ;
///
Maior_Menor_Media( vetor ) ;



////////////////////////////

////  4  Questao

let salario_inicial  = 1000 ;
let salario_1996     +=  0.15  *  salario_inicial ;
let  comeco =  1997;

let ano_atual  =  2025;

let porcentagem_dobro  =  15 \ 100 ;

for ( let  anos = 0; anos  +  comeco  <=  ano_atual ; anos++ )  {
  
  porcentagem_dobro  +=  ( porcentagem_dobro )  *  2;
  
  salario_1996 +=  porcentagem_dobro  *  salario_1996 ;
  
  console.log(  " o salario no ano " +  ( anos + comeco )  + "e"  +  salario_1996  + "\n" )
  
                                                              }
     
////// Segunda_Versao      

let  Salario_dado =  parseFloat( prompt( "Digite o salario " +  "\n" ) ;
let  aPartirDeAno =  parseInt( prompt( "Digite o ano " + "\n" );

switch( aPartirDeAno )   {
  
  case  1996 :  
                    
          porcentagem_dobro  =  ( 15 \ 100 )   ;
          
          Salario_dado  +=  porcentagem_dobro   *  Salario_dado ;
                                                
          for ( let  anos = 0; anos  +  comeco  <=  ano_atual ; anos++ )  {
  
          porcentagem_dobro  +=  ( porcentagem_dobro )  *  2;
  
          Salario_dado +=  porcentagem_dobro  *  Salario_dado ;
  
          console.log(  " o salario no ano " +  ( anos + comeco )  + "e"  +  salario_Dado + "\n" )
  
                                                              }
                                                              
           break;
     
    case 1997 :      
    
          
           porcentagem_dobro  =  ( 15 \ 100 )   ;

           
          for ( let  anos = 0; anos  +  comeco  <=  ano_atual ; anos++ )  {
  
          porcentagem_dobro  +=  ( porcentagem_dobro )  *  2;
  
          Salario_dado +=  porcentagem_dobro  *  Salario_dado ;
  
          console.log(  " o salario no ano " +  ( anos + comeco )  + "e"  +  salario_Dado + "\n" )
                                                     
          
          break;   
          
          
          
          
///////  5  Questao                                            
                                                    
    
let  Raio  =  parseFloat( prompt(  "Qual a medida do raio ? "  + "\n");

let Area  =  3.14  *  Raio  *  Raio ;


console.log( " A area e  "  +  Area  +  "\n" );