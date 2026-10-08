import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { api } from '../api/api';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o usuário e a senha.');
      return;
    }

    setLoading(true);

    try {
      // 1. Consulta /users para validar existência do usuário na Fake Store API
      const usersResponse = await api.get('/users');
      const usersList = usersResponse.data;

      const userExists = usersList.find(
        (user) => user.username === username.trim() && user.password === password.trim()
      );

      if (!userExists) {
        Alert.alert('Erro de Autenticação', 'Usuário ou senha incorretos.');
        setLoading(false);
        return;
      }

      // 2. Realiza a autenticação via POST em /auth/login
      const authResponse = await api.post('/auth/login', {
        username: username.trim(),
        password: password.trim(),
      });

      if (authResponse.data && authResponse.data.token) {
        navigation.replace('Home');
      } else {
        Alert.alert('Erro', 'Não foi possível autenticar o usuário.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Falha na Conexão', 'Erro ao conectar à API. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Fake Store Manager</Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          editable={!loading}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>ENTRAR</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.hint}>
          Dica de teste API: Usuário <Text style={styles.bold}>johnd</Text> / Senha <Text style={styles.bold}>m38rmF$</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F2F5',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#90CAF9',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  hint: {
    marginTop: 20,
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
});