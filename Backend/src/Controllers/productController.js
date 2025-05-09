import { Product, Category, Supplier } from "../Models/Index.js";
import { Sequelize } from "sequelize";
import { productSchema } from "../Validators/productValidator.js"

export const productController = {

    createOne: async (req, res) => {

        const {error, value} = productSchema.validate(req.body);

        if(error) return res.status(400)
            .json({ message: error.details[0].message }); 

        try {
            const newProduct = await Product.create(value);

            res.status(201).json(newProduct);
            
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur !" })
        }
    },

    getAll: async (req, res) => {

        try {
            const products = await Product.findAll();

            res.status(200).json(products);
            
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur !" })
        }
    },

    getOne: async (req,res) => {

        const productId = req.params.id;

        try {
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json( {message: "Produit non trouvé !"} )
            }

            res.status(200).json(product);

        } catch (error) {
            res.status(500).json({ message: "Erreur serveur !" })
        }
    },
    
    editOne: async (req, res) => {

        const {error, values} = productSchema.validate(req.body);

        if(error) return res.status(400)
            .json({ message: error.details[0].message });

        const productId = req.params.id;

        try { 
            const product = await Product.findByPk(productId); 
    
            if(!product) {
               return res.status(404).json( {message: "Produit non trouvé !"} )
            };

            Object.entries(values).forEach(( [key, value] ) => {
                if (value !== undefined && value !== null && value !== "") {
                    product[key] = value;
                }
            });

            await product.save();
            
            res.status(200).json( {message:"Produit mis à jour avec succès ✅", product} );

        } catch (error) {
            res.status(500).json( {message: "Erreur serveur !"} )
        }
    }, 

    deleteOne: async (req, res) => {

        const productId = req.params.id;

        try {
            const product = await Product.findByPk(productId);

            if(!product) {
                return res.status(404).json( {message: "Produit non trouvé !"} )
             };

             await product.destroy();

             res.status(204).end();
            
        } catch (error) {
            res.status(500).json( {message: "Erreur serveur !"} )
        }
    }
};
