loc["main"] = {
		forcedsc: true,
		nam: "Погружение в INSTEAD",
		dsc: "[Добро пожаловать! В этой небольшой обучающей игре",
		obj: [
				xact('throw', 'Да-да, выбросьте подальше!'),
				xact('next', function() { go(garden);}),
			],
};