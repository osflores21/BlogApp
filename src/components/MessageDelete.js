import React from 'react'
import { StyleSheet } from 'react-native'
import { Dialog, Portal, Text } from 'react-native-paper'

const MessageDelete = ({ visible }) => {

  const hideDialog = () => {
    false
  };

  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default MessageDelete

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
})