import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Alert } from "react-native";
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";

const options = {
  keyPrefix: "uploads/",
  region: "ap-south-1",
  successActionStatus: 201,
  bucket: "text-to-speech-skyplor",
};

const client = new S3Client({
  region: options.region,
  credentials: {
    accessKeyId: "AKIA6ODU7OGHHOCG7OL5",
    secretAccessKey: "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",
  },
});

export const uploadFile = async (fileName: string, path: string) => {
  try {
    const response = await fetch(path);
    const blob = await response.blob();
    const s3Response = await client.send(
      new PutObjectCommand({
        Bucket: "camera-sec",
        Key: "uploads/" + fileName,
        Body: blob,
      })
    );
    console.log("File upload successfully", s3Response);
  } catch (error) {
    console.log("🚀 ~ file: s3Upload.tsx:34 ~ uploadFile ~ error:", error);
  }
};
