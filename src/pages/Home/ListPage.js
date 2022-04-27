// 1 tạo file css DONE
// 2 inline css DONE
// 3 styled component
// 4 module css

import React, { useState, useEffect, useMemo } from 'react';

import { Table } from 'react-bootstrap'
import axios from 'axios';
import serviceApi from '../../untils/serviceApi'
import styled from "styled-components"
import styles from './listPage.module.css';

const TableHeader = styled.th`
    font-size: 14px;
    color:      ${props => props.primary ? props.primary : "red"};
    background-color: ${props => props.bg ? props.bg : "black"};
    
    /* color: ${props => props.primary ? "white" : "palevioletred"}; */
`

const ListPage = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        try {
            const result = await axios.get(
                "https://62405d822aeb48a9af733b3e.mockapi.io/users?page=1&limit=10"
            )

            // https://62405d822aeb48a9af733b3e.mockapi.io/:endpoint
            console.log("result", result)
            console.log("result.data", result.data)
            setLoading(false)
            setData(result.data)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const deleteItem = (key) => {
        const newData = data.slice(0, key).concat(data.slice(key + 1, data.length));
        setData(newData)
    }

    // const response = useMemo(() => deleteItem(item), [data])

    const renderItem = () => {
        const res = data.map((element, index) => {
            <tr key={index}>
                <td>{element.id}</td>
                <td >{element.name}</td>
                <td>{element.avatar}</td>
                <td><img src={element.avatar} width="50" /></td>
                <td>{element.createdAt}</td>
                <td><button onClick={() => deleteItem(index)}>Delete</button></td>
            </tr>
        })
        return res
    }


    return (
        <div className="container">
            {loading ? (
                <h1 className="text-success text-center">Loading ...</h1>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <TableHeader bg="black" primary="brown" scope="col">ID</TableHeader>
                            <TableHeader scope="col">Name</TableHeader>
                            <TableHeader scope="col">Avatar</TableHeader>
                            <TableHeader scope="col">createdAt</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element.id}</td>
                                        <td className="list-page-name">{element.name}</td>
                                        {/* <td>{element.avatar}</td> */}
                                        {/* <td><img src={element.avatar} width="50" /></td> */}
                                        <td><img style={{ width: "120px" }} src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/274118211_1891069687950438_6236156530526191977_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=uJUKhIfZHCQAX_Iv9sY&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-oFQ_SSEeABVfI8f_eWkzx9kXw5dUX_GTY_JtG-zeVPQ&oe=6269B8AB" width="50" /></td>
                                        <td>{element.createdAt}</td>
                                        <td><button className={styles.btn} onClick={() => deleteItem(index)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            )
            }
        </div >

    );
};

export default ListPage;