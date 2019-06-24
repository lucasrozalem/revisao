import mongoose from 'mongoose';
import formSchema from '../schemas/form-Schema'
//model faz contato com o banco de dados
class formModel {
   static  search = async function(){
    return new Promise(async (resolve, reject) => {
      
       
        const alldados = await this.find();
       // console.log("Procurando",alldados)
        if (alldados.length == 0 ) {
            reject('Usuário não encontrado.');
          } else {   
              resolve(alldados);
                      }         
      })};

    static createForm = async function({data }) {
        return new Promise(async (resolve, reject) => {
            const {
                name,
                genre,
                age,
                salary,
                select,
                boxItem,
            } = data 
            console.log('check é', boxItem)
            const existingName = await this.findOne({name});
            if (!existingName) {
               // console.log('Passou aqui exist')
                const form = await this.create({
                  name,
                  genre,
                  age,
                  salary,
                  select,
                  boxItem,
                });
                resolve(true)
           
            
                }
                else{
               reject(false)
                };
            }
        )}
    }

 


formSchema.loadClass(formModel);

const Form = mongoose.model('Form', formSchema);

export default Form