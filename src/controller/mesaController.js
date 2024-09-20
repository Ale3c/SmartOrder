const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMesa = async (req, res) => {
    try {
        const mesa = await prisma.mesa.findMany()
        res.json(mesa);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createMesa = async (req, res) => {
    try{
        const mesa = await prisma.mesa.create({
            data: req.body
        });
        res.status(201).json(mesa);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getMesaById = async (req, res) => {
    try {
      const { id } = req.params;
      const mesa = await prisma.mesa.findUnique({
        where: { id: Number(id) },
    
      });
      if (mesa) {
        res.json(mesa);
      } else {
        res.status(200).json({ error: 'Mesa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateMesa = async (req, res) => {
    try{
        const { id } = req.params;
        const mesa = await prisma.mesa.update({
            where: { id: Number(id) },
        });
        res.status(200).json(mesa);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteMesa = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.mesa.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Mesa excluída com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};