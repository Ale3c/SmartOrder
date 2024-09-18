const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany()
        res.json(clientes);
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
