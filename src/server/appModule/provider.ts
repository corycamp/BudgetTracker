import { AppModule } from "./appModule";

let appModuleInstance: AppModule|null = null;

export const provideAppModule=(module:AppModule)=>{
    appModuleInstance = module;
}

export const getAppModule=():AppModule=>{
    if(!appModuleInstance){
        throw new Error("No App module found");
    }
    return appModuleInstance;
}
