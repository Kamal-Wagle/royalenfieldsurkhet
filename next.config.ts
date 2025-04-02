import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['example.com', 'media.istockphoto.com' , 'www.shutterstock.com' , 'res.cloudinary.com' , 'images.unsplash.com' , 'images.ctfassets.net' , 'www.foodandwine.com' , 'ichef.bbci.co.uk' , 'cdn5.vectorstock.com' , 'picsum.photos'], // Add multiple image domains here
  },
};

export default nextConfig;
