window.onload = function () {
    let box = document.querySelector('.lunbo');
    let imgs = document.querySelectorAll('.imgs img');
    let dian = document.querySelectorAll('.dian li');
    let pre = document.querySelector('.zuo');
    let next = document.querySelector('.you')
    let now = 0;
    console.log(dian);
    let t = setInterval(move,2000);
    function move(way) {
        way = way || 'right';
        if (way == 'right'){
            now ++ ;
            if(now == imgs.length){
                now=0;
            }
        }else if(way == 'left'){
            now--;
            if(now == -1){
                now = imgs.length - 1;
            }
        }

        imgs.forEach(function (ele,index) {
            ele.style.opacity = 0;
            dian[index].classList.remove('dian-active');
        });
        imgs[now].style.opacity = 1;
        dian[now].classList.add('dian-active');
    }
    box.onmouseover = function () {
        clearInterval(t);
    };
    box.onmouseout = function () {
        t = setInterval(move,2000);
    };
    pre.onmouseover = function () {
        clearInterval(t);
    };
    pre.onmouseout = function () {
        t = setInterval(move,2000);
    };
    next.onmouseover = function () {
        clearInterval(t);
    };
    next.onmouseout = function () {
        t = setInterval(move,2000);
    };
    dian.forEach(function (ele,index) {
        ele.addEventListener('click',function () {
            imgs.forEach(function (ele,index) {
                ele.style.opacity = 0;
                dian[index].classList.remove('dian-active');
            });
            imgs[index].style.opacity = 1;
            this.classList.add('dian-active');
            now = index;
        })
    });
    pre.addEventListener('click' , function () {
        move('left');
    });
    next.addEventListener('click' , function () {
        move('right');
    });
}