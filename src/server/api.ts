const webApiHost = 'http://120.79.190.249:8010'

const cgi = {
    login: webApiHost + '/users/login', // 登录
    getInventory: webApiHost + '/inventoryManagerIndex/getInventoryManagerIndexListPage', // 分页获取库存调整
}

export default cgi