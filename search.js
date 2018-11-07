console.info("search element is "+Number(process.argv[2]));
var k=Number(process.argv[2]);
console.info("array is "+process.argv.slice(3));
var a=process.argv.slice(3);
var l=a.length;
var i=0,f=0;
for(i=0;i<l;i++)
{
    if(Number(a[i])==k)
    {
    console.log("Key is found at "+ Number(i+1)+" position in array");
    f=1;
    }
}
if(f==0)
console.log("Not found");
