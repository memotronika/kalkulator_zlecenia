
    $('#obliczenie').mouseup(function()
    { 
        var fullsalary;
        var hours = parseFloat($("#hoursInput").val());
        var payemenn = parseFloat($("#payementInput").val());
        
        if ($("#check2").prop("checked")) {
            fullsalary = hours*payemenn;
        } else {
            if ($("#check1").prop("checked")) {
                fullsalary =Math.floor(298 + 0.7223436 * hours * payemenn);
            } else {
                fullsalary = Math.floor(0.7223436 * hours * payemenn - 2);
            }  
        }
        $("#wyplata").html('Twoja wypłata netto wynosi\n<div class="fw-bold ">'+fullsalary+'zł</div>');
        $("#stawka").html('Twoja stawka netto przy przepracowanych '+hours+' godzinach stanowi\n <div class="fw-bold ">'+(fullsalary/hours).toFixed(2)+'zł/g </div> ');
    }) 
   
    
  
 