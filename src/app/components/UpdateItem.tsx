'use client'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import React from 'react';

import db from "@/utils/firebase/firebase";
import { updateDoc, doc } from "firebase/firestore"; 

type UpdateItemProps = {
    id: string;
    name: string;
    item_type: string;
    quantity: number;
}

const UpdateItem = ({id, name, item_type, quantity}: UpdateItemProps) => {
    const [formValue, setFormValue] = useState({
        name: name,
        item_type: item_type,
        quantity: quantity
    });

    // Handle input changes for all fields
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value, // Update the specific field
        });
    };

    // Handle form submission
    const handleupdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log('Form data updated:', formValue);
        const docRef = doc(db, "pantry", id);
        await updateDoc(docRef, {
            name: formValue.name,
            item_type: formValue.item_type,
            quantity: formValue.quantity
          })
            .then((docRef) => {
              console.log("Document updated:", formValue);
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
    };

    return (
        <form className=' flex flex-col my-5 gap-5 justify-center items-center' onSubmit={handleupdate}>
            <div>
                <TextField
                    id="name"
                    name="name"
                    label="Item Name"
                    variant="outlined"
                    value={formValue.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    id="item_type"
                    name="item_type"
                    label="Item Type"
                    variant="outlined"
                    value={formValue.item_type}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    type="number"
                    value={formValue.quantity}
                    onChange={handleChange}
                />
            </div>
            <Button variant='outlined' size='large' type='submit'>Submit</Button>
        </form>
    );
}

export default UpdateItem;
