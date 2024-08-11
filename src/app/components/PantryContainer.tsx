'use client'
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import db from '@/utils/firebase/firebase';
import React from 'react';
import PantryItem from './PantryItem';

interface Item {
  id: string; // Ensure 'id' is in the Item interface
  name: string;
  item_type: string;
  quantity: number;
}

const PantryContainer = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pantry"));
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data() as Omit<Item, 'id'>; // Ensure 'id' is not in docData
          return {
            id: doc.id, // Explicitly add the document ID
            ...docData, // Spread the rest of the document data
          };
        });
        setItems(data);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    console.log('Updated items:', items);
  }, [items]);

  return (
    <div className='flex flex-row flex-wrap w-full h-full'>
      {items.map((item) => (
        <PantryItem
          key={item.id} // Use the document ID as the key
          id={item.id}
          name={item.name}
          item_category={item.item_type}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}

export default PantryContainer;
