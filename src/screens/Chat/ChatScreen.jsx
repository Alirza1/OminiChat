import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    // ilk mesajlar
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    // yeni mesajlar
  };

  const renderMessageItem = ({item}) => (
    <View style={styles.messageItem}>
      {/* Message item*/}
      <Text style={styles.messageText}>{item.text}</Text>
      {/* Oxunmus mesaj/vaxt */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item, index) => index.toString()}
        // nese elave
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messageItem: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  messageItemRight: {
    backgroundColor: '#0084ff',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: 'black',
    fontSize: 16,
  },
  messageTextRight: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    padding: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 4,
    borderColor: '#999',
    backgroundColor: 'white',
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0084ff',
    borderRadius: 20,
    marginLeft: 4,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageMessage: {
    width: 150,
    height: 100,
    borderRadius: 15,
    margin: 5,
  },
  audioMessageBubble: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default ChatScreen;
