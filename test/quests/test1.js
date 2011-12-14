room["main"] = {
	forcedsc : true,
	nam : "Погружение в INSTEAD",
	dsc : "[Добро пожаловать! В этой небольшой обучающей игре",
	obj : ["woodstick", "water", "shkaf"],
	way : ["room1", "room2"]

};

obj["woodstick"] = {
	nam : "Палка",
	dsc : "Под ногами валяется {палка} метрового размера.",
	tak : "Вы подобрали палку.",
	inv : "Палка как палка..."
};

obj["water"] = {
	nam : "Вода",
	dsc : "В ванне тихо стоит мутная {вода}.",
	act : "Мутная вода. Дна ванны не видно.",
	obj : ["woodstick"]
};

obj["shkaf"] = {
	nam : "Духовой шкаф"
	,
};

room["room1"] = {
	nam : "Одна локация",
	dsc : "Описание локации 1",
	way : ["main", "room2"]
};

room["room2"] = {
	nam : "Другая локация",
	dsc : "Описание локации 2",
	way : ["room1", "main"]
};
