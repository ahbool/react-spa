
import http from '@/common/http'

/**
 * 获取产品列表
 */
export const getProductList = data => http.get("/api/product/list/test", data)


/**
 * 获取产品详情
 */
export const getProductDetail = data => http.get("/api/product/detail/test", data)
