import app from './app.js'
import { sequelize } from './database/database.js';


async function main(){
    try {
        await sequelize.sync();
        app.listen(3000);
        console.log('Server is running on port 3000');
    } catch (error) {
        console.log('Cannot connect to server')
    }
}

main();