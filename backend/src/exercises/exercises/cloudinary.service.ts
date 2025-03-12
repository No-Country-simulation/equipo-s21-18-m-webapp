import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from '../exercises/cloudinary.response';
import * as streamifier from 'streamifier';
import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { Express } from 'express';


@Injectable()
export class CloudinaryService {
    uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse> {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {folder: 'Exercises'},
                (error, result) => {
                    if(error) return reject(error);
                    resolve(result);
                },
            )
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
            console.log(uploadStream);
        });
    }
}
