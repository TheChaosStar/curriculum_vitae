
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('WUisxsf814GkF4ISn');
})();

var lemessage = document.querySelector('#result-form');
var nom = document.querySelector('#name');
var email = document.querySelector('#email');
var telephone = document.querySelector('#telephone');
var message = document.querySelector('#message');

function success() {
    // message pour l'utilisateur
    lemessage.innerHTML = "Message envoyé ! <br>Nous vous recontacterons dès que possible.";
    //suppression du contenu des champs du formulaire
    nom.value = "";
    email.value = "";
    telephone.value = "";
    message.value = "";
}

function failed() {
    lemessage.style.color = 'red';
    lemessage.innerHTML = "Une erreur s'est produite,<br>veuillez réessayer.";
}


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        //these IDs from the previous steps
        emailjs.sendForm('service_bskc03p', 'template_g0rd2wf', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });

    });
}

