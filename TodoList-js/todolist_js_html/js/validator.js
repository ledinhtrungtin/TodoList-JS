let Validator = function(){
    this.checkeEmpty = function(value, mes){
        if(value == ''){
            alert(mes)
            return false;
        }
        return true;
    }

    this.checkDup = function(list, value, mes){
        if(list.includes(value)){
            alert(mes)
            return false
        }
        return true
    }
}