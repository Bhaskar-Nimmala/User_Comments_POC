import useGetcomments from "../hooks/useGetcomments"

const Comments = ({ userId }) => {

    const userComments = useGetcomments(userId)

    return (<div className="container">
        <table className="table table-primary table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Comment id</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {userComments.length ? userComments.map((comment) => <tr>
                    <td>{comment.postId}</td>
                    <td>{comment.id}</td>
                    <td>{comment.body}</td>
                </tr>) : <tr><td colSpan={3}>Please click on the view button to view comments.</td></tr>}
            </tbody>
        </table>
    </div>)
}

export default Comments