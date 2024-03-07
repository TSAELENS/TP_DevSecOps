// Création d'une liste
exports.createList = async (req, res) => {
  const { name, description, gifts } = req.body;
  try {
      const [result] = await req.db.execute('INSERT INTO gift_lists (name, description, gifts) VALUES (?, ?, ?)', [name, description, JSON.stringify(gifts)]);
      res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
      res.status(400).json({ error: error.toString() });
  }
};

// Mise à jour d'une liste
exports.updateList = async (req, res) => {
    const { id, name, description, gifts } = req.body;
    try {
        await req.db.execute('UPDATE gift_lists SET name = ?, description = ?, gifts = ? WHERE id = ?', [name, description, JSON.stringify(gifts), id]);
        res.status(200).json({ message: 'List updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
};

// Suppression d'une liste
exports.deleteList = async (req, res) => {
    const { id } = req.params;
    try {
        await req.db.execute('DELETE FROM gift_lists WHERE id = ?', [id]);
        res.status(200).json({ message: 'List deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
};

// Récupération de toutes les listes
exports.getAllLists = async (req, res) => {
    try {
        const [lists] = await req.db.execute('SELECT * FROM gift_lists');
        res.status(200).json(lists);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
};

// Récupération d'une liste spécifique
exports.getListById = async (req, res) => {
    const { id } = req.params;
    try {
        const [list] = await req.db.execute('SELECT * FROM gift_lists WHERE id = ?', [id]);
        res.status(200).json(list[0]);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
};