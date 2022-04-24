import React, { useState, useEffect, useMemo } from 'react';

import { Table } from 'react-bootstrap'
import axios from 'axios';
import serviceApi from '../../untils/serviceApi'

const ListPage = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        try {
            const result = await axios.get(
                "https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?page=1&limit=10"
            )
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
                <td>{element.name}</td>
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
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">createdAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.avatar}</td>
                                        <td><img src={element.avatar} width="50" /></td>
                                        <td>{element.createdAt}</td>
                                        <td><button onClick={() => deleteItem(index)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            )
            }
        </div>

    );
};

export default ListPage;