import * as React from 'react';
import { Modal, Box, Fade, Typography, Button, Backdrop } from '@mui/material';
import './BasketModal.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

const BasketModal = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            // Ajustes mediante slots
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 200,
              },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <div className='HeaderModal'>
                        <p>¿Seguro?</p>
                        <button className="closeModal" id="closeModal" onClick={onClose}>
                        <i className="fa-solid fa-circle-xmark"></i>
            </button>
                    </div>
                        <div className="ModalTextContainer">
                            <span>¿Estás seguro de que deseas eliminar todos los productos de la canasta?</span>
                        </div>
                    <div className="btnContainerModal">
                    <button className='btnCancelDel' onClick={onClose}><span>Cancelar</span></button>
                        <button className='btnConfirmDel' onClick={onConfirm}><span>Confirmar</span></button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BasketModal;