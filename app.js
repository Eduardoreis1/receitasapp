const express = required('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({
        mensagem: 'Rota do tipo GET com endereço'
    })
})

app.lisen(5000, () => {
    console.log('Servidor rodando na poprta 5000');
})