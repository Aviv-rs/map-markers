import { storageService } from "./storage.service"

export const markerService = {
    query,
    add,
    getEmptyMarker
}

const MARKER_KEY = 'marker'

function query() {
    return storageService.loadFromStorage(MARKER_KEY) || []
}

function add(marker) {
    const markers = query()
    markers.push(marker)
    storageService.saveToStorage(markers)
}

function getEmptyMarker() {
    return {
        position: {
            lat: 32.0749831, lng: 34.9120554
        },
        name: ''
    }
}