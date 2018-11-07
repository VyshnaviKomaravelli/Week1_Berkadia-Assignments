var a=process.argv[2];
var i=2,c=0;
console.log("prime numbers upto "+a+ " is: ");
for(i=2;i<=a;i++)
{
    c=0;
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            c=1;
        break;
        }
    }
    if(c==0)
    console.log(i+" ");
}
