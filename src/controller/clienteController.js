const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCliente = async (req, res) => {
    try {
        const cliente = await prisma.cliente.findMany()
        res.json(cliente);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createCliente = async (req, res) => {
    try{
        const cliente = await prisma.cliente.create({
            data: req.body
        });
        res.status(201).json(cliente);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getClienteById = async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await prisma.cliente.findUnique({
        where: { id: Number(id) },
    
      });
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateCliente = async (req, res) => {
    try{
        const { id } = req.params;
        const cliente = await prisma.cliente.update({
            where: { id: Number(id) },
        });
        res.status(404).json(cliente);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};