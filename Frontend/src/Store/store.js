import axios from "axios";
export const login = async (email, password) => {
    try {

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.post(
            "http://localhost:5000/api/user/login",
            { email, password },
            config
        );
        console.log(data)
        localStorage.setItem("userInfo", JSON.stringify(data));
        return true;
    } catch (error) {
        return false
    }
};

export const postBlog = async (data) => {
    console.log("Data in store, " + data)
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    console.log(userInfo.token);
    data.author=userInfo.name;

    await axios.post(
        'http://localhost:5000/api/blog/add_blog',
        data,
        {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
    ).then(res => {
        console.log(res);
    }
    ).catch(e => {
        console.log(e);
    })
}

export const fetchBlog = async () => {
    
   await axios.get(
        'http://localhost:5000/api/blog/fetch_blog',
    ).then(res => {
        return res.data;
    }
    ).catch(e => {
        console.log(e);
    })
}