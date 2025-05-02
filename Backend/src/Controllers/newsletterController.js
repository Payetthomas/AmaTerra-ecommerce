import Newsletter from "../Models/newsletter.js";

export const newsletterController = {

    createOne: async (req, res) => {

        const email = req.body.email?.toLowerCase(); 



        if(!email) {
            return res.status(400).json({Error: "email invalide !"});
        }

        try {
            const existing = await Newsletter.findOne({ where: {email} });

            if(existing){
                return res.status(409).json({message: "Email déjà inscrit"});
            }

            await Newsletter.create({ email });
            res.status(201).json({ message: "Inscription réussie" });
        
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur serveur" });
        }
    }
}