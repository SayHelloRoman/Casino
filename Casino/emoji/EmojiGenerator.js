class Generator{
    static genLose(){
        let text = ''
        for (let i = 0; i < 2; i++){
            if(Math.round(Math.random())){
                text += '🍌'
            }else {
                text += '🍑'
            }
        }
        return text + '🗿'
    }
    static genWin(){
        let str = ''
        if(Math.round(Math.random())){
            return '🍌🍌🍌'
        }else {
            return '🍑🍑🍑'
        }
    }
}
module.exports = { Generator }