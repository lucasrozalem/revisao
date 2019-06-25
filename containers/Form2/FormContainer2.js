import Form2 from "../../components/Form2/Form2";
import React, { Component } from "react";
import axios from "axios";

export default class FormContainer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      age: "",
      checked: false,
      radio: "",
      select: "",
      boxItem: [],
      data: []
    };
  }
  refresh = () =>{
    axios({
      method: "get",
      url: "/api/form",
        })
      .then(resp => {
        this.state.data = resp
        this.setState({data:resp.data, name:'',genre:'',age:'',radio:'',select:'',boxItem:[]});
      }
     )

  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "/api/form",
        })
      .then(resp => {
        this.state.data = resp

      this.setState(resp);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleOnChange = checked => {
    //console.log("trocou", checked);
    if (checked == false) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
  };

  handleChangeRadio = e => {
    //console.log("entrou e ", e);
    let option = "";
    option = e.target.value;

    if (option === 1) {
      this.setState({ radio: "500-1000R$" });
      //console.log("1");
    } else {
      if (option === 2) {
       // console.log("2");
        this.setState({ radio: "1001-2000R$" });
      } else {
        if (option === 3) {
         // console.log("3");
          this.setState({ radio: ">=2001R$" });
        }
      }
    }
  };

  handleOnChangeBox = ({ e, name }) => {
    let boxItem = this.state.boxItem;
    //console.log("Esse é o name => ", name);
    if (e.target.checked === true) {
      boxItem.push(name);
    } else {
      boxItem = boxItem.filter(element => element != name);
      //console.log("Esse é o boxItem => ", boxItem);
    }
    this.setState(boxItem);
  };

  onChange = value => {
    //console.log("selected", value);
    this.setState({ select: value });
  };

  onBlur = () => {
    //console.log("blur");
  };

  onFocus = () => {
    //console.log("focus");
  };

  onSearch = val => {
    //console.log("search:", val);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    this.refresh()
  };

  handleInputChange = ({ name, e }) => {
    this.setState({ [name]: e.target.value });
  };

  //envia os dados para o node via post
  handleAxios = () => {
    axios({
      method: "post",
      url: "/api/form",
      data: {
        name: this.state.name,
        genre: this.state.genre,
        age: this.state.age,
        checked: this.state.checked,
        radio: this.state.radio,
        select: this.state.select,
        boxItem: this.state.boxItem
      }
    })
      .then(resp => this.refresh())
      .catch(error => {
        console.log(error);
      });

  };
  handleAxiosGet = () => {
    axios({
      method: "get",
      url: "/api/form",
      data: {
        name: this.state.name,
        genre: this.state.genre,
        age: this.state.age,
        checked: this.state.checked,
        radio: this.state.radio,
        select: this.state.select,
        boxItem: this.state.boxItem
      }
    })
      .then(resp => console.log(resp))
      .catch(error => {
        console.log(error);
      });
  };

  handleTable = () => {
    let dataTable = this.state.data;

    let data = {
      name: this.state.name,
      genre: this.state.genre,
      age: this.state.age,
      checked: this.state.checked,
      radio: this.state.radio,
      select: this.state.select,
      boxItem: this.state.boxItem
    };

    dataTable.push(data);

    this.setState({ data: dataTable });
  };

  render() {
    return (
      <div>
        <Form2
          name={this.state.name}
          genre={this.state.genre}
          age={this.state.age}
          checked={this.checked}
          radio={this.radio}
          select={this.select}
          boxItem={this.select}
          data={this.state.data}
          handleOnChange={this.handleOnChange}
          handleInputChange={this.handleInputChange}
          handleChangeRadio={this.handleChangeRadio}
          handleInputRadio={this.handleInputRadio}
          onChange={this.onChange}
          handleOnChangeBox={this.handleOnChangeBox}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onSearch={this.onSearch}
          handleAxios={this.handleAxios}
          handleTable={this.handleTable}
          handleAxiosGet={this.handleAxiosGet}
          componentDidMount={this.componentDidMount}
        />
        <pre>{/*JSON.stringify(this.state, null, 2)*/}</pre>
      </div>
    );
  }
}
