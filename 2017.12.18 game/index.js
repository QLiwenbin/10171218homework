class Code{
    constructor(){
        this.char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        this.length = 5;
        this.current = [];
    }
    start(){
        this.getChars(this.length);
        this.drop();
    }
    getChars(length){
        for(let i = 0;i < length;i++){
            this.getChar();
        }
    }
    getChar(){
        let num = Math.floor(Math.random()*this.char.length);
        //this.char[num];
        let divs = document.createElement('div');
        let tops = Math.floor(Math.random()*100);
        let lefts = Math.floor((window.innerWidth - 400)*Math.random()+200);
        divs.style.cssText = `width:50px;height:50px;background:#ccc;border-radius:50%;text-align:center;line-height:50px;font-size:20px;position:absolute;top:${tops}px;left:${lefts}px;`
        divs.innerText = this.char[num];
        document.body.appendChild(divs);
        this.current.push(divs);
    }
    drop(){
        let _this = this;
        setInterval(function () {
            for(let i = 0;i < _this.current.length;i++){
                let tops = _this.current[i].offsetTop + 10;
                _this.current[i].style.top = tops + 'px';
                if(tops >= 500){
                    document.body.removeChild(_this.current[i]);
                    _this.current.splice(i,1);
                    _this.getChar();
                }
            }
        },100)
    }

}
