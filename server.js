const app = require('./index.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
