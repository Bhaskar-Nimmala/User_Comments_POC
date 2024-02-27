import useGetusers from "../hooks/useGetusers"
const Usertable = ({ fetchId }) => {

    const users = useGetusers()
    console.log(users);

    return (<div className="container">
        <table className="table table-primary table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button type="button" className="btn btn-primary" id={user.id} onClick={(e) => fetchId(e.target.id)}>View</button></td>
                </tr>)}

            </tbody>
        </table>
    </div>)
}

export default Usertable