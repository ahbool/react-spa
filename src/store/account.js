import { observable } from 'mobx'

class AccountStore {
    @observable title = '-- account store --'
}

export default new AccountStore()
