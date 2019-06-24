import { Schema } from 'mongoose';
import moment from 'moment';

moment.locale('pt-br');

const formSchema = new Schema({
  name: {
    type: String,
     },
 genre: {
    type: String
  },
  age: {
    type: String
  },
  salary: {
    type: String
  },
  select: {
    type: String,
    
  },
  checkBox: [{
    type: String
  }],
  
  
});

export default formSchema;