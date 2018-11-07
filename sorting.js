var a=process.argv.slice(2);
var l=a.length;
var temp;
for(var i=0;i<l;i++)
{
    for(var j=0;j<=i;j++)
    {
        if(Number(a[i])< Number(a[j]))
        {
            temp=Number(a[i]);
            a[i]=Number(a[j]);
            a[j]=temp;
            
        }
    }
}
console.log(a);
