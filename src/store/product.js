import { observable } from 'mobx'
import api from '@/api'

const ProductStore = observable({
    title: '-- product store --',
    list: [],

    getList(){
        api.product.getProductList().then((res)=>{
            this.list = res.list
        })
    }
})

export default ProductStore
