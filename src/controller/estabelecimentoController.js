const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllEstabelecimento = async (req, res) => {
    try {
        const estabelecimento = await prisma.estabelecimento.findMany()
        res.json(estabelecimento);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

exports.createEstabelecimento = async (req, res) => {
    try{
        const estabelecimento = await prisma.estabelecimento.create({
            data: req.body
        });
        res.status(201).json(estabelecimento);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getEstabelecimentoById = async (req, res) => {
    try {
      const { id } = req.params;
      const estabelecimento = await prisma.estabelecimento.findUnique({
        where: { id: Number(id) },
    
      });
      if (estabelecimento) {
        res.json(estabelecimento);
      } else {
        res.status(404).json({ error: 'Estabelecimento não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateEstabelecimento = async (req, res) => {
    try{
        const { id } = req.params;
        const {endereco, telefone, horario, email, senha} = req.body
        const estabelecimento = await prisma.estabelecimento.update({
            where: { id: Number(id) },
            data: {
              endereco,
              telefone,
              horario,
              email,
              senha
            }
        });
        res.status(200).json(estabelecimento);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteEstabelecimento = async (req, res) => {
  try{
      const { id } = req.params;
    
      await prisma.estabelecimento.delete({
          where: { id: Number(id) },
      });
      res.status(200).json({menssage: "Estabelecimento excluído com sucesso!"});
  }catch(error){
      res.status(500).json({error: error.message});
  }
};


