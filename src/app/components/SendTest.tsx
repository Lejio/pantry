'use client'
import React from 'react'
import db from '@/utils/firebase/firebase'
import { collection, addDoc } from "firebase/firestore"; 


const SendTest = () => {
    const [value, setValue] = React.useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "pantry"), {
                name: value
            });
            console.log("Document written with ID: ", docRef.id);
            setValue(''); // Clear the form
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new item"
            />
            {/* <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new item"
            />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new item"
            /> */}
            <button type="submit">Add Item</button>
        </form>
    </div>
  )
}

export default SendTest
