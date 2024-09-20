const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCategoria = async (req, res) => {
    try {
        const categoria = await prisma.categoria.findMany()
        res.json(categoria);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createCategoria = async (req, res) => {
    try{
        const categoria = await prisma.categoria.create({
            data: req.body
        });
        res.status(201).json(categoria);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await prisma.categoria.findUnique({
        where: { id: Number(id) },
    
      });
      if (categoria) {
        res.json(categoria);
      } else {
        res.status(200).json({ error: 'Categoria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateCategoria = async (req, res) => {
    try{
        const { id } = req.params;
        const categoria = await prisma.categoria.update({
            where: { id: Number(id) },
        });
        res.status(200).json(categoria);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteCategoria = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.categoria.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Categoria excluída com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};