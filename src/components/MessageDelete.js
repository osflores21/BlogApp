import React from 'react'
import { StyleSheet } from 'react-native'
import { Dialog, Portal, Text, Button } from 'react-native-paper'

const MessageDelete = ({ visible, setVisible, setDeleteP }) => {

  const hideDialog = () => {
    setVisible(!visible)
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>Delete Post</Dialog.Title>
        <Dialog.Content>
          <Text  style={styles.subTitle}  variant="bodyMedium">Are you sure to delete this post?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={() => {
            hideDialog();
            setDeleteP(true);
          }}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MessageDelete

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  subTitle:{
    textAlign: 'center',
  }
})