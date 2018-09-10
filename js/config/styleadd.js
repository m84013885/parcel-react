function styleadd(style,name){
    var stylehtml = document.getElementsByTagName('style')[0];
    var styleadd = "";
    for (var key of Object.keys(style)) {
    var a ="{"
    for(var value of Object.keys(style[key])){
        a += value +':' +style[key][value]+';';
    }
    styleadd = '.'+name+'-'+key + '' + a+'}';
    }
    stylehtml.append(styleadd)
}

export default styleadd