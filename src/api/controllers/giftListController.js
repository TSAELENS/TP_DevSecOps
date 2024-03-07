exports.createList = async (req, res) => {
  const { name, description, gifts } = req.body;
  try {
      const [result] = await req.db.execute('INSERT INTO gift_lists (name, description, gifts) VALUES (?, ?, ?)', [name, description, JSON.stringify(gifts)]);
      res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
      res.status(400).json({ error: error.toString() });
  }
};
