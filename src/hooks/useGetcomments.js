import axios from "axios";
import { useEffect, useState } from "react"


const useGetcomments = (userId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (userId) {
            (async () => {
                const data = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + userId);
                setComments(data.data);

            })()
        }
    }, [userId]);

    return comments;
}

export default useGetcomments