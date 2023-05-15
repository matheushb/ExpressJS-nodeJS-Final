import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controller/userController.js'
import { UserRepository} from './repository/userRepository.js'
import { UserService } from './services/userServices.js'

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res) => res.send(userController.getUsers()));

router.get('/:id', (req, res) => res.send(userController.getUserById(req.params)));

router.post('/', (req, res) => res.send(userController.addUser(req.body)));

router.patch('/:id', (req, res) => res.send(userController.editUserById(req.params, req.body)));

router.delete('/:id', (req, res) => userController.deleteUserById(req.params))



export default router;