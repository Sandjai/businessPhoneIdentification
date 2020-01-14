window.addEventListener("DOMContentLoaded", function() {
    var GlobalMatrix = "+7__________",
    _MatrixForPlaceholder = "",
    _placeholder = "",
    _limitMask = "",
    _countryField = document.getElementById('countryID'),
    _telephoneNumber = document.getElementById('busPhoneID'),
    _countryCode = _countryField.options[_countryField.selectedIndex].getAttribute('data-country-code'),
    _symbolNumber = _countryField.options[_countryField.selectedIndex].getAttribute('data-symbol-number'),
    MobileNumber = document.getElementById('FieldIDForMobile'),
    NotMobileNumber = document.getElementById('FieldIDForNotMobile');
    
    
    PlaceholderMatrix ();
    
    
    
    
    
    
    
    function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
    }
    }
    
    
    
    function mask(event) {
    
    matrix = GlobalMatrix;
    var i = 0;
    
    var def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
    if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
    }
    
    
    var input = document.querySelector("#busPhoneID");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    
    
    document.getElementById('countryID').addEventListener("change", function()
    
                                                                                                             {
                                                                                                                 if (document.getElementById('busPhoneID-error') != null) {
     document.getElementById('busPhoneID-error').innerHTML = "";
                                                                                                                };
                                                                                                            document.getElementById('busPhoneID').value = '';
    _countryCode = _countryField.options[_countryField.selectedIndex].getAttribute('data-country-code');
    _symbolNumber = _countryField.options[_countryField.selectedIndex].getAttribute('data-symbol-number');
    
    PlaceholderMatrix ();
    
    });
    
    
    
    function PlaceholderMatrix () {
    
    
    
    
    
    if (_countryCode===null) {
        _countryCode="";
        _symbolNumber="____________________";
        _MatrixForPlaceholder = "+";
         GlobalMatrix ="+" + _countryCode + _symbolNumber;
    
    
    
    }
    else {
        _placeholder = "";
        _limitMask = "";
        __symbolNumber = +_symbolNumber
        for( var i=0; i < __symbolNumber; i++ ) {
        _placeholder += "x";
        _limitMask += "_";
        }
    
    
    GlobalMatrix ="+" + _countryCode + _limitMask;
    _MatrixForPlaceholder = "+" + _countryCode + _placeholder;
    }
    
    
    _telephoneNumber.setAttribute("placeholder", _MatrixForPlaceholder);
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _Error () {
    
    
        var _Length = +_countryCode.length + 1 + +_symbolNumber;
    _telephoneNumber.setAttribute("minlength", _Length);
    _telephoneNumber.setAttribute("maxlength", _Length);
    var _Message = "ÐÐµÐ´Ð¾ÑÑ‚Ð°Ñ‚Ð¾Ñ‡Ð½Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð².";
    _telephoneNumber.setAttribute("data-msg-minlength", _Message);
    if (document.getElementById('busPhoneID-error') != null) {
    document.getElementById('busPhoneID-error').innerHTML = _Message;
    };
    }
    
    
    
    document.getElementById('busPhoneID').addEventListener("click", _Error);
    document.getElementById('busPhoneID').addEventListener("keydown", _Error);
    
    
    
    
    document.getElementById('busPhoneID').addEventListener("blur", function() {
    
     if (_countryCode != '') {
    
    
    var _MobileCodes = _countryField.options[_countryField.selectedIndex].getAttribute('data-mob');
    var MobileCodesArr = _MobileCodes.split(', ');
    var _LengthBeforeNumber = +_countryField.options[_countryField.selectedIndex].getAttribute('data-country-code').length + 1;
    
    
    
    _Error();
    
    
    
    
    
    var MaxLengthOfMobileCode = 0;
    for (var d = 0; d<MobileCodesArr.length; d++) {
    if (MobileCodesArr[d].length > MaxLengthOfMobileCode) {
        MaxLengthOfMobileCode = MobileCodesArr[d].length;
    }
    }
    
    
    
    var SymbolsInInput = ""
    for (var a = 0; a < MaxLengthOfMobileCode; a++) {
    SymbolsInInput += document.getElementById('busPhoneID').value.charAt(_LengthBeforeNumber + a);
    }
    
    for (var b = 0; b<MobileCodesArr.length; b++) {
        if (MobileCodesArr[b] == SymbolsInInput) {
                   MobileNumber.value = document.getElementById('busPhoneID').value;
    NotMobileNumber.value = '';
    break;
        }
        else {
               MobileNumber.value = "";
    NotMobileNumber.value = document.getElementById('busPhoneID').value;
        }
    }
    
    
    
    
    
    
    
    }})
    
    
    
    });