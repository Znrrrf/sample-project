import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userId, ProductId } from '../features/users/userData'


const Navbar = () => {

    const dispatch = useDispatch()

    const navigation = useNavigate()

    const handleOut = () => {
        localStorage.removeItem('userData')
        window.location.reload()
    }

    const navigatToCart = async () => {
        // await dispatch(JSON.parse(localStorage.getItem('userData')).id)
        dispatch(userId(JSON.parse(localStorage.getItem('userData')).id))

        navigation('/user-cart')
        // console.log(JSON.parse(localStorage.getItem('userData')).id);
    }

    return (
        // <div style={{backgroundColor:'grey', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
        //     <h1>coba</h1>
        //     <div>
        //         <button>cart</button>
        //         <button>profile</button>
        //     </div>
        // </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'grey'}}>
            <Button variant='ghost'>coba</Button>
            <Stack spacing={4} direction='row' align='center'>
                <Button onClick={() => navigatToCart()}>cart</Button>
                <Button onClick={() => handleOut()}>log out</Button>
            </Stack>
        </div>
    )
}

export default Navbar
