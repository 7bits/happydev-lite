$(document).ready(function() {
				var email = $('.js-email');
				var validationResult = $('.js-validation-result');
				var fildDanger = 'has-danger';
				var fildWarning = 'has-warning';
				var textDanger = 'text-danger';
				var textWarning = 'text-warning';
				var textDone = 'text-done';


		$(document).on('focus', '.js-email', function () {
				validationResult.text('');
				email.val('');
				email.removeClass(textDanger);
				email.removeClass(fildDanger);
				email.removeClass(textWarning);
				email.removeClass(fildWarning);
				email.removeClass(textDone);
		});

		$(document).on('click', '.js-submit', function () {
				var emailValue = email.val();
				if (emailValue!=='') {
					var regExp = /.+@.+\..+/i;

					if(regExp.test(emailValue)){
						email.removeClass(fildDanger);
						email.removeClass(textDanger);
						$.ajax({
                url: "https://docs.google.com/a/7bits.it/forms/d/1LMeVrPoJar9pBP3O0QSlOjAMaKGjH4_5jD253iESATs/formResponse",
                data: {"entry.1926142699" : emailValue},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
                        //Success message
                        validationResult.text('Ура! Подписка оформлена!');
                        validationResult.addClass(textDone);
                    },
                    200: function (){
                        //Success Message
                    }
                }
            });
					} else {
						validationResult.text('Некорректный e-mail');
						validationResult.addClass(textDanger);
						email.addClass(textDanger);
						email.addClass(fildDanger);
					}
		} else {
			validationResult.text('Поле не заполнено.. Ай-я-яй..');
			validationResult.addClass(textWarning);
			email.addClass(fildWarning);
		}
	});

});