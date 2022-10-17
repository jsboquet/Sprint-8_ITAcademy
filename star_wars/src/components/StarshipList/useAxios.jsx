import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    //const [isLoading, setLoading] = useState(true);
    const [starshipList, setStarshipList] = useState(null);
  
    useEffect(() => {
      axios.get(url).then((res) => {
        setStarshipList(res.data);
        //setLoading(false);
      });
    }, [url]);

    /*if (isLoading) {
      return <div>Loading...</div>
    }*/

    return [starshipList]
}

export default useAxios;