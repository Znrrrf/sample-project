import React, { useEffect, useState } from 'react'
import { Button, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import axios from 'axios';


const Cart = () => {

    const Uid = useSelector((state) => state.users.Uid)
    const [cart, setCart] = useState([])
    const [rQty, setRQty] = useState([])
    const [price, setPrice] = useState(0)
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {

        // console.log(Uid);
        allProductOnCart()

    }, [])


    useEffect(() => {
        let totalPrice = 0

        carts.forEach(ca => {
            const product = price.find(p => p.id === ca.product_id)

            if (product) {
                totalPrice += product.price * ca.request_qty
            }
        })

        setTotal(totalPrice)

    }, [carts, price])

    // useEffect(() => {
    //     console.log(price);
    // },[price])

    const allProductOnCart = async () => {
        const user_id = Uid

        await axios.post('http://localhost:5000/product/product-on-cart', {
            user_id
        })
            .then((result) => {
                console.log(result.data);
                setRQty(result.data.req_qty)
                setCart(result.data.data)
                setPrice(result.data.price)
                setCarts(result.data.result)
            }).catch((err) => {
                console.log(err);
            });
    }

    const allCart = cart.map((el) => {

        // setPrice(el.price)

        return (
            <div style={{ display: 'flex', flexDirection: 'row',height:'150px', backgroundColor:'green', justifyContent:'space-between', alignItems:'center', padding: '20px' }} key={el.id}>
                <Image src={el.product_img} boxSize='100px' />
                <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
                    <h1>product name: {el.product_name}</h1>
                    <p>price: {el.price}</p>
                </div>
                <div>
                    <h1>description:</h1>
                    <p style={{ maxWidth: '500px', backgroundColor: 'red' }}>
                        {el.description}
                    </p>
                </div>
                <p style={{ paddingLeft: '20px', paddingLeft: '20px' }}>stock:{el.qty}</p>
            </div>
        )
    })

    const requestQty = rQty.map((el, index) => {
        return (
            <div key={index + 1} style={{ display: "flex", flexDirection:"row", height:'150px', backgroundColor:'green', justifyContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                    <Button>-</Button>
                    <p>{el}</p>
                    <Button>+</Button>
                </div>
                <Button>delete</Button>
            </div>

        )
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height:'300px', backgroundColor:'blue', justifyContent:'center', }}>
                {allCart}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {requestQty}
            </div>

            {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center', padding:'20px' }}>
                <Image src='https://bit.ly/dan-abramov' boxSize='100px' />
                <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
                    <h1>product name: name</h1>
                    <p>price: price</p>
                </div>
                <div>
                    <h1>description:</h1>
                    <p style={{ maxWidth: '500px', backgroundColor: 'red' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur velit sed suscipit perferendis ipsam odio eveniet dolore optio veritatis!
                    </p>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', paddingLeft:'20px', paddingRight:'20px'}}>
                    <Button>-</Button>
                    <p>1</p>
                    <Button>+</Button>
                    <p>stock: ???</p>
                </div>
                <Button>delete</Button>
            </div> */}

            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <h1>total price:</h1>
                <p>{total}</p>
                <Button>check out</Button>
            </div>

        </div>
    )
}

export default Cart
