import { View, SafeAreaView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
      </SafeAreaView>
    )
  }
  
  return (
    <View>
      <RootApp />
    </View>
  );
}
