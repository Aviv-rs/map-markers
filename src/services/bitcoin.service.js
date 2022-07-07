import axios from 'axios'
import { storageService } from '@/services/storage.service.js'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTransaction,
}
function getRate(coins) {
    return _getRateInfo(coins)
}

function getMarketPrice() {
    return _getMarketInfo()
}

function getTransaction() {
    return _getTransactionInfo()
}

async function _getRateInfo(coins) {
    let info = storageService.loadFromStorage('rateInfo')
    if (!info) {
        const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
        const res = await axios.get(url)
        info = res.data
        storageService.saveToStorage('rateInfo', info)
    }
    return info
}

async function _getMarketInfo() {
    let info = storageService.loadFromStorage('marketInfo')
    if (!info) {
        // should be user coins to btc
        const url = `https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true`
        const res = await axios.get(url)
        info = res.data.values
        storageService.saveToStorage('marketInfo', info)
    }
    return info
}
async function _getTransactionInfo() {
    let info = storageService.loadFromStorage('transactionInfo')
    if (!info) {
        const url = `https://api.blockchain.info/charts/trade-volume?timespan=30days&format=json&cors=true`
        const res = await axios.get(url)
        info = res.data.values
        storageService.saveToStorage('transactionInfo', info)
    }
    return info
}
