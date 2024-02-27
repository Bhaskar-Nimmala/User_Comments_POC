import { useState, useEffect, useMemo } from "react"
import axios from "axios";


const useGetusers = () => {
    const [users, setUsers] = useState([]);
    const getUsers = useMemo(() =>
        async () => {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data.data)
        }, []);
    useEffect(() => { getUsers() }, []);
    return users.filter((user) => user.id <= 5);
}

export default useGetusers;