if (($('#LogiN').val().length > 0) && ($('#PasswD').val().length > 0)) {
    $('#username').val($('#LogiN').val() + '@campus.technion.ac.il');
    document.getElementById("idenT_conT").click();
}