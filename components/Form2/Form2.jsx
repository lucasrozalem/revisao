import { Form, Select, Input, Button, Checkbox, Row, Col, AutoComplete } from 'antd';
import React from 'react'
import { Switch } from 'antd';
import { Radio, Card } from 'antd';
import { Table, Divider, Tag } from 'antd';

const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Sexo',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'checked',
    key: 'checked',
    dataIndex: 'checked',
      },
  {
    title: 'Radio',
    dataIndex: 'radio',
    key: 'radio',
  },
  {
    title: 'select',
    dataIndex: 'select',
    key: 'select',
  },
  {
    title: 'boxItem',
    dataIndex: 'boxItem',
    key: 'boxItem',
    render: (boxItem) => {
      let texto = '';
      boxItem.map((e, i) => {
        if(i > 0) {
          texto = texto + ', ' + e
        } else {
          texto = e;
        }
      });
      return texto;
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a onClick={(e) => this.props.handleTableGet(e)}
        href="javascript:;">Pesquisa {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },  
    ];
    
  
    
 


export default class Form2 extends React.Component {
 
  render() {
    console.log('Essa é data chegando no component => ', this.props.data);
    return (
      <div style={{height:'100vh', width:'100%', }} >
      <Card style={{margin:0, position:"absolute",width:1000, left:'12%' }}>
      <Form 
      style={{backgroundColor:'#3423'}}
      labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="Nome">
          <Input 
          type='text'
          onChange={(e) => this.props.handleInputChange({name: "name", e})}
          />
        </Form.Item>

        <Form.Item label="Sexo">
          <Input 
          type='text'
          onChange={(e) => this.props.handleInputChange({name: "genre", e})}
          />
        </Form.Item>

        <Form.Item label="Idade">  
          <Input
          type='text'
          onChange={(e) => this.props.handleInputChange({name: "age", e})}
           />
        </Form.Item>

          <Form.Item label='Maior que 20 anos'>
          <Switch
            checked={this.props.age > 20 ? true : false}
            onChange={ this.props.handleOnChange}/>
         </Form.Item>
        <Form.Item label="Salario:">
       
        <Radio.Group  >
        <Radio value={1}
        onChange={(e) => this.props.handleChangeRadio(e)}
        >
          500-1000R$
        </Radio>
        <Radio  value={2}
        onChange={(e) => this.props.handleChangeRadio(e)}>
          1001-2000R$
        </Radio>
        <Radio  value={3}
        onChange={(e) => this.props.handleChangeRadio(e)}>
          2001R$+
        </Radio>
       </Radio.Group>
      
        </Form.Item>
         <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          
        </Form.Item>
        <Form.Item label='Qual desses itens voce conhece:'>
        <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={(e) => {this.props.onChange(e)}}
    onFocus={() => {this.props.onFocus()}}
    onBlur={() => {this.props.onBlur()}}
    onSearch={(e) => {this.props.onSearch(e)}}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Apple">Apple</Option>
    <Option value="sansung">Samsung</Option>
    <Option value="Razer">Razer</Option>
  </Select>
        </Form.Item>
          
    <Form.Item label="Voce ja teve??">
    <Checkbox.Group style={{ width: '100%' }} >
    <Row>
      <Col span={8}>
        <Checkbox
        onChange={(e) => this.props.handleOnChangeBox({e, name:'Catapora'})}
        checked="checked"
        value=" Catapora">Catapora</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox  
         onChange={(e) => this.props.handleOnChangeBox({e, name:'Gonorreia'})}
        checked="checked"
        value="Gonorreia">Gonorreia</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox 
         onChange={(e) => this.props.handleOnChangeBox({e, name:'Chifre'})}
        checked="checked"
        value="Chifre">Chifre</Checkbox>
      </Col>
   
    </Row>
     
  </Checkbox.Group>
  <Button 
  onClick={() => this.props.handleAxios()}
  type="primary" htmlType="submit">
            Submit
          </Button>
    </Form.Item>
    <Form.Item>
      <Table 
      
      columns={columns} 
      dataSource={
        this.props.data.length > 0 ?
        this.props.data.map((element) => {
          return (
            {
              name: element.name, 
              genre: element.genre, 
              age: element.age, 
              checked:element.age > 20 ? 'Sim' : 'Não', 
              radio:element.radio, 
              select:element.select, 
              boxItem: element.boxItem
            }
          )
        
        }) : []
      } 
      style={{width:950}}/>
      <Button 
    type="primary" htmlType="submit"
    onClick={() => this.props.handleTable()}>
                Submit Table
          </Button>
    <Button
    type="primary" htmlType="submit"
    onClick={(e) => this.props.handleAxiosGet(e)}>
    Procure
    </Button>
    </Form.Item>
    
      </Form>
      </Card>
      </div>
          );
  }
}

