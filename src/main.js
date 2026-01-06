import { app,BrowserWindow, ipcMain, Menu, dialog } from "electron";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const preload = path.join(__dirname, 'preload.js')

// PAGINAS HTML >>>>>
const page_home = path.join(__dirname, '../app/home/home.html')
const page_clients = path.join(__dirname, '../app/clientes/clientes-geral.html')
const page_cadastro = path.join(__dirname, '../app/clientes/cadastro/cadastro.html')
const page_ordemServicos = path.join(__dirname, '../app/ordem-servico/ordem-servico.html')
const page_servicos = path.join(__dirname, '../app/services/servicos.html')
const page_users = path.join(__dirname, '../app/users/usuarios.html')
const page_veiculos = path.join(__dirname, '../app/veiculos/veiculos.html')
const page_backup = path.join(__dirname, '../app/backup/backup.html')
const page_config = path.join(__dirname, '../app/configs/configs.html')
// <<<<< PAGINAS HTML

let win = null

const criarWin = () => {
    win = new BrowserWindow({
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            sandbox: false,
            preload: preload
        }
    })
    win.maximize()
    win.removeMenu()
    win.loadFile(page_home)
    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    criarWin()
})

// configs do preload >>>>

ipcMain.on('mudar-pagina', (event, page) => {
    switch(page.toLowerCase()){
        case 'home':
            win.loadFile(page_home)
            break
        case 'clientes':
            win.loadFile(page_clients)
            break
        case 'veiculos':
            win.loadFile(page_veiculos)
            break
        case 'os':
            win.loadFile(page_ordemServicos)
            break
        case 'services':
            win.loadFile(page_servicos)
            break
        case 'users':
            win.loadFile(page_users)
            break
        case 'backup':
            win.loadFile(page_backup)
            break
        case 'config':
            win.loadFile(page_config)
            break
        case 'new-client':
            win.loadFile(page_cadastro)
            break
    }
})

let lista_clientes = []
ipcMain.handle('confirmar', async(event) => {
    const result = await dialog.showMessageBox({
        type: "question",
        buttons: ['Confirmar', 'Cancelar'],
        message: 'Confirma os dados corretos do novo cliente?'
    })
    return result.response === 0
})

ipcMain.handle('cadastro-cliente', (event, cliente) => {
    if(lista_clientes.find(c => c.nome === cliente.nome)){
        // criar caixa de diálogo personalizado
        return
    }
    lista_clientes.push(cliente)
})