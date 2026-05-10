import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { FlashList} from "@shopify/flash-list"
import Card from "@/components/Card";

//a biblioteca de flashlist é responsavel por receber os dados e fazer o processo de renderizacao desses dados 
//-> é necessario instalar: npx expo install @shopify/flash-list

//esse aqui é a mesma coisa do card, ai teria que transformar em uma coisa a parte -> arquivo da pasta model, pra importar aq e no componente de card
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function Index() {
  //armazenar os dados
  const [data, setData] = useState<Product[]>([]);

  //para fazer a requisicao assim que abrir a tela
  useEffect(()=> {
    function getData(){
      fetch(`https://dummyjson.com/products?select=id,title,description,price,images`)
      .then((response) => response.json())
      .then((data)=> setData(data.products))
      .catch((e) => console.log("Deu erro: ", e))
    }
    getData() //para ser executado assim que abre a tela 
  }, [])//o array irá garantir que rode apenas uma vez ao abrir a tela.
  return (


    <View style={style.container}>
      <FlashList
        data={data} //recebe os dados
        horizontal //horizontal para rolar para o lado
        showsHorizontalScrollIndicator={false} //para nao mostrar a barra de rolagem
        // @ts-ignore -> pra ignorar o erro fantasma do meu vs
        estimatedItemSize={150} //obrigatorio na flash list -> significa que meu card, tem mais ou menos 150px de largura (isso pq ta na horizontal)
        //o render item é responsavel por receber o item, e jogar para o meu componente -> entao ele recebeu os dados e passa pro meu componente
        renderItem={({item}) => (<Card title={item.title} description={item.description} price={item.price} image={item.images}/>)}  
      />
    </View>
  );
}


const style = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingTop: 50
      }
})