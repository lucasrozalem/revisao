import React, { Component } from 'react'
import Form from '../../components/Form/Form'

export default class ForContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            lastName: '',
            age: '',
            work: '',
            company: ''
          };
            }

        handleChangeName = (e) => {
            this.setState({ name: e.target.value });
                console.log('Entrou aqui e esse é o e: ', e);
            }

        handleChangeLastName = (e) => {
            this.setState({ lastName: e.target.value });
                console.log('Entrou aqui e esse é o e: ', e);
                }    

        handleChangeAge = (e) => {
            this.setState({ age: e.target.value });
                 console.log('Entrou aqui e esse é o e: ', e);
                        }    

         handleChangeWork = (e) => {
            this.setState({ work: e.target.value });
                console.log('Entrou aqui e esse é o e: ', e);
                        } 

         handleChangeCompany = (e) => {
            this.setState({ company: e.target.value });
                console.log('Entrou aqui e esse é o e: ', e);
                  }  
                
        
                         
    render(){
        return(
        <div>
            <Form 
           name={this.state.name}
           lastName={this.state.lastName}
           age={this.state.age}
           work={this.state.work}
           company={this.state.company}
           handleChangeName={this.handleChangeName}
           handleChangeLastName={this.handleChangeLastName}
           handleChangeAge={this.handleChangeAge}
           handleChangeWork={this.handleChangeWork}
           handleChangeCompany={this.handleChangeCompany}
            />
            <pre>
		        {JSON.stringify(this.state, null, 2)}
	        </pre>
        </div>
        );
    }
}