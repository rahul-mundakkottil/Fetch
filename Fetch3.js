
import React ,{Component}from "react"
import{ View ,Text,ActivityIndicator,FlatList,StyleSheet} from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";
import axios from 'axios';
//'https://gorest.co.in/public/v2/posts'


 
export default class Axios extends Component{
    constructor(){
        super();
        this.state={lodder:false,axiosdata:[]}
    }
   

     async axiosfunction(){
        this.setState({lodder:true})
        this.setState({loadaxios:1})
      let resp=await axios.get('https://gorest.co.in/public/v2/posts')
       
                this.setState({axiosdata:resp.data})
             this.setState({lodder: false})
             console.log(resp.data)} 
          
    
      
     
   
    render(){
        const RenderItem= ({item}) => (
            <View  style={styles.productbox}>
                <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{item.id}</Text>
                <Text style={{fontSize:12 ,color:'brown'}}>{item.title}</Text>
                <Text style={{fontSize:12 ,color:'brown'}}>{item.user_id}</Text>
                <Text style={{fontSize:15, fontWeight:'bold' ,color:'green'}}>{item.body}</Text>
            </View>
        )

     
    
        return(
            <View style={styles.view}>
               < ActivityIndicator size="large" color={"black"}  animating={this.state.lodder} ></ActivityIndicator>
              

             <Text style={styles.text } onPress={()=>this.axiosfunction()}>get data using axios</Text>
           
              
               <FlatList style={styles.flatlist} data={this.state.axiosdata}  renderItem={RenderItem}
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
