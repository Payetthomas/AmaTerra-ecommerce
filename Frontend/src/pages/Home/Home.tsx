import CardProduct from "../../components/Cards/Card/Card";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { TProduct } from "../../@types/cardTypes.ts";


const Home = () => {

      const [products, setProducts] = useState<TProduct[]>([]);

      useEffect(() => {
         const fetchProducts = async () => {
           try {
             const res = await axios.get("http://localhost:1818/api/product");
             setProducts(res.data);
           } catch (error) {
             console.error("Erreur de chargement des produits :", error);
           }
         };
     
         fetchProducts();
       }, []);

   return ( 
         <div className="home-page">

            <div className="home-image"></div>

            <div className="home-content">

               <h2 className="home-content--title">Les nouveautés</h2>

               <div className="home-card">

                  {products.map((product: TProduct) => (
                     <CardProduct key={product.id} {...product}
                     />
                  ))}

                  
               </div>

               <h2 className="home-content--title">Les promotions</h2>

               <div className="home-card">

                 
               </div>
            </div>


      </div>
   )};        


export default Home; 