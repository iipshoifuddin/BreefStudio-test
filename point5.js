// Try edit message
function findMissingnumber(A, B)
{
  if(A.length<1)
  {
    return "Array A Kososng";
  }
   if(B.length<1)
  {
    return "Array B Kososng";
  }
  let data=[], index=0;
  let max=A.length+B.length;
  for(let i=1; i<=50; i++)
  {
    for(let j=0; j<max; j++)
    {
      if(i===A[j])
      {
        data[index]=i;
        index++;
      }
      else if(i===B[j])
      {
        data[index]=i;
        index++;
      }
    }
  }
  return data;
}

console.log(findMissingnumber([1,2,5,7],[3,4,8]))