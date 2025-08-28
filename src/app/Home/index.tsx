import { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Filter } from '@/components/filter'
import { Item } from '@/components/Item'

import { styles } from "./styles"
import { FilterStatus } from '@/Types/filterStatus'
import { itemsStorage, ItemStorage } from '@/Storage/itemsStorage'


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]


export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState('')
  const [items, setItems] = useState<ItemStorage[]>([])


  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", 'Informe a descrição para adicionar um item.')
  }

  const newItem = {
    id: Math.random().toString(36).substring(2),
    description,
    status: FilterStatus.PENDING,

  }

  await itemsStorage.add(newItem)
  await itemsByStatus()

  setFilter(FilterStatus.PENDING)
  Alert.alert("Adicionado", `Adicionado ${description}`)
  setDescription('')

}

  async function itemsByStatus(){
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)
    
  }  catch (error) {
      console.error(error)
      Alert.alert("Erro", "Não foi possível carregar os itens.")
  }
  }

  async function handleToggleItemStatus(id: string){
    try {
      await itemsStorage.toggleStatus(id)
      await itemsByStatus()
    } catch (error) {
      console.error(error)
      Alert.alert("Erro", "Não foi possível alterar o status do item.")
    }


  }



  useEffect(() => {
    itemsByStatus()
  }, [filter])

  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.remove(id)
      await itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível remover o item.")
    }
  }

  function handleClearItems() {
    Alert.alert("Limpar", "Deseja realmente limpar todos os itens?", [
      {text: "Não", style: "cancel"},
      {text: "Sim", onPress: () => onClear()}
    ])
  }

  async function onClear() {
    try {
      await itemsStorage.clear()
      setItems([])
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível remover todos os itens.")
    }
  }


  return(
    <View  style = {styles.container}>
     <Image source={require("@/assets/logo.png")} style= {styles.logo} />

    <View style= {styles.form}>
      <Input placeholder='O que você está procurando?' 
      onChangeText={setDescription}
      value= {description}
      />
      <Button title=  "Adicionar" onPress={handleAddItem}/>
     </View>

     <View style= {styles.content}>
       <View style={styles.header}> 
      {
        FILTER_STATUS.map((status) => (
            <Filter 
            key={status} 
            status= {status} 
            isActive ={status === filter}
            onPress={() => setFilter(status)}
            />
        ))}

        <TouchableOpacity style={styles.clearButton} onPress={handleClearItems}>
          <Text style={styles.clearText} >Limpar</Text>
        </TouchableOpacity>
        </View>
        
        <FlatList
          data={items}
          keyExtractor= {(item) => item.id}
          renderItem={({item} ) => (
            <Item
              data={item}
              onStatus={() => handleToggleItemStatus(item.id)}          
              onRemove={() => handleRemoveItem(item.id)}
              />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle= {styles.listContent}
          ListEmptyComponent= { () => <Text style= {styles.empty}>Nenhum item foi adicionado</Text>}
        />
     </View>
    </View>
  )
};
