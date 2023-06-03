import React from 'react';
import { Button, Image } from '@chakra-ui/react'

const Checkout = () => {
    return (
        <div style={{display:'flex', flexDirection:'row', minHeight:"100vh", marginTop:'100px', justifyContent:'space-between'}}>
            <div>
                <Button>chooose address</Button>
                <div style={{display:'flex', flexDirection:'row', maxWidth:'1000px', margin:'10px', padding:"10px", backgroundColor:'grey'}}>
                    <div>
                        <Image src='https://bit.ly/dan-abramov' boxSize='200px' />
                        <h1>product name:</h1>
                        <p>name</p>
                        <h2>price:</h2>
                        <p>20000</p>
                    </div>
                    <div>
                        <p style={{maxWidth:'500px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quas nulla harum tempore quisquam, voluptatem quo architecto odio corporis!</p>
                    </div>
                    <div>
                        <Button>shipping metode</Button>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'grey', width:'400px'}}>
                <h1>total price:</h1>
                <p>price</p>
                <Button>buy</Button>
            </div>
        </div>
    )
}

export default Checkout
