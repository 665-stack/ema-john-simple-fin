
import { useEffect } from "react";
import { useState } from "react"
/* akhaner ei file take bole hook. akaner code gulo jate components file er shobgulo components e use korte pari tai akhane likah hoice. And akhan theke state er state name r setStateName ta return kore daya hoice. But Jokhon kono component e eta import korte jabe state jababe likte hoy same babei likbe. But useState er jaygay hook er function er name ta likte hobe.
example: 
From hook: return [products, setProducts]
From component: const [products, setProducts] = useProducts();
 */
const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}

export default useProducts;