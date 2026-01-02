import { app, BrowserWindow, ipcMain, Menu, dialog } from "electron";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const preload = path.join(__dirname, 'preload.js')

// base de dados >>>>>
const dataBase = path.join(__dirname, './database.json')
// PAGINAS >>>>
const home_page = path.join(__dirname, '../app/home/home.html')
const cadastro_page = path.join(__dirname, '../app/cadastro/cadastro.html')

let clientes = []

let win = null
const criarJanela = () => {
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
    win.loadFile(home_page)
    // win.webContents.openDevTools()
}
let novaJanela = null
const formsWindow = (tipo) => {
    novaJanela = new BrowserWindow({
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            sandbox: false,
            preload: preload
        }
    })

    novaJanela.removeMenu()
    novaJanela.maximize()
    novaJanela.webContents.openDevTools()

    novaJanela.loadFile(tipo)
}

app.whenReady().then(() => {
    uptade_clients(dataBase, clientes)
    criarJanela()
})

