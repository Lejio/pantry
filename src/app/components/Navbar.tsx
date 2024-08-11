'use client'
import React from 'react'
import { Button, Modal, Box } from '@mui/material'
import AddItem from './AddItem'

const Navbar = () => {
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

  return (
    <div className=' rounded-lg'>
    <Button onClick={handleOpenAdd}>Add</Button>
    <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        >
        <Box 
        height={400}
        width={400}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"

        gap={4}
        p={2}
        sx={{ 
            bgcolor: '#ffffff', 
            borderRadius: 2, 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)'
        }}
        >  
            <div className='flex flex-col'>
                <h2 className=' text-center'>Add Item</h2>
                <AddItem />
            </div>
        </Box>
    </Modal>
    </div>
  )
}

export default Navbar
