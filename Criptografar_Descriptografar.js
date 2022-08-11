//Para colocar para rodar:
//1. Abra o terminar (cmd)
//2. No cmd digite (cd) e direcione para a pasta onde o arquivo está. Exemplo: cd Downloads
//3. No cmd dentro da pasta onde o arquivo está digite: node Criptografar_Descriptografar.js
//4. Aperte o enter kkkkk

//Caso deseje mudar a frase criptografada vá até a linha 29, e altere a frase dentro das aspas.

const cryto = require('crypto')
const secret = 'abcdeabcdeabcdeabcdeabcdeabcdeab'

const encrypt = value => {
    const iv = Buffer.from(cryto.randomBytes(16))
    const cipher = cryto.createCipheriv('aes-256-cbc', Buffer.from(secret),iv)
    let encrypted = cipher.update(value)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}
const decrypt = value => {
    const [iv, encrypted] = value.split(':')
    const ivBuffer = Buffer.from(iv, 'hex')
    const decipher = cryto.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer)
    let content = decipher.update(Buffer.from(encrypted, 'hex'))
    content = Buffer.concat([content, decipher.final()])
    return content.toString()
}

const crypted = encrypt('@D_araujof_')

console.log(crypted)
const decrypted = decrypt(crypted)
console.log(decrypted)