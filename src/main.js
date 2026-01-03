import { app,BrowserWindow, ipcMain, Menu, dialog } from "electron";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const preload = path.join(__dirname, 'preaload.js')

// PAGINAS HTML >>>>>
const page_home = path.join(__dirname, '../app/home/home.html')
const page_clients = path.join(__dirname, '../app/clientes/clientes-geral.html')
const page_ordemServicos = path.join(__dirname, '../app/ordem-servico/ordem-servico.html')
const page_servicos = path.join(__dirname, '../app/services/servicos.html')
const page_users = path.join(__dirname, '../app/users/usuarios.html')
const page_veiculos = path.join(__dirname, '../app/veiculos/veiculos.html')
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