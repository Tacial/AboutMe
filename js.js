let d = new Date();

document.getElementById("demo").innerHTML = d.toDateString();

function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

$(document).ready(function() {
    $("#expList".find("div").hide();
      
    $("#expList > li").click(function() {
        $(this).find("div").slideToggle();
    });
});
