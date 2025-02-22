"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const movieController_1 = require("./controllers/movieController");
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.route('/api/movies').get(movieController_1.getMovies);
router.route('/api/movies/:movieId').get(movieController_1.getMovieById);
router.route('/api/movies').post(movieController_1.createMovie);
router.route('/api/movies/:movieId').delete(movieController_1.deleteMovie);
router.route('/api/movies/:movieId').put(movieController_1.updateMovie);
app.use(express_1.default.json());
app.use(router);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        // ! Before we start express, we connect to the database.
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/moviesdb');
        console.log('Connected to the database! 🔥');
        app.listen(8000, () => {
            console.log('Express API is running on http://localhost:8000');
        });
    });
}
start();
