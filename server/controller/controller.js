import mongoose from "mongoose";
import Item from "../model/model.js";

export const create = async(req,res)=>{
    try{
        const data = new Item(req.body);
        if(!data){
        return res.status(404).json({
            msg: "data not found"
        });
        }
        await data.save()
        res.status(200).json({
            msg: "item created"
        })
    }
    catch (err){
        res.status(500).json({
            error: err
        })
    }
}

export const getAll = async(req, res) =>{
    try {

        const ItemData = await Item.find();
        if(!ItemData){
            return res.status(404).json({msg:"Item data not found"});
        }
        res.status(200).json(ItemData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const ItemExist = await Item.findById(id);
        if(!ItemExist){
            return res.status(404).json({msg: "Item not found"});
        }
        res.status(200).json(ItemExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const ItemExist = await Item.findById(id);
        if(!ItemExist){
            return res.status(401).json({msg:"Item not found"});
        }

        const updatedData = await Item.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Item updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteItem = async(req, res) =>{
    try {

        const id = req.params.id;
        const ItemExist = await Item.findById(id);
        if(!ItemExist){
            return res.status(404).json({msg: "Item not exist"});
        }
        await Item.findByIdAndDelete(id);
        res.status(200).json({msg: "Item deleted successfully"});
        
    } catch (error) {

        res.status(500).json({error: error});
        
    }
}