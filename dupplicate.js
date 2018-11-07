console.log("Array elements are: "+process.argv.slice(2));
var a=process.argv.slice(2);
var b=[];
for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        if(Number(a[i])==Number(a[j]) && !b.includes(a[i]))
        b.push(a[i]);
        
    }
}
if(b.length==0)
console.log("No duplicate elements");
else
console.log("Duplicate elements in array are: "+b);
