import { observable } from 'mobx'

class UserStore {
    @observable title = '-- user store --'
}

export default new UserStore()
