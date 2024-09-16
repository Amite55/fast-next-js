import Link from "next/link";

export const metadata = {
    title:{
        absolute: 'Post'
    },
    description: "Post page",
    keywords: ['post', 'Next Hero post Data (description)']
  };


const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/posts`)
    const data = await res.json();
    return data;
}

const PostPage = async () => {
    const postData = await getPost();
    console.log(postData);
    return (
        <div className="text-center">
            <h1 className="text-xl mx-auto font-bold text-red-200"> Post page </h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    postData.map((post) => {
                        return (
                            <div key={post.id} className="border-2 border-cyan-500 rounded-lg p-2">
                                <h4 className="text-lg font-bold">{post.title}</h4>
                                <p>{post.body}</p>
                                <button className="bg-cyan-800 p-1 rounded-lg">
                                    <Link href={`/post/${post.id}`}>
                                    See Details
                                    </Link>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PostPage;