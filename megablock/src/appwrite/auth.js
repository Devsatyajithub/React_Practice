import conf from '../conf.js';
import {Client, Account, ID } from "appwrite";


export class AuthService {
    Client = new Client();
    Account;

    constructor() {
        this.Client
             .setEndpoint(conf.appwriteUrl)
             .setProject(conf.appwriteProjectId);
         this.account = new Account(this.Client);   
    }
    async creatAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                
            }
            else {
                return userAccount  ;
            }
        } catch (error) {
            throw error;
            
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
            
        }
    }
    async getCurrentUser() {
        try {
            
        } catch (error) {
            throw (error);
        }
        return null;
    }
    async logout(){
        try {
            
        } catch (error) {
            throw(error);
        }
    }
}

const authService = new AuthService();

export default authService