# TwitterApplication
Веб-приложение для взаимодействия с API социальной сети twitter

Для функционирования приложения должно быть установлено следующее ПО:
1) Node.js v8.11.1
2) Любой современный браузер (Chrome, FireFox, Internet Explorer и т.п)
3) Git 2.12.0

Инструкция по развертыванию приложения:
1) Зайти в любую папку на локальном диске, например E:\projects\ ** cd E:\projects\ **
2) В CLI прописать ** git clone https://github.com/ablohin/TwitterApplication.git **
3) В файле C:\Windows\System32\drivers\etc\hosts добавить в конце строчку

    127.0.0.1       twitterapp.ablokhin.local
 
4) Перейти в паку с проектом E:\projects\TwitterApplication\
5) В CLI прописать **npm install**
6) В CLI прописать **bower install**
7) В CLI сделать resolve выбрав вариант ответа 3
8) Ждать 15 минут, сходить выйпить кофе
9) В CLI прописать **npm start**
10) Перейти в браузере по URL-адресу http://twitterapp.ablokhin.local:8000
