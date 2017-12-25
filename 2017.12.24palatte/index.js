window.onload = function () {
    let canvas = document.querySelector('canvas');
    let draws = document.querySelectorAll('.draw li');
    let gongneng = document.querySelectorAll('.gongneng li');
    let stylebtn = document.querySelectorAll('.style');
    let colors = document.querySelectorAll('input[type=color]');
    let mask = document.querySelector(".mask");
    let numberBtn = document.querySelector("input[type = number]");
    let withdraw = document.querySelector("#prev");
    let eraser = document.querySelector("#eraser");
    let eraser1 = document.querySelector(".eraser1");
    let font = document.querySelector('.font');
    let clipbtn = document.querySelector('#clipbtn');
    let clip = document.querySelector('.clip');
    let save = document.querySelector("a");
    let palette = new Palette(mask, canvas, eraser1);
    draws.forEach(ele => {
        ele.onclick = function () {
            let type = this.id;
            draws.forEach(ele => {ele.classList.remove("check")});
            this.classList.add("check");
            if (type == 'polygon' || type == 'Polygonj'){
                let value = prompt('请输入边数');
                palette.draw(type,value);
            }else{
                //palette[type]();
                palette.draw(type);
            }
        }
    });
    draws[0].onclick();
    stylebtn.forEach(ele => {
        ele.onclick = function () {
            let type = ele.id;
            stylebtn.forEach(ele => {ele.classList.remove("check")});
            this.classList.add("check");
            palette.style = this.id;
        }
    });
    stylebtn[0].onclick();
    colors.forEach(ele => {
        ele.onchange = function () {
            console.log(this.value);
            palette[this.id] = this.value;
        }
    });
    numberBtn.onchange = function () {
        palette.linewidth = this.value;
    };
    withdraw.onclick = function () {
        palette.withdraw();
    };
    eraser.onclick = function () {
        let w = parseInt(prompt('请输入橡皮尺寸'));
        eraser1.style.width = w + 'px';
        eraser1.style.height = w + 'px';
        palette.era(w);
    };
    font.onclick = function(){
        this.classList.add('check');
        palette.font();
    };
    clipbtn.onclick = function () {
        this.classList.add('check');
        palette.clip(clip);
    }
    save.onclick = function () {
        let date = canvas.toDataURL('image/png');
        save.href = date;
        save.download = '1.png';
    }
};