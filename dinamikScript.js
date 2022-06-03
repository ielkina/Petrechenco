"use strict";
//035 Async, defer, динамические скрипты

//defer атрибут сообщает продолжать загружать страницу 
//а скрипт загружать в фоновом режиме 
//затем запустить скрипт когда он загрузится 
//defer не блокирует страницу 
//сохраняют порядок относительно друг друга 

const p = document.querySelectorAll('p');
console.log(p);

//async не зависит от дом структуры
//не зависит от других скриптов
//используется в метрике 

function loadScript(src){
	const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);
}
loadScript('/test.js');
loadScript('/test2.js');
