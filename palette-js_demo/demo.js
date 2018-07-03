var Data=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]; //for Data.length

window.onload=function(){
    var colors;
    var scheme = palette.listSchemes("rainbow")[0];
    var args = [Data.length,0.5];
    colors = scheme.apply(scheme, args);
    console.log(colors);
}
//args=[ColorNum,Saturation,Value(Lightness)]
