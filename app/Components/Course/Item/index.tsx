'use client';
import { CourseState } from '@/app/Types/Course.type';
import {
  Card,
  Box,
  Typography,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { LoadImage } from '@/app/Types/Image..type';
import CustomModal from '../../CustomModal';
import { updateCourse } from '@/app/Data/Course';
import { useCart } from '@/app/context';

interface ItemProps {
  course: CourseState;
}
const Item: React.FC<ItemProps> = ({ course }) => {
  const [open, setOpen] = useState(false);
 
  
  const { addToCart } = useCart();

  const handleAddToCart = (product:any) => {
    addToCart(product);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };

  return (
    <Card>
      <Box className="md:h-50 h-60 relative rounded" component="section">
        <Image
          loader={LoadImage}
          src="https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png"
          alt={'image'}
          fill
          style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
          priority
          sizes="(max-width: 1200px) 100vw"
        />
        <CardActions>
          <Button
            onClick={handleOpen}
            variant="contained"
            size="large"
            color="primary"
          >
            Update{' '}
          </Button>
          <button onClick={handleOpen}>Open Modal</button>
          <CustomModal
            open={open}
            handleClose={handleClose}
            id={course._id}
            title={course.title}
            fee={course.fee}
            description={course.description}
          />
        </CardActions>
      </Box>
      {/* Detail */}
      <CardContent>
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
            onClick={handleAddToCart}
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ width: "5rem", position: "absolute" }}
          >
            Add To Cart{' '}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};


export default Item;
