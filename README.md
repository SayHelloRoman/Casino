# Casino
 
## Как запустить?

- Установить ``Node.js``
- Установить ``package-lock.json``
- Запустить ``server.js``

## Как это работает?

Когда мы подключаемся серверу, он генерирует выиграли мы или проиграли:
```js
if(Math.round(Math.random())){
    res.send(emogi.Generator.genWin())
}else {
    res.send(emogi.Generator.genLose())
}
```
Потом мы генерируем строку в зависимости от результата:
```js
static genLose(){
    let text = ''
    for (let i = 0; i < 2; i++){
        if(Math.round(Math.random())){
            text += '🍌'
        }else {
            text += '🍑'
        }
    }
    return text + '🗿'```

```js
static genWin(){
    let str = ''
    if(Math.round(Math.random())){
        return '🍌🍌🍌'
    }else {
        return '🍑🍑🍑'
    }
}```

## Зачем это было написано?

- Для практики в JavaScript
- Для освоения фреймворка Express