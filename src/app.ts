import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import AuthRouter from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());

passport.use(passportMiddleware);

app.get('/', (req, res) => {
    res.send(`Welcome to my API`);
});

app.use(AuthRouter);
app.use(specialRoutes);

export default app;