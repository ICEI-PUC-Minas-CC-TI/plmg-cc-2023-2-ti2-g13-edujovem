import { useState, useEffect } from 'react'

//Hook customizado
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // Refatorando o metodo POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    // tratando erro
    const [error, setError] = useState(null)

    const httpCofig = (data, method) => {
        const token = localStorage.getItem("jwt");
        if(method == "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(()=>{ // useEffect porque queremos executar apenas uma vez

        const fetchData = async ()=>{
            setLoading(true)
            try {
                const token = localStorage.getItem("jwt");
                console.log(token)
                const res = await fetch(url, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                const json = await res.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            }
            setLoading(false)
        }
        fetchData()

    }, [url, callFetch]) // é a dependencia do hook, se mudar a url queremos executar o hook novamente

    // refatorando o POST
    useEffect(()=> {
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, method, url])

    return { data, httpCofig, loading, error};
}