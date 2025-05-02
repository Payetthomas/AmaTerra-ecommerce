import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AdminNewsletter.module.scss"

const AdminNewsletter = () => {

    const [emails, setEmails] = useState([]); 

    const fetchEmails = async () => {

        const result = await axios.get("http://localhost:1818/api/newsletter");
        setEmails(result.data); 
    }; 

    const handleDelete = async (id: number) => {

        await axios.delete(`http://localhost:1818/api/newsletter/${id}`);
        fetchEmails(); 
    }; 

    useEffect(() => {
        fetchEmails(); 
    }, []); 

    return (
      <table className={styles.newsletterTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Date d’inscription</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((entry: any) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.email}</td>
            <td>{new Date(entry.created_at).toLocaleDateString()}</td>
            <td>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(entry.id)}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
)}; 

export default AdminNewsletter; 