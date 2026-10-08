import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function GroupInfo() {
  // Altere para os nomes e RAs reais dos componentes do grupo
  const groupMembers = [
    { id: '1', name: 'Geraldo Konig Scheurer', RA: '1126596' },
    { id: '2', name: 'Pedro Henrique Fanton', RA: '1133577' },
    { id: '3', name: 'Tainã Metz', RA: '1134314' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>Desenvolvedores do App</Text>
        <Text style={styles.description}>
          Aplicativo mobile desenvolvido para a avaliação da disciplina de React Native, utilizando Expo e consumindo os serviços da Fake Store API.
        </Text>
      </View>

      <Text style={styles.sectionHeader}>Integrantes do Grupo:</Text>

      <FlatList
        data={groupMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <Text style={styles.memberName}>{item.name}</Text>
            <Text style={styles.memberRa}>RA: {item.RA}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  headerBox: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  memberCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
    elevation: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  memberRa: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});