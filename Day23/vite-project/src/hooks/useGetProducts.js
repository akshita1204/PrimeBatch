import { useEffect,useState } from "react";

const useGetProducts=()=>
{
    const [products, setProducts] = useState([]); // to store fetched data
    const[loading,setLoading]=useState(false);

    const getData=async ()=>
    {
        try
        {
            setLoading(true);
        const resp=await fetch("http://localhost:2200/api/v1/products",{
            method:"GET",
        });
        const res=await resp.json();
        //console.log("data",res);
        setProducts(res.data.products); // save the data to state
        }
        catch(err)
        {
            console.log(err.message);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
      }, []);

      return {products,loading};
      
}
export {useGetProducts}