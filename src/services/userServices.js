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
        if(!this.userRepository.findUserByEmail(data.email)){
            data.id = uuidv4();
            return this.userRepository.addUser(data);
        }else{
            return `User with the e-mail ${data.email} already registered.`
        }
       }

    editUserById(tempId, data) {
        const { id } = tempId;
        const user = this.getUserById(id);
        const { firstName, lastName, age, email, gender } = data;
        
        if(firstName) user.firstName = firstName; 
        if(lastName) user.lastName = lastName;
        if(age) user.age = age;
        if(email) user.email = email;
        if(gender) user.gender = gender;
        return user;
    }

    deleteUserById(userIndex){
        if(userIndex !== -1){
            return this.userRepository.deleteUserById(userIndex);
        }else{
            return 'User not found';
        }
    }

    findUserIndexById(id) {
        return this.userRepository.findUserIndexById(id);
    }

} 