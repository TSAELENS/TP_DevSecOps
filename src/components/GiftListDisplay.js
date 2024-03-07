import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GiftListDisplay = () => {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        fetchGifts();
    }, []);

    const fetchGifts = async () => {
        try {
            const response = await axios.get('/gifts');
            setGifts(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des cadeaux:', error);
        }
    };

    const addGift = async (gift) => {
        try {
            await axios.post('/gifts', gift);
            fetchGifts(); // Rafraîchir la liste après ajout
        } catch (error) {
            console.error("Erreur lors de l'ajout du cadeau:", error);
        }
    };

    const updateGift = async (id, gift) => {
        try {
            await axios.put(`/gifts/${id}`, gift);
            fetchGifts(); // Rafraîchir la liste après mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour du cadeau:', error);
        }
    };

    const deleteGift = async (id) => {
        try {
            await axios.delete(`/gifts/${id}`);
            fetchGifts(); // Rafraîchir la liste après suppression
        } catch (error) {
            console.error('Erreur lors de la suppression du cadeau:', error);
        }
    };

    return (
        <div>
            <h1>Liste des cadeaux</h1>
            <ul>
                {gifts.map(gift => (
                    <li key={gift.id}>
                        {gift.name} - {gift.price}€
                        <button onClick={() => deleteGift(gift.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GiftListDisplay;
