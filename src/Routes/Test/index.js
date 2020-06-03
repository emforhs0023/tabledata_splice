import React,{ useState, useEffect } from "react"


const Test = () => {

    const [aa, as] = useState([
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
    ])

    useEffect(() => {
        const temp = [...aa]
        
        const postIndex = temp.findIndex((v) => v.name === "Jim Green")
        const post = temp[postIndex];
        console.log(post.key)
        // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
    }, [])    

    const on = () => {
        // case LIKE_POST_SUCCESS: {
        //     const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        //     const post = state.mainPosts[postIndex];
        //     const Likers = [{ id: action.data.userId }, ...post.Likers];
        //     const mainPosts = [...state.mainPosts];
        //     mainPosts[postIndex] = { ...post, Likers };
        //     return {
        //         ...state,
        //         mainPosts,
        //     };
        // }
        // case LIKE_POST_FAILURE: {
        //     return {
        //         ...state,
        //     };
        // }
        // case UNLIKE_POST_REQUEST: {
        //     return {
        //         ...state,
        //     };
        // }
        // case UNLIKE_POST_SUCCESS: {
        //     const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        //     const post = state.mainPosts[postIndex];
        //     const Likers = post.Likers.filter(v => v.id !== action.data.userId);
        //     const mainPosts = [...state.mainPosts];
        //     mainPosts[postIndex] = { ...post, Likers };
        //     return {
        //         ...state,
        //         mainPosts,
        //     };
        // }
    }
    return (
        <>
            <div style={{margin:"10px"}}>
                {aa.map((data) => 
                    <div key={data.key} style={{ border:"1px solid black", marginTop:"10px" }}>

                        <div>{data.key}</div>
                        <div>{data.name}</div>
                        <div>{data.age}</div>
                        <div>{data.address}</div>

                    </div>
                )}	
                <button onClick={on}>
                    상승
                </button>
            </div>
            
        </>
    )
}

export default Test