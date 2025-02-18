                                  //for Each and Map Function


//Elimation of the etra variable
// const sum=(a,b,c)=>
// {
//     const ans=a+b;
//     return ans;
    
// }

// const Print=(txt)=>
// {
//     console.log("_____________")
//     console.log(txt);
//     console.log("_______________")
// }

// Print(sum(10,20))



//callback=> when you pass a function as a parameter (function invocation)

// const sum=(a,b,c)=> //Higher order function 
//     {
//         const ans=a+b;
//         //return ans;
//         c(ans)
        
//     }
    
//     const Print=(txt)=>
//     {
//         //callback function 
//         console.log("_____________")
//         console.log(txt);
//         console.log("_______________")
//     }
    
//     sum(10,20,Print)
    //Print is a callback function 


    //Decoupling=> Decoupling is a coding strategy that involves taking the key parts of your classes' functionality and replacing them with calls to an interface reference of your own design


    //ForEach
    const getdata=()=>
    {
        const name=prompt("Please enter your name");
        console.log("Hello",name);
        const noofSubText=prompt("Plase enter the number of subjects");
        const noofsub=parseInt(noofSubText) //parseFloat() or Number()
        return noofsub;
        
    }

    const getsub=(num)=>
    {
        const record={};
        for(let i=0;i<num;i++)
        {
            const subname=prompt(`Please enter the name of subjects ${i}`);
            const marks=prompt(`Please enter the marks for ${subname} `); 
            record[subname]=marks;
        }
        return record;
        console.log(record)
    }


    const getper=(obj)=>
    { 
        // const marks=Object.values(obj); //to get the vlaues
        // const subject=Object.keys(obj);
        // const pairs=Object.entries(obj);

        const marks=Object.values(obj);
        let totalmarks=0;
        let totalsub=0;

        // const tem=(a)=>
        // {
        //     totalmarks+=a;
        //     totalsub++;
        // }
        // marks.forEach(tem)
        marks.forEach((ele)=>
        {
            totalmarks+=parseInt(ele)
            totalsub++;
        })
       return totalmarks/totalsub;
        console.log(totalmarks);
        console.log(totalsub)

    }

    const getgrades=(percentage)=>
    {
        const grades=[
            [60,"B"],
            [70,"B+"],
            [80,"A"],
            [90,"A+"]
               
        ];
        let grade="";
        grades.forEach((arr)=>
        {
            if(arr[0]>=percentage) 
            {
                grade=arr[1];
            }
        })
        console.log(grade)

    }

    const gethigherscoringsub=(obj)=>
    {
        let maxscore=0;
        let maxscoresub=""
        const marks=Object.entries(obj);
        marks.forEach((ele)=>
        {
            let subname=ele[0];
            let submarks=ele[1];
            if(submarks>=maxscore)
            {
                maxscore=submarks;
                maxscoresub=subname;
            }
        })
        console.log(maxscore)
        console.log(maxscoresub)
    }

//    const record=
//    {
//     maths:12,
//     english:12,
//     hindi:10,
//    }
    const num=getdata();
    const record=getsub(num)
    const per= getper(record);
    gethigherscoringsub(record)
    getgrades(per)

   