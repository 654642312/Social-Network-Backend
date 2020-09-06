import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config'

const dboptions:ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(config.DB.URI, dboptions);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongodb connection stablished');
});

connection.on('err', err => {
    console.log(err);
    process.exit(0);
});