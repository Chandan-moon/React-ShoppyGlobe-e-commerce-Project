import { useEffect, useState } from "react";


function useFetch(url = 'https://dummyjson.com/products') {


    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {


        async function fetchData() {

            try {

                const response = await fetch(url);
                const result = await response.json();

                setData(result)

            }
            catch (err) {

                setError(err)

            }
            finally {

                setLoading(false)

            }

        }

        fetchData()


    }, [url])



   return {data, error, loading} 



}


export default useFetch;


