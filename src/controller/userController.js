export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getUsers() {
        return this.userService.getUsers();
    }

    getUserById(tempId) {
        const { id } = tempId; 
        return this.userService.getUserById(id);
    }

    addUser(data) {
        return this.userService.addUser(data);
    }

    editUserById(tempId, data) {
        const user = this.getUserById(tempId)
        const { firstName, lastName, age, gender } = data;
        return this.userService.editUserById(user, firstName, lastName, age, gender);
    }

    deleteUserById(req, res){

    }
}