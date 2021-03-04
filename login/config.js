const button = document.querySelector("button")
const h2deErros = document.getElementById("erros")
button.addEventListener('click',() => {
    const v = new Verify()
    const datas = v.get()
    const local = localStorage.getItem("isLog")
    if(local == "no" || local == null && local != "yes"){
        if(datas.nome != '' && datas.nivel != ""  && datas.instrumento != "" && datas.isLog == "yes"){ 
            localStorage.setItem('nome',datas.nome)
            localStorage.setItem('instrumento',datas.instrumento)
            localStorage.setItem('nivel',datas.nivel)
            localStorage.setItem('isLog',datas.isLog)
            location.assign("")
        }
    }
})

class Verify{
    constructor(){
        this.jsonUsuario = {
            "nome":"",
            "instrumento":"",
            "nivel":'',
            "isLog":'no'
        }
        this.user = String(document.querySelector("input.user").value).toLowerCase()
        this.pass = String(document.querySelector("input.pass").value).toLowerCase()
    }

    get(){
        if(this.user == "" || this.pass == ""){
            h2deErros.id='erros--actived'
            h2deErros.innerHTML = "  Preencha todos os Campos  "
        } else {
            h2deErros.id='erros'
            h2deErros.innerHTML = ""
            return this.anality()
        }
    }

    anality(){

        if (this.user == "211001" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "José Alexsandro"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211002" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Adriano ribeiro sidronio"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211003" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Beatriz"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"

        } else if (this.user == "211004" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Ivanilsom Do nascimento cilva"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211005" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Clara"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211006" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Elizangela"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211007" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Joeverson dos Santos Nascimento"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211008" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Gilvania"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "211009" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Gustavo"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110010" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Henrique"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110011" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Humberto"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110012" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Isadora Araujo Martiniano"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110013" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Ítalo"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110014" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Jaynara Kellly Tavares Ramalho"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
       
        } else if (this.user == "2110015" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Jefferson"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110016" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Josehan"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110017" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Laiane"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110018" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Laura"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110019" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "John Lennon"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110020" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Leandro"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110021" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Liedson"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110022" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Lucinaldo"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110023" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Luís"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110024" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Isabelle"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110025" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Yasmim"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110026" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Yasmim Isidorio"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110027" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Tays"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110028" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Marcel"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110029" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Maria Eduarda"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110030" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Matheus"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110031" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Larissa"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110032" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Ronaldo"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110033" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Samira"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110034" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "José Sidrônio P. de Lucena"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110035" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Tamires da Silva Soares"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110036" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Gabi"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110037" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Ana Vitoria Alves de Melo"
            this.jsonUsuario["instrumento"] = "Teclado"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110038" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Valdemir"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110039" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Wendel"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110040" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Wesley"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110041" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Fernanda Kelly Clemente de Lima"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110042" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Franciele Sales da Silva"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110043" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Maria Erilania Costa Santos"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"
        
        } else if (this.user == "2110044" && this.pass == "amusicamudaomundo"){
            this.jsonUsuario["nome"] = "Gilherme Silva de Araujo"
            this.jsonUsuario["instrumento"] = "Violão"
            this.jsonUsuario["nivel"] = "Intermediario"
            this.jsonUsuario['isLog'] = "yes"

        } else {
            this.jsonUsuario["nome"] = ""
            this.jsonUsuario["instrumento"] = ""
            this.jsonUsuario["nivel"] = ""
            this.jsonUsuario['isLog'] = ""
            
            h2deErros.id='erros--actived'
            h2deErros.innerHTML = "Usuario ou Senha incoretos"
        }
        return this.jsonUsuario
    }
}