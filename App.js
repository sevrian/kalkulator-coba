import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      count: 0,
  
    };

  }

  inputAngka = (value) => { 
    if (this.state.count == 0)
    {
      this.setState({ count: value })
    } else { 
      this.setState({ count: this.state.count  + '' + value });
    }
  }

  countResult = () => { 
    let result = eval(this.state.count);
    this.setState({count: result})
  }

  
  render() { 
    return ( 
      <View style={{ flex:1,backgroundColor:'#6d6464'}}> 
        <StatusBar backgroundColor="#212121" barStyle="light-content" />
        
        <View style={{flex:0.75,justifyContent:"center"}}>
          <Text style={{ color: '#ffffff', fontSize: 50,textAlign: "right", color: '#ffffff',paddingRight:20,}} >{ this.state.count}</Text>  
        </View>
      
        <View style={{flex:1.25}}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={styles.fungsi}>
              <Text style={{ color: '#ffffff', fontSize: 25, textAlign: "center", padding: 10, color: '#ffffff' }} onPress={() => this.inputAngka('(')}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fungsi} onPress={() => this.inputAngka(')')}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",padding:10,color:'#ffffff'}}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator}onPress={() => this.inputAngka('/')}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",padding:10,color:'#ffffff'}}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator}onPress={() => this.inputAngka('*')}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",padding:10,color:'#ffffff'}}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => this.inputAngka(7)}>
            <Text style={styles.angka}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}}onPress={() => this.inputAngka(8)}>
            <Text style={styles.angka} >8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}} onPress={() => this.inputAngka(9)}>
            <Text style={styles.angka}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator2 } onPress={() => this.inputAngka('+')}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",padding:10,color:'#ffffff'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}}onPress={() => this.inputAngka(4)}>
            <Text style={styles.angka}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}}onPress={() => this.inputAngka(5)}>
            <Text style={styles.angka}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}}onPress={() => this.inputAngka(6)}>
            <Text style={styles.angka}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator2}onPress={() => this.inputAngka('-')}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",color:'#ffffff'}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",}}>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}} onPress={() => this.inputAngka(1)}>
              <Text style={styles.angka}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}} onPress={() => this.inputAngka(2)}>
            <Text style={styles.angka}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,justifyContent:"center"}} onPress={() => this.inputAngka(3)}>
            <Text style={styles.angka}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator2} onPress={() => this.countResult()}>
            <Text style={{color:'#ffffff', fontSize:25,textAlign:"center",padding:10,color:'#ffffff'}}>=</Text>
          </TouchableOpacity>
        
        </View>
          <View style={{ flexDirection: "row" }}>
        
         <TouchableOpacity style={{flex:1,alignContent:"flex-end"}} onPress={() => this.inputAngka(0)}>
            <Text style={styles.angka}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operator3} onPress={() => this.setState({count: 0})}>
              <Text style={{ color: '#0a0000', fontSize: 30, textAlign: "center", padding: 10,}} o>Hapus</Text>
          </TouchableOpacity>
         
        </View>
       </View>
       

      </View>
     );
  }
}

const styles = StyleSheet.create({
  angka: {
    color: '#ffffff', fontSize: 25,textAlign: "center",marginVertical:10, paddingVertical: 15, backgroundColor: '#070707', borderRadius: 40,
    height: 70, width: 70,
  },
  fungsi: {
    flex: 1, justifyContent: "center", backgroundColor: '#0026ff', borderRadius: 30,
  },
  operator: {
    flex: 1, justifyContent: "center", backgroundColor: '#2d3293', borderRadius: 30,
  },
  operator2: {
    flex: 1, justifyContent: "center", backgroundColor: '#10d130', borderRadius: 30, height: 70, marginTop: 10
  },
  operator3: {
    flex: 1,justifyContent: "center", backgroundColor: '#eeff00', borderRadius: 30, height: 70, marginTop: 10
  }
})
 
export default App;