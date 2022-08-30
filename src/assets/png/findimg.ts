export const images = [

]

export const findImgByName = (id: string) => {
    let imagePath = images.find(itm => itm.name === id)?.file_path
    if (imagePath) {
        return imagePath
    } else return new Error('Image not found')
}