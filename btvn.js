// 0 1 1 2 3 5 8 13(5+8=13) nhap 1 so in tu 0 de so do
var a = parseInt(prompt('so :'))
var b=2
var c=1
for(var i=0;i<=a;i++){
    if(a==0){console.log(a)}
    if(a==1){console.log(a)}
    else{
        var d=b
        b=b+c
        if(b>a){console.log(b-c);break}
        if(b==a){console.log(b);break}
        console.log(b,c)
        var c=d
    }}