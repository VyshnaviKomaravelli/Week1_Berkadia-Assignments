var a=Number(process.argv[2]);
var fact=1;

for(i=1;i<=a;i++)
{
    fact=fact*i;
    
}
console.log("Factorial of " +process.argv[2]+ "  is :"+fact );

