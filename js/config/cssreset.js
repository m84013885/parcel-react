(function cssreset () {

let style = document.createElement('style');
let head = document.getElementsByTagName('head')[0];
head.append(style);
style = document.getElementsByTagName('style')[0];
style.append(`

* {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "STHeitiSC-Light", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

body,
html {
    idth: 100%;
    height: 100%;
}

li {
    list-style: none
}

.hide {
    display: none
}

:global #main {
    width: 100%;
    height: 100%;
    position: relative;
}
  
`)

}())


