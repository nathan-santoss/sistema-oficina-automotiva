import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: "Sistema de Gestão Automotiva",
    loadCad: (destino) => ipcRenderer.send('new-Window', destino),
    finishCad: () => ipcRenderer.send('close-cad'),

    novo_cliente: (cliente) => ipcRenderer.send('novo-cliente', cliente)
    
})