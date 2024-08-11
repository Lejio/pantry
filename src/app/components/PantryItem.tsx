"use client";
import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "@/utils/firebase/firebase";
import UpdateItem from "./UpdateItem";

type PantryItemProps = {
  name: string;
  id: string;
  item_category: string;
  quantity: number;
};

const PantryItem = ({ id, name, item_category, quantity }: PantryItemProps) => {
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [formValue, setFormValue] = React.useState({
    name: "",
    item_type: "",
    quantity: 0,
  });
  const deleteItem = async () => {
    console.log(id);
    try {
      await deleteDoc(doc(db, "pantry", id));
      console.log(`Document with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="text-2xl">{name}</h1>
      <p>{item_category}</p>
      <p>{quantity}</p>
      <Button onClick={deleteItem} variant="outlined">
        Delete
      </Button>
      <Button onClick={handleOpenEdit} variant="outlined">
        Edit
      </Button>
      <Modal open={openEdit} onClose={handleCloseEdit}>
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
            bgcolor: "#ffffff",
            borderRadius: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex flex-col">
            <h2 className=" text-center">Edit Item</h2>
            <UpdateItem id={id} name={name} item_type={item_category} quantity={quantity}/>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default PantryItem;
