module.exports = function getZerosCount(number, base) {
  //раскладываем base на простые множители
  var i, j, pow=[], zeros=[], base_arr_length;
  var decbase=base;
  i=2;
  while(decbase>1) {
    pow[i]=0;
    while (decbase%i==0) {  //число number делится на i   
      pow[i]+=1;            //степень множителя в разложении
      decbase=decbase / i;

    }
    i++;
  } 
  base_arr_length=i-1;

  
  for (i=2; i<=base_arr_length; i++) {
  zeros[i]=0;
  if(pow[i]!=0){ 
    j=1;
    do {
      var numi=Math.pow(i,j);
      zeros[i]+=Math.floor(number / numi); // слагаемое number / i^j
      j++;
    } while (numi<=number);   // пока i^j не превысит число number
    if (pow[i]>1) {
      zeros[i]=Math.floor(zeros[i]/pow[i]);  // если множитель входит в основание в степени >1
    } 
  }
  }
  var minzeros=zeros[base_arr_length];
  for (i=2; i<=base_arr_length; i++) {
    if (zeros[i] && (zeros[i]<minzeros)) {
      minzeros=zeros[i]
    }
  }  
  return minzeros;
}