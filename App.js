import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { FontAwesome,Entypo ,AntDesign} from '@expo/vector-icons';
import fotowill from './assets/fotowill.jpg';


export default function App() {
  

  function handleRedeSocial(rede_social){

        switch(rede_social){
        case 'github' :
          Alert.alert('Meu GitHub:', 'https://github.com')
        break
        case 'instagran' :
          Alert.alert('Meu Instagram:', 'https://www.instagram.com/')
        break
        case 'linkedin' :
          Alert.alert('Meu Linkedin:', 'https://br.linkedin.com/')
        break

        }
  }
  
  
  
  
  
  
  return (
     
    
    


    <View style={styles.page}>
       <View style={styles.container_cabecalho} >
          <Image style={styles.fotowill}source={fotowill}/>
      
      
          <Text style={styles.titulo}>Curriculo Vitae</Text>
          <Text style={styles.nome}>William Santos</Text>
          <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
          
          

          <View style={styles.redes_sociais}>
           <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
           <FontAwesome name="github" size={40} color="black" />
           </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> handleRedeSocial('instagran')}>
           <AntDesign name="instagram" size={40} color="black" />
           </TouchableOpacity>
           
            
           <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
           <Entypo name="linkedin-with-circle" size={40} color="black" />
           </TouchableOpacity>
           

          </View> 
       </View>
          <View style={styles.card_container}>
           <View style={styles.card}>
               <View style={styles.card_header}>
                <Text style={styles.card_header_text}>Experiencia Profissinal</Text>
               </View>
               <View style={styles.card_content}>
                 <Text style={styles.card_content_text}>Desenvolvimento Web</Text>
                 <Text style={styles.card_content_text}>Montagem e Manutentenção de PC</Text>
               
               
               
               
               
                </View>



                <View style={styles.card_header}>
                <Text style={styles.card_header_text}>Formação acadêmica</Text>
               </View>
               <View style={styles.card_content}>
                 <Text style={styles.card_content_text}>Cursando: Análise e Desenvolvimento de Sistema.</Text>
                 <Text style={styles.card_content_text}>Instituiçao: Estacio De Sá RJ </Text>
               
               
                 
               
               
                </View>


           </View>


          </View>
         
        
        
          
          
          <View>    

      
      
      
       
       
               <StatusBar style="auto" />
          </View>      
      </View>      
   
      
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    

  },  
  container_cabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   
  fotowill:{
     width: 200,
     height: 200,
     borderRadius: 125,

  },

  nome: {
    fontSize:26,
    fontWeight:'bold',
    marginTop:10,

  },
  funcao: {
    color:'#939393',
    marginBottom:10
   

  },
  redes_sociais: {
  flexDirection:'row',
  justifyContent: 'space-between',
  width: '60%',
  marginTop: 5,
  },

  card: {
    width:'70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 20,
    backgroundColor: '#FFF',
    


  
},

card_container: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:10,

},

card_header_text:{
  fontSize:20,
  fontWeight:'bold',

},

card_content_text: {
  fontSize:12,
  fontWeight:'bold',
 
},



});
