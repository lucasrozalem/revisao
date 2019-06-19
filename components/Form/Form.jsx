import React, { Component } from 'react'
import { Input } from 'antd';


export default class Form extends Component {
    render(){
        return (
            <div>
            <label htmlFor='name'>Nome: </label>
            <Input 
            placeholder="Digite seu nome"
            type='text'
            onChange={(e) => this.props.handleChangeName(e)}
            id='name'
            style={{width:200}}
            value={this.props.name}
             />
    <br />
            <label htmlFor="lastname">Sobrenome: </label>
            <Input
            id='lastname'
            value={this.props.lastName}
            style={{width:200}}
            type='text'
            onChange={(e) => this.props.handleChangeLastName(e)}
            placeholder={'Escreva seu sobrenome'}/> 
            <br />

            
            <label htmlFor='age'>Idade: </label>
            <Input 
            id='age'
            type='text'
            placeholder={'Escreva sua idade'}
            onChange={(e) => this.props.handleChangeAge(e)}
            value={this.props.age}
            style={{width:200}}
            />
            <br />
          
            <label htmlFor="work">Empregro: </label>
            <Input 
            id='work'
            type='text'
            onChange={(e) => this.props.handleChangeWork(e)}
            placeholder={'Escreva sua função'}
            style={{width:200}}
            value={this.props.work}/>
            <br/>

            <label htmlFor="company">Empresa: </label>
            <Input 
            id='company'
            type='text'
            placeholder={'Escreva sua empresa'}
            onChange={(e) => this.props.handleChangeCompany(e)}
            value={this.props.company}
            style={{width:200}}
            />
            <br></br>
            </div>

            
        )
    }
    
}