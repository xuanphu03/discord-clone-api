import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { getPresignedUrlDto } from './dto/upload.dto';
import { s3Service } from '@/lib/s3.service';

export const router = new Hono();

const storage = 

router
  .post('/', async (c) => {
    const body = await c.req.parseBody();
    const file = body['file'] as File;
    const result = await s3Service.uploadFile(file);
    return c.json({
      url: result.url,
    });
  })
  .post('/presigned-url', zValidator('json', getPresignedUrlDto), async (c) => {
    const body = c.req.valid('json');
    const data = await s3Service.presignedUrlS3(body);
    return c.json(data, 201);
  });
