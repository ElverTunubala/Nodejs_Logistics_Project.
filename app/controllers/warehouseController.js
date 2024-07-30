import { findAll, save, updateWarehouse } from "../models/warehouseModel.js";

export const getAll = async (_, res) => {
  const warehouses = await findAll();
  console.log(warehouses);
  res.json({ message: "Ok", data: warehouses });
};

export const insert = async (req, res) => {
  const { name, location } = req.body;
  console.log(name, location);
  const warehouseCreated = await save({ name, location });

  res.status(201).send({
    message: "Successfully created",
    data: warehouseCreated,
  });
};

export const update = async (req, res) => {
  const warehouseId = req.params.id;

  const { name, location } = req.body;
  const updatedWarehouse = await updateWarehouse(warehouseId, {
    name,
    location,
  });

  console.log(updatedWarehouse);

  res.status(201).json({
    message: "Updated successfully",
    response: updatedWarehouse,
  });
};
