function commaNum(num){

  if (num !== undefined ){
    return num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return ;
}

function removeCommaNum(num){

  if (num !== undefined ){
    return num.toString().replace(/,/g, "");
  }
  return ;
}
