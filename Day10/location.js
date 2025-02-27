const getdata=(text)=>
{
    const pr=fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
        method:"GET",
        headers:{
            "x-rapidapi-host":"google-map-places.p.rapidapi.com",
            "x-rapidapi-key":"641476618dmsh0f65863cb701125p1492fejsn8470177b784a"

        }
    });

    pr.then((res)=>
    {
        const pr2=res.json();
        pr2.then((data)=>
        {
            showLocations(data)
        });
    })
}
const root=document.getElementById("locations");
const showLocations=(data)=>
{
    root.innerHTML="";
    const {predictions}=data;
    console.log(predictions)
    predictions.forEach((ele)=>
    {
        const p=document.createElement("p");
        p.innerText=ele.description;
        root.appendChild(p);
    });
}

let id=null;
const handleSearch=(e)=>
{
    getdata(e.target.value);
}
