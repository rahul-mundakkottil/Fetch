
import React ,{Component}from "react"
import{ View ,Text,ActivityIndicator,FlatList,StyleSheet} from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";
import axios from 'axios';
//'https://gorest.co.in/public/v2/posts'


 
export default class Fetch extends Component{
    constructor(){
        super();
        this.state={lodder:false,fetchdata:[]}
    }
     fetchfunction (){
        this.setState({lodder:true})
        this.setState({loadfetch:1})
        fetch('https://gorest.co.in/public/v2/users')
        .then((response)=>response.json())
        .then((response)=>{
          if(response.length>0){this.setState({fetchdata:response})
        this.setState({lodder:false})
         console.log ("fetch data is",response)}
         
     })
          .catch((error)=>{
            this.setState({lodder:true})
            console.log("error is",error)
          })
    }


   
    render(){
        const RenderItem= ({item}) => (
            <View  style={styles.productbox}>
                <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{item.email}</Text>
                <Text style={{fontSize:12 ,color:'brown'}}>{item.gender}</Text>
                <Text style={{fontSize:12 ,color:'brown'}}>{item.email}</Text>
                <Text style={{fontSize:12 ,color:'brown'}}>{item.status}</Text>
                <Text style={{fontSize:15, fontWeight:'bold' ,color:'green'}}>{item.body}</Text>
            </View>
        )

       
    
        return(
            <View style={styles.view}>
               < ActivityIndicator size="large" color={"black"}  animating={this.state.lodder} ></ActivityIndicator>
              
             <Text style={styles.text } onPress={()=>this.fetchfunction() }>get data using fetch </Text>
            
              
               <FlatList style={styles.flatlist} data={this.state.fetchdata}  renderItem={RenderItem}
               ></FlatList>
            </View>

        )
    }
}
 const styles= StyleSheet.create({
    view:{
        height:'100%',
    width:'100%',
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center'
    },
    text:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold'},
    flatlist:{
        
        backgroundColor:"black"
    
    },
    productbox:{
        width:350,
        elevation:20,
        padding:10,
        marginBottom:10,
        backgroundColor:"white"
    }

 })
