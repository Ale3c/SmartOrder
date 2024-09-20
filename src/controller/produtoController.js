const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllProduto = async (req, res) => {
    try {
        const produto= await prisma.produto.findMany()
        res.json(produto);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createProduto = async (req, res) => {
    try{
        const produto = await prisma.produto.create({
            data: req.body
        });
        res.status(201).json(produto);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getProdutoById = async (req, res) => {
    try {
      const { id } = req.params;
      const produto = await prisma.produto.findUnique({
        where: { id: Number(id) },
    
      });
      if (produto) {
        res.json(produto);
      } else {
        res.status(200).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateProduto = async (req, res) => {
    try{
        const { id } = req.params;
        const produto = await prisma.produto.update({
            where: { id: Number(id) },
        });
        res.status(200).json(produto);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteProduto = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.produto.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Produto excluído com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};