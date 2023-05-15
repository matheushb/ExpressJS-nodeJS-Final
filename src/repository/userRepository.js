export class UserRepository {
    userDatabase = [];

    getUsers() {
        return this.userDatabase;
    }

    getUserById(id){
        const user = this.userDatabase.find(user => user.id == id);
        if(!user){
            return 'User not found'
        }else{
            return user; 
        }
    }

    addUser(data) {
        this.userDatabase.push(data);
        return `User ${data.email} has been succesfully entered.`
    }

    deleteUserById(userIndex) {
        return this.userDatabase.splice(userIndex, 1);
        
    }
    
    findUserIndexById(id) {
        return this.userDatabase.findIndex(user => user.id == id)
    }

    findUserByEmail(email) {
        return this.userDatabase.find(user => user.email === email)
    }
}