import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: 'Sistema de Gestão Automotiva',

    changePage: (page) => ipcRenderer.send('mudar-pagina', page),
    confirmar: () => ipcRenderer.invoke('confirmar'),
    register: (cliente) => ipcRenderer.invoke('cadastro-cliente', cliente)
})

