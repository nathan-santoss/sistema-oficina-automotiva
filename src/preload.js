import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: "Sistema de Gestão Automotiva",
    loadCad: (destino) => ipcRenderer.send('new-Window', destino),

    novo_cliente: (cliente) => ipcRenderer.send('novo-cliente', cliente)
    
})