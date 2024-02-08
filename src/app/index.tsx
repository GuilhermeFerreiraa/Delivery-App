import CategoryButton from '@/components/category-button';
import Header from '@/components/header';
import { View, FlatList } from 'react-native';
import { CATEGORIES } from "@/utils/data/products";
import { useState } from 'react';

export default function Home() {
 const [seletedCategory, setSeletedCategory] = useState<string>(CATEGORIES[0]);

 const handleCategorySelected = (seletedCategory: string) => {
  setSeletedCategory(seletedCategory);
 }

 return (
  <View className="flex-1 pt-8">
   <Header title="Faça seu pedido" cartQuantity={10} />

   <FlatList
    data={CATEGORIES}
    keyExtractor={(i) => i}
    horizontal
    className='max-h-10 mt-5'
    contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => <CategoryButton title={item} isSelected={item === seletedCategory} onPress={() => handleCategorySelected(item)} />}
   />
  </View>
 )
}