
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path'


export const downloadFromS3 = async(file_key : string) => {
     
    try {
        
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        });

        const s3 = new AWS.S3({
            params : {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
            },
            region : "ap-south-1"
        });

        const params = {
            Bucket : process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
            Key : file_key,
        }


      const tmpDir = '/tmp' // Update this to the appropriate directory if needed

      // Check if the directory exists, if not, create it
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir)
      }

      // const file_name = `/tmp/elliott${Date.now().toString()}.pdf`;
      const file_name = path.join(
        tmpDir,
        `chatpdf-${Date.now().toString()}.pdf`
      )
          
        const obj = await s3.getObject(params).promise()

        fs.writeFileSync(file_name , obj.Body as Buffer)
        return file_name;

    } catch (error) {
        console.log(error);
        
    }
}