import { v4 as uuidv4 } from 'uuid';

export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getUsers() {
        return this.userRepository.getUsers();
    }

    getUserById(id) {
        return this.userRepository.getUserById(id);
    }

    addUser(data) {
        data.id = uuidv4();
        return this.userRepository.addUser(data);
    }

    editUserById(user, firstName, lastName, age, gender) {
        if(firstName) user.firstName = firstName; 
        if(lastName) user.lastName = lastName;
        if(age) user.age = age;
        if(gender) user.gender = lastName;
        return user;

    }

    deleteUserById(req, res){

    }

}