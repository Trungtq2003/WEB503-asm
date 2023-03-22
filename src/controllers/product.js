import Product from "../models/product";

export const create = async(req, res) => {
    try {
        const data = await Product.create(req.body);
        return res.status(201).json({
            message: "them thanh cong",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

export const getAll = async(req, res) => {
    try {
        const data = await Product.find();
        return res.status(201).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

export const get = async(req, res) => {
    try {
        const data = await Product.findByid(req.params.id);
        return res.status(201).json(data)
    } catch (error) {
        
    }
}

export const update = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const remove = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}