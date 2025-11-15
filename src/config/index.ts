import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    cloudinary: {
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY
    },
    jwt_secret: process.env.JWT_SECRET,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    jwt_expire_in: process.env.JWT_EXPIRES_IN,
    reset_password_expire_in: process.env.RESET_PASSWORD_EXPIRES_IN,
    open_router_api_key: process.env.OPENROUTER_API_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY
}