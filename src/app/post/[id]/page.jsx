import React from 'react';

// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details page (source content)",
//     keywords: ['post', 'Next Hero post Data (description)']
//   };

export const generateMetadata = async ({params}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/posts/${params?.id}`)
    const postData = await res.json();
    console.log(postData?.title, 'posted details post title');
  return {
    title : {
        absolute: `${postData?.title}`,
    },
    description : postData?.body,
    keywords: postData?.body.split(" ")
  }
}

const postDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/posts/${id}`)
    const data = await res.json();
    return data;
}

const page = async ({ params }) => {
    const detailsData = await postDetails(params.id)
    return (
        <div className="border-2 border-cyan-500 rounded-lg p-2 text-center mx-20 px-4 py-8">
            <h4 className="text-lg font-bold">{detailsData.title}</h4>
            <p>{detailsData.body}</p>
        </div>
    );
};

export default page;