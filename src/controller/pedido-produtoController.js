
const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllPedidoProduto = async (req, res) => {
    try {
        const pedidoproduto= await prisma.pedidoProduto.findMany()
        res.json(pedidoproduto);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createPedidoProduto = async (req, res) => {
    try{
        const pedidoproduto = await prisma.pedidoProduto.create({
            data: req.body
        });
        res.status(201).json(pedidoproduto);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getPedidoProdutoById = async (req, res) => {
    try {
      const { id } = req.params;
      const pedidoproduto = await prisma.pedidoProduto.findUnique({
        where: { id: Number(id) },
    
      });
      if (pedidoproduto) {
        res.json(pedidoproduto);
      } else {
        res.status(200).json({ error: 'pedidoproduto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updatePedidoProduto = async (req, res) => {
    try{
        const { id } = req.params;
        const pedidoproduto = await prisma.pedidoProduto.update({
            where: { id: Number(id) },
        });
        res.status(200).json(pedidoproduto);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deletePedidoProduto = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.pedidoProduto.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "PedidoProduto excluído com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};