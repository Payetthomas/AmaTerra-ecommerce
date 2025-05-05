// src/components/Card/Card.tsx
import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

import { TProduct } from "../../../@types/cardTypes";

export default function CardProduct({id,
  title,
  price,
  description,
  image,
  }: TProduct) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price.toFixed(2)} €</p>
          <Link to={`/produits/${id}`} className={styles.button}>
            Découvrir
          </Link>
      </div>
    </div>
  );
}
