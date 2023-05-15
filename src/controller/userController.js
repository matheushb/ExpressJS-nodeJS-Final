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
        return this.userService.editUserById(tempId, data);
    }

    deleteUserById(tempId){
        const userIndex = this.userService.findUserIndexById(tempId.id);
        return this.userService.deleteUserById(userIndex)
    }
}