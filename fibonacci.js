var a=Number(process.argv[2]);
var i=0,b=0,c=1,d;
console.log("Fibonacci series upto " +process.argv[2]+ " terms is :" );
for(i=0;i<a;i++)
{
    console.log(b+" ");
    d=b+c;
    b=c;
    c=d;
    
}
