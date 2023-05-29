import React, { useEffect, useState } from 'react';
import { Button, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import axios from 'axios';

const DetileProduct = () => {

    const Uid = useSelector((state) => state.users.Uid)
    const Pid = useSelector((state) => state.users.Pid)
    const [product, setProduct] = useState([])

    useEffect(() => {

        getOneProduct(Pid)

    },[])

    const getOneProduct = async (id) => {

        await axios.post('http://localhost:5000/product/product-detail', {
            id
        })
        .then((result) => {
            console.log(result);
            setProduct(result.data.result)
        }).catch((err) => {
            console.log(err);
        });

    }

    const handleAddToCart = async ( ) => {

        const product_id = Pid
        const user_id = Uid
        // console.log(product_id, user_id);

        await axios.post('http://localhost:5000/product/cart',{
            product_id,
            user_id
        })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

    }
    // console.log(`ini product id ${Uid}`);
    // console.log(Pid);

    return (
        <div style={{display:'flex', flexDirection:"row", justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
            <div>
                <Image src={product.product_img} boxSize="200px" />
                <h2>product name: <p>{product.product_name}</p></h2>
                <h2>price: {product.price}</h2>
                <Button onClick={() => handleAddToCart()}>add to cart</Button>
            </div>
            <div>{product.description}</div>
        </div>
    )
}

export default DetileProduct
