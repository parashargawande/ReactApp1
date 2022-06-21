import { useEffect, useRef, useState } from "react";
import instance from "../axios-config";
const useAxios = () => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const controllerRef = useRef(new AbortController())

    const cancel = () => {
        controllerRef.current.abort();
    }
    const fetchData = (url: string, method: string, payload?: {} | undefined) => {
        const fetchPromise = instance.request({
            signal: controllerRef.current.signal,
            method,
            data: payload,
            url
        });

        fetchPromise
            .then(response => setData(response.data))
            .catch(error => setError(error))
            .finally(() => setLoaded(true))
        return fetchPromise;
    }
    return { fetchData, data, loaded, error, cancel }
}

export default useAxios;