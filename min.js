console.info("array is "+process.argv.slice(2));
var a=process.argv.slice(2);
var l=a.length;
var min=Number(a[0]),i=0;
for(i=1;i<l;i++)
{
if(Number(a[i])<min)
min=a[i];
}
console.log("Minimum element in array is "+min);
