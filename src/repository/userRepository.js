export class UserRepository {
    userDatabase = [];

    getUsers() {
        return this.userDatabase;
    }

    getUserById(id){
        return this.userDatabase.find(user => user.id == id)
    }

    addUser(data) {
        this.userDatabase.push(data);
        return `User ${data.firstName} has been succesfully entered.`
    }

}