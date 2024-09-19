const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllPedido = async (req, res) => {
    try {
        const pedido = await prisma.pedido.findMany()
        res.json(pedido);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createPedido = async (req, res) => {
    try{
        const pedido = await prisma.pedido.create({
            data: req.body
        });
        res.status(201).json(pedido);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getPedidoById = async (req, res) => {
    try {
      const { id } = req.params;
      const pedido = await prisma.pedido.findUnique({
        where: { id: Number(id) },
    
      });
      if (pedido) {
        res.json(pedido);
      } else {
        res.status(200).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updatePedido = async (req, res) => {
    try{
        const { id } = req.params;
        const pedido = await prisma.pedido.update({
            where: { id: Number(id) },
        });
        res.status(404).json(pedido);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deletePedido = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.pedido.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Pedido excluído com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};