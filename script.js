let a, b, c = 0;
var tip;

const nop = $("#numOfPeople");
const nopLog = $("#logNumOfPeople");

$.fn.restoreBill = function() {
    $("#bill").css("border-color", "transparent");
    $("#logBill").html("");
};

$.fn.restoreNOP = function() {
    nop.css("border-color", "transparent");
    nopLog.html("");
};

$("#bill").on("input", function() {  // Bill
    if($("#bill").val() === '') {
        a = 0
        $.fn.restoreBill();
    }   else if($("#bill").val() <= 0) {
        a = 0;
        $("#bill").css("border-color", "var(--red)");
        $("#logBill").html("Must be greater than zero");
    } else {
        a = 1;
        $.fn.restoreBill();
    } 
})

$(".grid-layout button").click(function() { // The % buttons
    b = 1;
    tip = Number($(this).val());
})

$("#customInput").on('change', ()=> {  // Custom input
    if($("#customInput").val() > 0) {
        b = 1;
        tip = $("#customInput").val() / 100; 
        $("#customInput").css("border-color", "transparent");
    }   else if($("#customInput").val() === '') {
            b = 0;
            $("#customInput").css("border-color", "transparent");
    }   else {
            b = 0;
            $("#customInput").css("border-color", "var(--red)");
    }
})

nop.on("input", function() { // Number of People
    if(nop.val() === '') {
        c = 0
        $.fn.restoreNOP();
    }   else if(nop.val() == 0) {
            c = 0;
            nop.css("border-color", "var(--red)");
            nopLog.html("Can't be zero");
    }   else if(nop.val() < 0) {
            c = 0;
            nop.css("border-color", "var(--red)");
            nopLog.html("Must be greater than zero");
    }   else {
            c = 1;
            $.fn.restoreNOP();
    } 
})

$("body").on('change, click', function() {
    if($("#bill").val() !== '' || nop.val() !== '') { // Activate and Deactivate Reset button
        $("#reset").removeAttr('disabled');
    }   else {
            $("#reset").attr('disabled', 'disabled');
    }

    if(a && b && c) { // Logic to display calculation
        $("#tipAmount").html("$" + ($("#bill").val() * tip / nop.val()).toFixed(2));
        $("#total").html("$" + ($("#bill").val() * (tip + 1) / nop.val()).toFixed(2));
    }    
})

$("#reset").on('click', () => {  // Reset button
    location = location.href;
})

