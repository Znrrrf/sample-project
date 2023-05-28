import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { userId, ProductId } from '../features/users/userData'
import { useDispatch } from 'react-redux'

const Home = () => {

    const [products, setPorudcts] = useState([])
    const navigation = useNavigate()

    const allProduct = () => {

        axios.get("http://localhost:5000/product/").then((result) => { console.log(result.data.result); setPorudcts(result.data.result) }).catch((err) => { console.log(err); });

    }

    useEffect(() => {

        if (!localStorage.getItem("userData") || JSON.parse(localStorage.getItem("userData")) == null) {
            navigation('/login')
        }

        allProduct()


    }, [])

    const dispatch = useDispatch()


    const handleProDetail = async (value) => {

        dispatch(ProductId(value))
        dispatch(userId(JSON.parse(localStorage.getItem('userData')).id))
        navigation("/detile-product")
        // console.log(value);
        // console.log(JSON.parse(localStorage.getItem('userData')).id);
    }

    const productMap = products.map((el) => {
        return (
            <div key={el.id} style={{ width: '300px', backgroundColor: 'grey', margin: "20px" }}>
                <img src={el.product_img} style={{ width: '200px' }} />
                <h3>{el.product_name}</h3>
                <p>price: {el.price}</p>
                <p>{el.description}</p>
                <Button value={el.id} onClick={(e) => handleProDetail(e.target.value)}>detail</Button>
            </div>
        )
    })

    return (
        <div>

            {productMap}

        </div>
    )
}

export default Home
