function commaNum(num){

  if (num !== undefined ){
    if (num.toString()[0] == "-"){
      return "-" + num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
      return num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  return ;
}

function removeCommaNum(num){

  if (num !== undefined ){
    if ( num.toString()[0] == "-"){
      return "-" +  num.toString().replace(/,/g, "").replace(/[^0-9]/g, "");
    }else{
      return num.toString().replace(/,/g, "").replace(/[^0-9]/g, "");
    }
  }
  return ;
}
