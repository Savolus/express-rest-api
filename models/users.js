/**
 * Class of Users to imitate database communication
 */
export default class Users {
    constructor() {
        this.users = [] // array of users
        this.id = 0 // imitation of generating numerical id without uuid

        // creating few users for debugging
        this.create({ name: 'Some Name', email: 'some@gmail.com' })
        this.create({ name: 'Just Name', email: 'just@gmail.com' })
        this.create({ name: 'Good Name', email: 'good@gmail.com' })
        this.create({ name: 'Bad Name', email: 'bad@gmail.com' })
    }

    /**
     * Get user from the array of users
     * @param {number} id id of the user
     * @return {{}} return user
     */
    get(id) {
        return this.users.find(user => user.id === +id)
    }

    /**
     * Get all user form array of users
     * @return {[]} return all users
     */
    getAll() {
        return this.users
    }

    /**
     * Create user in the array of users
     * @param {{}} user user to be added to array of users
     */
    create(user) {
        this.users.push({ id: this.id, ...user })
        this.id++
    }

    /**
     * Update user by his id with passed data
     * @param {number} id id of the user to be updated
     * @param {{}} data data to be updated in the user
     */
    update(id, data) {
        this.users.forEach((user, index, self) => {
            if (user.id === +id) {
                self[index] = {...user, ...data}
            }
        })
    }

    /**
     * Delete user by its id
     * @param {number} id id of the user to be deleted
     */
    delete(id) {
        this.users = this.users.filter(user => user.id !== +id)
    }

    /**
     * Checks whether user with this id exists or not
     * @param {number} id id of the checked user
     * @return {boolean} true for exist false fot not exist
     */
    contains(id) {
        return this.users.some(user => user.id === +id)
    }
}

