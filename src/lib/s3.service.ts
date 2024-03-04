import { GetPresignedUrlDto } from '@/modules/upload/dto/upload.dto';
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} from '@/utils/constants';
import { getFileName } from '@/utils/file';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

class S3Service {
  private s3: S3Client;
  constructor() {
    this.s3 = new S3Client({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile(file: File) {
    try {
      const key = getFileName(file.name);
      const command = new PutObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: key,
        Body: Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
      });
      await this.s3.send(command);
      const url = `https://${AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
      return { url };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async presignedUrlS3({ fileName, type, folderPrefix }: GetPresignedUrlDto) {
    try {
      const key = folderPrefix
        ? `${folderPrefix}/${getFileName(fileName)}`
        : getFileName(fileName);
      const command = new PutObjectCommand({
        Key: key,
        Bucket: AWS_BUCKET_NAME,
        ContentType: type,
        ACL: 'bucket-owner-full-control',
      });
      const uploadUrl = await getSignedUrl(this.s3, command, {
        expiresIn: 3600,
      });

      return {
        uploadUrl,
        url: `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key}`,
      };
    } catch (error) {
      console.error('Error getting file with S3: ', error);
      throw error;
    }
  }
}

export const s3Service = new S3Service();
