import React, { FC } from 'react';
import { Box, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModalProps {
    children: JSX.Element[] | JSX.Element | undefined;
    open: boolean;
}

const CustomModal: FC<IModalProps> = ({ children, open }) => {
  return (
    <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            {children}
        </Box>
    </Modal>
  );
};

export default CustomModal;
