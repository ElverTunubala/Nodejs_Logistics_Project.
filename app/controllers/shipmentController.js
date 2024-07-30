import { findAll, save, updateShipment } from "../models/shipmentModel.js";

export const getAll = async (_,res) => {
    const shipments = await findAll();
    res.json({message: "Ok", data: shipments})
};

export const insert = async (req, res) => {
    const { item , quantity } = req.body;
    console.log(item, quantity);
    const shipmentCreated = await save({item, quantity});

    res.status(201).send({
        message: "Successfully created",
        data: shipmentCreated
    });
};

export const update = async (req, res) => {
    const shipmentId = req.params.id;
    console.log(req.params);
    const { item, quantity} = req.body;
    const updatedShipment= await updateShipment(shipmentId, {item, quantity});
    res.status(204).json({message: "Updated successfully", response: updatedShipment});
};