import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: "Sistema de Gestão Automotiva",

    
})