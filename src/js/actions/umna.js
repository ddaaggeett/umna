export function setSpreadsheetData(data) {
    return {
        type: 'SET_SPREADSHEET_DATA',
        data
    }
}
export function goTo(page) {
    return {
        type: 'GO_TO',
        page
    }
}
