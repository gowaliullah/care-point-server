import path from "path"
import multer from "multer"
// import { V2 as cloudinary } from "cloudinary";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "/uploads"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


const uploadToCloudinary = async(file: Express.Multer.File) => {

}


export const fileUploder = {
    upload
}