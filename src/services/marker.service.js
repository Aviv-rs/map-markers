import { storageService } from "./storage.service"

export const markerService = {
    query,
    save,
    getEmptyMarker
}

const MARKER_KEY = 'marker'

function query() {
    const markers = storageService.loadFromStorage(MARKER_KEY) || []
    return Promise.resolve(markers)
}

async function save(marker) {
    const markers = await query()
    markers.push(marker)
    storageService.saveToStorage(MARKER_KEY, markers)
    return Promise.resolve()
}

function getEmptyMarker() {
    return {
        position: {
            lat: 32.0749831, lng: 34.9120554
        },
        name: ''
    }
}