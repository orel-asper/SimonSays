export const images = [
{ name: 'cloud', file_path: require("./main/cloud.json") },
{ name: 'imageloader', file_path: require("./main/imageloader.json") },
{ name: 'loading', file_path: require("./main/loading.json") },
{ name: 'maintenance', file_path: require("./main/maintenance.json") }
]

export const findLottieByName = (id: string) => {
    let imagePath = images.find(itm => itm.name === id)?.file_path
    return imagePath
}