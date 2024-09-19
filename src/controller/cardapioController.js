const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCardapio = async (req, res) => {
    try {
        const cardapio = await prisma.cardapio.findMany()
        res.json(cardapio);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createCardapio = async (req, res) => {
    try{
        const cardapio = await prisma.cardapio.create({
            data: req.body
        });
        res.status(201).json(cliente);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getCardapioById = async (req, res) => {
    try {
      const { id } = req.params;
      const cardapio = await prisma.cardapio.findUnique({
        where: { id: Number(id) },
    
      });
      if (cardapio) {
        res.json(cardapio);
      } else {
        res.status(404).json({ error: 'Cardápio não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateCardapio = async (req, res) => {
    try{
        const { id } = req.params;
        const cardapio = await prisma.cardapio.update({
            where: { id: Number(id) },
        });
        res.status(404).json(cardapio);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteCardapio = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.cardapio.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Cardapio excluído com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};