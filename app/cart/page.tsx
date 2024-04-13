'use client'
import React from 'react'

import {
  Card,
  Box,
  Typography,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import { useCart } from '@/app/context';
const CartPage: React.FC = () => {
  const { cart } = useCart();
  console.log(cart)
  return (
    <CardContent>
      {
        cart.map((course) => (
          <Box className="flex flex-col">
      <Typography variant="h5" component="h1" textAlign="center">
        {course.title}
      </Typography>
      <Typography variant="h5" component="h1" textAlign="center">
        ${course.fee}
      </Typography>
      <Typography variant="h6" component="p">
        {course.description}
      </Typography>
      <Button
        
        variant="outlined"
        size="small"
        color="secondary"
        sx={{ width: "5rem", position: "absolute" }}
      >
        Remove{' '}
      </Button>
    </Box>
        ))
      }
    
  </CardContent>
  )
}
export default CartPage;