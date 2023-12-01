import { useEffect, useState } from "react";
interface Data {
    name: string
    email: string
    city: string
    number: number
}]
}
export const UsersDetails = () => {
    const [data, setData] = useState < Data > ()
    const fetchJson = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data);
            }).catch((e: Error) => {
                console.log(e.message);
            });
    }
    useEffect(() => {
        fetchJson()
    }, [])
    return (
        <>
            <div>
                <div>Name : {data?.name}</div>
                <div>Email : {data?.email}</div>
                <div>City : {data?.city}</div>
                <div><label>Country :</label>
                    <select>
                        {data?.data?.map((data) => {
                            return <option key={data.name} value={data.id}>{data.name}</option>
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);