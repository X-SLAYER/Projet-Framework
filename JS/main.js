

$(document).ready(function () {
    var duration = 500;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-up').fadeIn(duration);
        } else {
            $('.scroll-up').fadeOut(duration);
        }
    });

    $(".scroll-up").click(function () {
        $("html,body").animate({ scrollTop: 0 }, duration);
    });


    $(function () {
        'use strict'
        $('body').css('paddingTop', $('.navbar').innerHeight());
    });
});


function getSelectValue() {

    var selected = document.getElementById("nbp").value;
    var chaires = document.getElementById("chaises");
    $("#chaises").empty();
    switch (selected) {
        case "1":
            $("#chaises").append("<img id='chaiz' src='images/chaire1.png'>");
            break;
        case "2":
            $("#chaises").append("<img id='chaiz' src='images/chaire2.png' >");
            break;
        case "4":
            $("#chaises").append("<img id='chaiz' src='images/chaire4.png' >");
            break;
        case "6":
            $("#chaises").append("<img id='chaiz' src='images/chaire6.png' >");
            break;
        default: $("#chaises").append("<p><b> Aucun Option Selected !! <b></p>");
    }

}

function OpenError() {

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function verification() {
    var date = document.getElementById("date").value;
    var selected = document.getElementById("nbp").value;
    var checked = $("input[name=civilite]:checked").val();
    var nom = document.getElementById("nom").value;
    var count = 0;
    var phone = document.getElementById("tel").value;
    var plat = $("input[type='checkbox']:checked");
    var totalp = 0;


    if (selected == "-1") {
        $('#error').text('Veuillez sélectionner le nombre de places')
        OpenError();
        return;
    }
    if (date == "") {
        $('#error').text("Date non saisie !! ");
        OpenError();
        return;
    }


    if (checked != null) {
        if (checked == "mme") {
            checked = "Madame";
        } else if (checked == "mlle") {
            checked = "Mademoiselle";
        } else if (checked == "m") {
            checked = "Monsieur";
        }
    }
    else {
         $('#error').text("Civilité est obligatoire !");
         OpenError();
        return;
    }

    if (nom.length >= 10) {
        for (var i = 0; i < nom.length; i++) {
            if ((nom[i] >= 0) && (nom[i] <= 9)) {
                count++;
            }
        }
        if (count == nom.length) {
             $('#error').text("Nom : Eurreur Remove chiffres");
             OpenError();
            return;
        }

    } else {
        $('#error').text("Nom et prénom trop courts ! ou champ vide !");
        OpenError();
        return;
    }


    if (phone.length == 8) {
        for (var i = 0; i < phone.length; i++) {
            if (!((phone[i] >= 0) && (phone[i] <= 9))) {
                 $('#error').text("Tel : N de tel invalide !! ");
                 OpenError();
                return;
            }
        }
    } else {
         $('#error').text("Tel : 8 chiffres sont nessesaires ");
         OpenError();
        return;
    }


    if (plat.length > 0) {
        var result = "<ul>";
        plat.each(function () {
            result += "<li>" + $(this).val() + "</li>";
            totalp += $(this).data("prix");
        });
        result += "</ul>";
    } else {
         $('#error').text("Il Vous Saiaisr Au Moins Une Plat !!");
         OpenError();
        return;
    }

    var finalconf = "Bonjour " + checked + " <b>" + nom + "<b> ,<br>" + "Votre commande du "
        + date + " a bien validée <br>" + "Les plats commandés sont <br>" + result +
        "Le montant total de la commande est de <b>" + totalp + "<b> Dinars ";
    $("#div_resume").html(finalconf).slideDown("slow");
}

