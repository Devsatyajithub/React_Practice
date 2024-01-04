import { Service } from 'appwrite/types/service.js';
import conf from '../conf.js';
import {Client, ID, Databases, Storage,  Query, queries } from "appwrite";

export class Service{
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.Client
             .setEndpoint(conf.appwriteUrl)
             .setProject(conf.appwriteProjectId);
         this.databases = new Databases(this.Client);
         this.bucket = new Storage(this.Client);
    }
async createPost(title, slug, content, featuredImage, status, userId){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )

    } catch (error) {
        throw error;
    }
}

async updatePost(slug, {title,  content, featuredImage, status, userId}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }

        )
    } catch (error) {
        throw error;
    }
}

async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true

    } catch (error) {
        throw error;
    }
}

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )

    } catch (error) {
        throw error;
    }
}

async getPost(queries= [Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
               
            )
          } catch (error) {
            throw error;
          }
}

//file upload service.

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.apperiteBucketId,
            ID.unique(),
            file,
        )
    } catch (error) {
        throw error;
        
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.apperiteBucketId,
            fileId
        )
         return true
    } catch (error) {
        throw error;
    }
}
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.apperiteBucketId,
        fileId
    )
}

}


const Service = new Service()
export default Service


