import { useEffect, useState } from 'react';

const apiUser = 'https://reqres.in/api/users?page=2';

export default function ApiUser() {
    const [data, setData] = useState({});

    // call api
    useEffect(() => {
        fetch(apiUser)
            .then((response) => response.json())
            .then((data) => setData(data.data));
    }, []);

    return { data };
}
