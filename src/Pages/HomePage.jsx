import axios from "axios";
import React, { useEffect, useState } from "react";
import { POSTS_URL } from "../Constants/api";
import s from "../App/App.module.scss";

const HomePage = () => {
    const [data, setData] = useState([]);
    console.log(data);

    const getData = async () => {
        const response = await axios.get(POSTS_URL);
        setData(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {data.map((el, id) => {
                return (
                    <div key={id} className={s.item}>
                        <p>
                            {id}. {el.title}
                        </p>
                        <span>{el.body}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default HomePage;
