import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { updateCourse } from '@/app/Data/Course';

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  id: string;
  title: string;
  fee: number;
  description: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  handleClose,
  id,
  title,
  fee,
  description,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedFee, setUpdatedFee] = useState(fee);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleCloseModal = () => {
    const updateData = {
      title: updatedTitle,
      fee: updatedFee,
      description: updatedDescription
    }
    updateCourse(id,updateData).then((res: any) => {  
      handleClose(); 
  
});
   

    
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2 id="modal-modal-title">Edit Course</h2>
        <TextField
          label="Title"
          variant="outlined"
          value={updatedTitle}
          fullWidth
          margin="normal"
          onChange={(e) => {
            setUpdatedTitle(e.target.value);
          }}
        />
        <TextField
          label="Fee"
          variant="outlined"
          value={updatedFee.toString()}
          fullWidth
          margin="normal"
          onChange={(e) => {
            setUpdatedFee(parseFloat(e.target.value));
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={updatedDescription}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(e) => {
            setUpdatedDescription(e.target.value);
          }}
        />
        <Button variant="outlined" onClick={handleCloseModal}>EDIT</Button>
      </div>
    </Modal>
  );
};

export default CustomModal;