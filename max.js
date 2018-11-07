console.info("array is "+process.argv.slice(2));
var a=process.argv.slice(2);
var l=a.length;
var max=Number(a[0]),i=0;
for(i=1;i<l;i++)
{
if(Number(a[i])> max)
max=a[i];
}
console.log("Maximum element in array is "+max);
