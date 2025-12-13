import { app, BrowserWindow, ipcMain, Menu, dialog } from "electron";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const preload = path.join(__dirname, 'preload.js')
const dataBase = path.join(__dirname, './database.json')
const home_html = path.join(__dirname, '../app/home/home.html')

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
    win.loadFile(home_html)
    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    uptade_clients(dataBase, clientes)
    criarJanela()
})

//função para salvar e atualizar novos clientes

const salvarDados = (destino, array) => {
    try{
        const fileJSON = JSON.stringify(array, null, 2)
        fs.writeFileSync(destino, fileJSON, 'utf-8')
    }catch(e){
        console.error(`(Linha 33 - main.js) FALHA em salvar novos dados: ${e}`)
    }
}
const uptade_clients = (localSaves, array) => {
    try{
        const fileString = fs.readFileSync(localSaves, 'utf-8')
        const fileJSON = JSON.parse(fileString)
        if(fileJSON.length === 0 || fileJSON === ''){
            console.log('Sem clientes cadastrados');
            return
        }
        array = fileJSON
    }catch(e){
        console.error('Erro ao atualizar lista de clientes')
    }
}